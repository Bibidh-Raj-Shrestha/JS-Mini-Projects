const toggle = document.getElementById("toggle");
const toggle_ball = document.getElementById("toggle-ball");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

toggle.addEventListener("click",()=>
{
    if(toggle_ball.classList.contains("toggle-ball-on"))
    {
        toggle_ball.classList.remove("toggle-ball-on");
        toggle_ball.classList.add("toggle-ball-off");
        toggle.classList.toggle("toggle-on");
        document.body.style.backgroundColor="white";
        moon.style.display = "none";
        sun.style.display = "block";
    }
    else{
        toggle_ball.classList.remove("toggle-ball-off");
        toggle_ball.classList.add("toggle-ball-on");
        toggle.classList.toggle("toggle-on");
        document.body.style.backgroundColor="black";
        sun.style.display = "none";
        moon.style.display = "block";
    }
    
});