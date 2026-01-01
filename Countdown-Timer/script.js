// inputs
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

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

function start(){
    let mins = Number(minutes.value);
    let secs = Number(seconds.value);
    console.log(mins,secs);
}

function pause(){

}

function reset(){
     
}

function update_timer(total_sec){

}