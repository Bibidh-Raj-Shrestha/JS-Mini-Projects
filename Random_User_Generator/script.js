const user_card = document.getElementById("user-card");
const generate_btn = document.getElementById("generate");

generate_btn.addEventListener("click",fetchUser);

async function fetchUser(){
    try{
        let response = await fetch("https://randomuser.me/api/?results=100");
        let data = await response.json();
        let random = Math.floor(Math.random()*100);
        let user = data.results[random];
        display_user(user);
    }
    catch(error)
    {
        console.log("error"+error);
    }
}

function display_user(user)
{
    user_card.innerHTML = '';

    let imgEL = document.createElement("img");
    imgEL.alt = "avatar";
    imgEL.src = user.picture.large;
    
    let  user_name = document.createElement("h2");
    user_name.textContent =user.name.first + " " + user.name.last;
    let emailEL = document.createElement("p");
    emailEL.textContent = user.email;

    let cityEL = document.createElement("p");
    cityEL.textContent = user.location.city+", ";
    
    let countryEL = document.createElement("span");
    countryEL.textContent = user.location.country;

    user_card.appendChild(imgEL);
    user_card.appendChild(user_name);
    user_card.appendChild(emailEL);
    user_card.appendChild(cityEL);
    cityEL.appendChild(countryEL);
}