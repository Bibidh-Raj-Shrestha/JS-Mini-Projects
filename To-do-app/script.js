const task = document.getElementById("task");
const task_list = document.getElementById("task-list");
const date = document.getElementById("date");
const add_btn = document.getElementById("add-btn");
add_btn.addEventListener("click",add_task);
let tasks = [];

function add_task() {
    if(tasks.length === 0)
    {
        task_list.style.backgroundColor="#455d7a";
    }

    let task_value = task.value.trim();
    let date_value = date.value;
    if (task_value !== "") {
        tasks.push({task:task_value,
                    date_value:date_value});
        display_task();
    }
    task.value = "";
    date.value = "";
}

function display_task() {
    task_list.innerHTML = ""; 
    // tasks.forEach((task, index) => {
    //     task_list.innerHTML += `
    //         <div class="task-div">
    //             <div class="task-point">
    //                 <p>${task}</p>
    //             </div>
    //             <div class="task_control">
    //                 <p></p>
    //                 <button onclick="delete_task(${index})">Delete</button>
    //             </div>
    //         </div>
    //     `;
    // });
   tasks.forEach(({task,date_value}, index) => {
        let task_div = document.createElement("div");
        task_div.classList.add("task-div");
        let task_point = document.createElement("div");
        task_point.classList.add("task-point");
        let div = document.createElement("div");
        div.classList.add("task-control");

        task_div.appendChild(task_point);
        task_div.appendChild(div);

        let p = document.createElement("p");
        p.textContent = task;
        let task_date = document.createElement("p");
        task_date.textContent = date_value;

        task_point.appendChild(p);

        let btn = document.createElement("button");
        btn.textContent = "Delete";
        btn.addEventListener("click", () => {
            tasks.splice(index, 1);
            display_task();
        });
        div.appendChild(task_date);
        div.appendChild(btn);

        task_list.appendChild(task_div);
    });
    if(tasks.length === 0)
    {
        task_list.style.backgroundColor="transparent";
    }
}

