const inputs = document.querySelectorAll("input[type=button]");
const display = document.getElementById("display");

inputs.forEach(el => {
    el.addEventListener("click", () => {
        display.value += el.value; // directly use the element from the loop
    });
});

const clear = document.getElementById("clear");
clear.addEventListener("click",()=>
{
    display.value = "";
})

const calculate = document.getElementById("calculate");
calculate.addEventListener("click",()=>{
    display.value = eval(display.value);
})