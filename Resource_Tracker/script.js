// ======= 1. State =======
let resources = []; // Array to hold all resources

// ======= 2. DOM Elements =======
const form = document.getElementById('resource-form');
const titleInput = document.getElementById('title');
const typeSelect = document.getElementById('type');
const statusSelect = document.getElementById('status');
const resource_list = document.getElementById('resource-list');

// ======= 3. Event Listener (Form Submit) =======
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload

    // 3a. Read input values
    const title = titleInput.value;
    const type = typeSelect.value;
    const status = statusSelect.value;

    // 3b. Create new resource object with unique ID
    let resource_obj = {
        id : Date.now(),
        title : title,
        type : type,
        status : status
    }

    // 3c. Push into resources array
    resources.push(resource_obj);

    // 3d. Clear input fields (form.reset() works nicely)
    form.reset();

    renderResources();
});

// ======= 4. Render Function =======
function renderResources() {
    // Clear resourceList container 
    resource_list.innerHTML = '';

    

    // Loop over resources array
    resources.forEach((el,index) => {

        let no = document.createElement("h4");
        no.textContent = ++index+".";

        let title = document.createElement("p");
        title.textContent = el.title;

        let type = document.createElement("p");
        type.textContent = el.type;

        let status = document.createElement("p");
        status.textContent = el.status;

        let resource_card = document.createElement("div");
        resource_card.classList.add("resource-card");
        resource_card.append(no,title,type,status);

        resource_list.appendChild(resource_card);
    });

    // Create DOM element for each resource (plain text: Title | Type | Status)

    // Append to resourceList
}
