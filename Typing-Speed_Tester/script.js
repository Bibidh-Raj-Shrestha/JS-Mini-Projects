const sentence = document.getElementById("sentence");
const input = document.getElementById("input");
const time_display = document.getElementById("time");
const result = document.getElementById("result");
const test_display = document.getElementById("test_display");

// question sentence for the test
let que = "The quiet" // laptop hummed softly as the rain tapped against the window and ideas slowly turned into code."
sentence.textContent = que;

// time variables
let time=0;
let check;
let taken_time;

let first_input = false;
let errors = 0;
input.addEventListener("input",input_checker);
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
    }
});

function input_checker(){
    if(!first_input)
    {
        first_input=true;
        start_timer();
    }
    // Reset errors and recalc
    errors = 0;
    const typed = input.value;
    for (let i = 0; i < typed.length; i++) {
        if (typed[i] !== que[i]) 
            errors++;
    }

    if(typed.length==que.length)
    {
        if(que.length === input.value.length)
        {
            test_display.style.display = "none";
            stop_timer();
            let result_time = document.createElement("p");
            result_time.textContent = `Total time taken : ${taken_time}`;
            result.appendChild(result_time);

            let err = document.createElement("p");
            err.textContent = `Total errors : ${errors}`;
            result.appendChild(err);

            let reset_btn = document.createElement("button");
            reset_btn.addEventListener("click",reset);
            reset_btn.textContent = "Reset";
            result.appendChild(reset_btn);

            const typedLength = input.value.length;
            let correct_chars = typedLength-errors;
            const total_Minutes = taken_time / 60;
            const wpm = Math.round((correct_chars / 5) / total_Minutes);

            let wpm_display = document.createElement("p");
            wpm_display.textContent = `WPM: ${wpm}`;
            result.appendChild(wpm_display);


            input.addEventListener("keydown",(event)=>{
                if(event.key === "Enter")
                {
                    event.preventDefault();
                    reset();
                }
            });
        }            
    }
}
    
    


// timer functions 

function start_timer(){
    check = setInterval(update_timer,1000);
}
function update_timer(){
    time++;
    update_display(time);
}
function update_display(time){
    let mins = Math.floor(time/60);
    let secs = time % 60;
    time_display.textContent = `${String(mins).padStart(2,0)}:${String(secs).padStart(2,0)}`;
}
function stop_timer(){
    taken_time = time;
    clearInterval(check);
    update_display(0);
    return;
}

function reset(){
    first_input = false;
    time = 0;
    errors = 0;
    input.value = '';
    test_display.style.display = "block";
    result.innerHTML = '';
}