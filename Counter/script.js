const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');
const incrementBtn = document.getElementById('incrementBtn');
const counterValue = document.getElementById('counterValue');
let counter =0;

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);

function updateDisplay() {
    counterValue.textContent = counter;

    counterValue.style.transform = 'scale(1.2)';
    setTimeout(() => counterValue.style.transform = 'scale(1)', 100);

    // Optional: change color based on value
    if(counter > 0) 
        counterValue.style.color = 'lime';
    else if(counter < 0) 
        counterValue.style.color = 'red';
    else 
        counterValue.style.color = 'white';
}

function increment(){ 
    counter++; updateDisplay(); 
}
function decrement(){ 
    counter--; updateDisplay(); 
}
function reset(){ 
    counter = 0;
    updateDisplay();
    counterValue.classList.add('shake');
    setTimeout(() => counterValue.classList.remove('shake'), 300);
}

document.addEventListener('keydown', e => {
    if(e.key === 'ArrowUp') 
        increment();
    if(e.key === 'ArrowDown') 
        decrement();
    if(e.key === ' ')
        reset();
});

