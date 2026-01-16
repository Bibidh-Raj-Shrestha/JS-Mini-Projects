// main variables
const toggle = document.getElementById("toggle");
const toggle_ball = document.getElementById("toggle-ball");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

// get previous theme
let theme = localStorage.getItem("theme");
let current_theme = (theme === "dark")? "dark" : "light";
initializer();

// toggle function call 
toggle.addEventListener("click",toggle_theme);

// main function to toggle theme decides which theme
function toggle_theme(){    
    if(current_theme === "dark")
    {
        current_theme = "light";
        light_theme();  
    }
    else{
        current_theme = "dark";
        dark_theme();
    }
    localStorage.setItem("theme",current_theme);
}

// converts to light theme
function light_theme(){
    toggle.classList.remove("toggle-on");
    toggle_ball.classList.remove("toggle-ball-on");
    toggle_ball.classList.add("toggle-ball-off");    
    document.documentElement.style.setProperty('--bg-color',"white");
    document.documentElement.style.setProperty('--shadow-color',"black");
    moon.style.display = "none";
    sun.style.display = "block";
}

// converts to dark theme
function dark_theme(){    
    toggle.classList.add("toggle-on");
    toggle_ball.classList.remove("toggle-ball-off");
    toggle_ball.classList.add("toggle-ball-on");
    document.documentElement.style.setProperty('--bg-color',"black");
    document.documentElement.style.setProperty('--shadow-color',"white");
    sun.style.display = "none";
    moon.style.display = "block";
}

// initializes based on localstorage
function initializer(){
    if(current_theme === "dark")
    {
        dark_theme();  
    }
    else{
        light_theme();
    }
}