// ======= 1. State =======
let items = localStorage.getItem("items");
let resources = items ? JSON.parse(items) : [];

let status_opt = ["To Learn", "In Progress", "Completed"];
let types_opt = ["Book", "Article", "Video", "Course", "Other"];
let filter_opt = ["All", ...status_opt];

let currentFilter = "All"; // global filter state

// ======= 2. DOM Elements =======
const form = document.getElementById('resource-form');
const titleInput = document.getElementById('title');
const typeSelect = document.getElementById('type');
const statusSelect = document.getElementById('status');
const resource_list = document.getElementById('resource-list');
const filterEL = document.getElementById('filter');
renderResources();

// ======= Initialize filter options =======
filter_opt.forEach(opt => {
    const optionEl = document.createElement("option");
    optionEl.value = opt;
    optionEl.textContent = opt;
    filterEL.appendChild(optionEl);
});

// ======= Event Listeners =======

// Filter select
filterEL.addEventListener("change", () => {
    currentFilter = filterEL.value;
    renderResources();
});

// Form submit
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = titleInput.value.trim();
    const type = typeSelect.value;
    const status = statusSelect.value;

    if (!title) {
        alert("Enter a valid title!");
        return;
    }

    const resource_obj = {
        id: Date.now(),
        title: title,
        type: type,
        status: status
    };

    resources.push(resource_obj);
    form.reset();
    renderResources();
});

// ======= 3. Render Function =======
function renderResources() {
    // Determine which array to render based on current filter
    let renderArray = currentFilter === "All"
        ? resources
        : resources.filter(r => r.status === currentFilter);

    // Clear previous content
    resource_list.innerHTML = '';

    // Save resources to localStorage
    localStorage.setItem("items", JSON.stringify(resources));

    if (renderArray.length === 0) {
        const emptyMsg = document.createElement("p");
        emptyMsg.textContent = "No resources found!";
        resource_list.appendChild(emptyMsg);
        return;
    }

    renderArray.forEach((el, index) => {
        // S.N
        const no = document.createElement("h4");
        no.textContent = `${index + 1}.`;

        // Title
        const title = document.createElement("p");
        title.textContent = el.title;

        // Type
        let type = document.createElement("p");
        type.textContent = el.type;

        // Status
        const status = document.createElement("select");
        status_opt.forEach(opt => {
            const option = document.createElement("option");
            option.textContent = opt;
            option.value = opt;
            if (opt === el.status) option.selected = true;
            status.appendChild(option);
        });

        status.addEventListener("change", (e) => {
            el.status = e.target.value;
            renderResources(); // re-render with same filter
        });
        status.style.justifySelf = "center";
        status.style.alignSelf = "center";

        // Actions
        const element_id = el.id;
        const action_div = document.createElement("div");
        action_div.classList.add("action-div");

        // Edit button
        const edit_btn = document.createElement("button");
        edit_btn.textContent = "Edit";
        edit_btn.addEventListener("click", () => {
            if (edit_btn.textContent === "Edit") {
                // Enable editing
                title.contentEditable = true;
                title.focus();

                // Replace type <p> with <select>
                const edit_type = document.createElement("select");
                types_opt.forEach(opt => {
                    const option = document.createElement("option");
                    option.textContent = opt;
                    option.value = opt;
                    if (opt === el.type) option.selected = true;
                    edit_type.appendChild(option);
                });
                edit_type.style.justifySelf = "center";
                edit_type.style.alignSelf = "center";

                type.replaceWith(edit_type);
                type = edit_type;

                edit_btn.textContent = "Done";
            } else {
                // Save changes
                if (title.textContent.trim() === "") {
                    alert("Enter a valid title!");
                    return;
                }
                el.title = title.textContent.trim();
                el.type = type.value;

                title.contentEditable = false;

                // Replace select back to <p>
                const type_p = document.createElement("p");
                type_p.textContent = el.type;
                type.replaceWith(type_p);
                type = type_p;

                edit_btn.textContent = "Edit";
                renderResources();
            }
        });

        // Delete button
        const del_btn = document.createElement("button");
        del_btn.textContent = "Delete";
        del_btn.addEventListener("click", () => {
            resources = resources.filter(r => r.id !== element_id);
            renderResources();
        });

        action_div.append(edit_btn, del_btn);

        // Resource card
        const resource_card = document.createElement("div");
        resource_card.classList.add("resource-card");
        resource_card.append(no, title, type, status, action_div);

        resource_list.appendChild(resource_card);
    });
}
