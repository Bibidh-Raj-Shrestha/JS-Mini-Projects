const task = document.getElementById("task");
const task_list = document.getElementById("task-list");
let tasks = [];

function add_task() {
    let task_value = task.value.trim();
    if (task_value !== "") {
        tasks.push(task_value);
        display_task();
    }
    task.value = "";
}

function display_task() {
    task_list.innerHTML = ""; 
    tasks.forEach((task, index) => {
        task_list.innerHTML += `
            <div class="task-div">
                <div class="task-point">
                    <p>${task}</p>
                </div>
                <div>
                    <button onclick="delete_task(${index})">Delete</button>
                </div>
            </div>
        `;
    });
}

function delete_task(index) {
    tasks.splice(index, 1);
    display_task();
}
