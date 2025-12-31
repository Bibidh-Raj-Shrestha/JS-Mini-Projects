const expense_name = document.getElementById("expense-name");
const expense_name_list = document.getElementById("expense-name-list");
const date = document.getElementById("date");
const add_btn = document.getElementById("add-btn");
const amt = document.getElementById("expense");
const expenses_total = document.getElementById("expense-total");

add_btn.addEventListener("click", add_expense_name);

let expense_names = [];

function add_expense_name() {
    const expense_name_value = expense_name.value.trim();
    const date_value = date.value;
    const amt_value = Number(amt.value);

    if (expense_name_value && amt_value && date_value) {
        // Add expense object to array
        expense_names.push({
            expense_name: expense_name_value,
            amt_value: amt_value,
            date_value: date_value
        });

        display_expense_name();

        // Clear inputs
        expense_name.value = "";
        date.value = "";
        amt.value = "";
    } else {
        window.alert("Please fill in all fields");
    }
}

function display_expense_name() {
    // Clear the list
    expense_name_list.innerHTML = "";

    // Display each expense
    expense_names.forEach(({expense_name, amt_value, date_value}, index) => {
        const expense_div = document.createElement("div");
        expense_div.classList.add("expense-name-div");

        const expense_point = document.createElement("div");
        expense_point.classList.add("expense-name-point");

        const expense_control = document.createElement("div");
        expense_control.classList.add("expense-name-control");

        // Append divs
        expense_div.appendChild(expense_point);
        expense_div.appendChild(expense_control);

        // Expense title and date
        const p_title = document.createElement("p");
        p_title.textContent = expense_name;
        const p_date = document.createElement("p");
        p_date.textContent = date_value;

        expense_point.appendChild(p_title);
        expense_point.appendChild(p_date);

        // Amount and Delete button
        const p_amount = document.createElement("p");
        p_amount.textContent = `Rs.${amt_value}`;

        const btn = document.createElement("button");
        btn.textContent = "Delete";
        btn.addEventListener("click", () => {
            // Remove expense from array
            expense_names.splice(index, 1);
            display_expense_name(); // re-render
        });

        expense_control.appendChild(p_amount);
        expense_control.appendChild(btn);

        expense_name_list.appendChild(expense_div);
    });

    // Calculate and display total
    expenses_total.innerHTML = "";
    if (expense_names.length > 0) {
        const total = expense_names.reduce((sum, e) => sum + Number(e.amt_value), 0);
        const sum_amt = document.createElement("h2");
        sum_amt.textContent = `Expense Total: Rs${total}`;
        expenses_total.appendChild(sum_amt);
    }

    // Background color logic
    expense_name_list.style.backgroundColor = expense_names.length ? "#455d7a" : "transparent";
}
