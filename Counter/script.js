const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');
const incrementBtn = document.getElementById('incrementBtn');
const counterValue = document.getElementById('counterValue');
let counter =0;

decrementBtn.onclick = function() {
    counter--;
    counterValue.textContent = counter;
}
resetBtn.onclick = function() {
    counter=0;
    counterValue.textContent = counter;
}   
incrementBtn.onclick = function() {
    counter++;
    counterValue.textContent = counter;
}
