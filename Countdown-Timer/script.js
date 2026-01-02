// inputs
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
minutes.value = "";
seconds.value = "";

// display
const time_display = document.getElementById("time-display");

//controls
const start_btn = document.getElementById("start-btn");
const pause_btn = document.getElementById("pause-btn");
const reset_btn = document.getElementById("reset-btn");

//message 
const message = document.getElementById("message");

// buttons functionality
start_btn.addEventListener("click",start);
pause_btn.addEventListener("click",pause);
reset_btn.addEventListener("click",reset);

// time variables

let total_secs = 0;
let check = null;

function start(){
    if(check == null){
        let mins = Number(minutes.value);
        let secs = Number(seconds.value);
        minutes.value = "";
        seconds.value = "";

        total_secs = (mins*60)+secs;
        check = setInterval(update_timer,1000);
    }
}

let pause_check =  false;
function pause(){
    if(!pause_check){
        check = clearInterval(check);
        pause_check = true;
    }
    else{
        check = setInterval(update_timer,1000);
        pause_check = false;
    }
    
}

function reset(){
    check = clearInterval(check);
    update_display(0);
     return;
}

function update_timer(){

    if(total_secs<=0)
    {
        clearInterval(check);
        check = null;
        return;
    }

    total_secs--;
    update_display(total_secs);
    
}

function update_display(total_sec)
{
    let mins = Math.floor(total_sec/60);
    let secs = total_sec % 60;
    time_display.textContent = `${String(mins).padStart(2,0)}:${String(secs).padStart(2,0)}`;
}