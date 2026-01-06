const task = document.getElementById("task");
const task_list = document.getElementById("task-list");
const date = document.getElementById("date");
const add_btn = document.getElementById("add-btn");

add_btn.addEventListener("click", add_task);

let tasks = [];

/* =========================
   STEP 1: FETCH FROM API
========================= */

// fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
//     .then(function (response) {
//         return response.json(); // JSON → JS array
//     })
//     .then(function (data) {
//         // convert API data to your task format
//         tasks = data.map(function (item) {
//             return {
//                 task: item.title,
//                 date_value: item.completed ? "Completed" : "Pending"
//             };
//         });

//         display_task();
//     })
//     .catch(function (error) {
//         console.log("Error:", error);
//     });
async function load_tasks(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
        let data = await response.json();
        tasks = data.map((item)=>{
            return {
                task: item.title,
                date_value: item.completed ? "Completed" : "Pending"
            };
        });
        display_task();

    }

    catch(error)
    {
        console.log(error);
    }
}
load_tasks();
/* =========================
   ADD TASK (LOCAL ONLY)
========================= */

function add_task() {
    if (tasks.length === 0) {
        task_list.style.backgroundColor = "#455d7a";
    }

    let task_value = task.value.trim();
    let date_value = date.value;

    if (task_value !== "") {
        tasks.push({
            task: task_value,
            date_value: date_value
        });

        display_task();
    }

    task.value = "";
    date.value = "";
}

/* =========================
   DISPLAY TASKS
========================= */

function display_task() {
    task_list.innerHTML = "";

    tasks.forEach(function (item, index) {
        let task_div = document.createElement("div");
        task_div.classList.add("task-div");

        let task_point = document.createElement("div");
        task_point.classList.add("task-point");

        let control = document.createElement("div");
        control.classList.add("task-control");

        let p = document.createElement("p");
        p.textContent = item.task;

        let task_date = document.createElement("p");
        task_date.textContent = item.date_value;

        let btn = document.createElement("button");
        btn.textContent = "Delete";

        btn.addEventListener("click", function () {
            tasks.splice(index, 1);
            display_task();
        });

        task_point.appendChild(p);
        control.appendChild(task_date);
        control.appendChild(btn);

        task_div.appendChild(task_point);
        task_div.appendChild(control);

        task_list.appendChild(task_div);
    });

    if (tasks.length === 0) {
        task_list.style.backgroundColor = "transparent";
    }
}
