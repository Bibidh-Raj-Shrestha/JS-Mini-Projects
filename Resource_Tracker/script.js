// ======= 1. State =======
let items = localStorage.getItem("items");
let resources = (items)? JSON.parse(items) : [];


// ======= 2. DOM Elements =======
const form = document.getElementById('resource-form');
const titleInput = document.getElementById('title');
const typeSelect = document.getElementById('type');
const statusSelect = document.getElementById('status');
const resource_list = document.getElementById('resource-list');

renderResources();

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

    //reset form
    form.reset();

    renderResources();
});

// ======= 4. Render Function =======
function renderResources() {
    // Clear resourceList container 
    resource_list.innerHTML = '';   

    let itemstring = JSON.stringify(resources);
    localStorage.setItem("items",itemstring);

    // Loop over resources array
    resources.forEach((el,index) => {

        // S.N
        let no = document.createElement("h4");
        no.textContent = ++index+".";

        // Title
        let title = document.createElement("p");
        title.textContent = el.title;

        // Type
        let type = document.createElement("p");
        type.textContent = el.type;

        // Status
        let status = document.createElement("p");
        status.textContent = el.status;

        // Actions 
        let action_div = document.createElement("div");
        action_div.classList.add("action-div");
        let edit_btn = document.createElement('button');
        edit_btn.textContent = "Edit";
        let del_btn = document.createElement("button");
        del_btn.value = el.id ;
        del_btn.textContent = "Delete";
        del_btn.addEventListener("click",()=>{
            delete_resource(del_btn.value);
        });
        
        action_div.append(edit_btn,del_btn);

        // resource cards
        let resource_card = document.createElement("div");
        resource_card.classList.add("resource-card");
        resource_card.append(no,title,type,status,action_div);

        // append to resource list
        resource_list.appendChild(resource_card);
    });
}

function delete_resource(target){
    let req_resources = resources.filter((resource)=>{
        return resource.id != target;
    });
    resources = req_resources;
    renderResources();
}
