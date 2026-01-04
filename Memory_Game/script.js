const cards = document.querySelectorAll(".card");
const items =['🙈','🙉','🙊','🐵','🙈','🙉','🙊','🐵'];
const start = document.getElementById("start");
const message = document.getElementById("message");
const restart = document.getElementById("restart");

// starts the game
start.addEventListener("click",start_game);
restart.addEventListener("click",restart_game);
function start_game(){
    shuffled= shuffleItems(items);
    cards.forEach((el,index)=>{
        el.textContent = shuffled[index];
    });
    // flips the cards
    cards.forEach(card=>{
        card.classList.remove("flipped");
        card.addEventListener("click",flip_card);  
    });
}
function restart_game(){
    message.textContent='';
    tries = 0;
    matched = 0;
    flag = false;
    check =[];
    start_game();
}

// shuffle the items
function shuffleItems(array){
    let shuffled = [...array];
    for(let i= shuffled.length-1 ; i>0 ; i--)
    {
        let j = Math.floor(Math.random()*(i+1));
        [shuffled[i],shuffled[j]] = [shuffled[j],shuffled[i]];
    }
    return shuffled;
}



// flips the cards and check similarity
let check = [];
let flag = false;
let tries = 0;
let matched = 0;
function flip_card() {
    if (this.classList.contains("flipped") || flag) 
        return; // prevents flipping same card again

    this.classList.add("flipped");
    check.push(this);

    if (check.length === 2) {
        tries++;
        flag = true; // lock the board

        if (check[0].textContent === check[1].textContent) {
            // matched: remove click listeners
            matched++;
            check[0].removeEventListener("click", flip_card);
            check[1].removeEventListener("click", flip_card);

            if (matched === items.length / 2) complete();

            check = [];
            flag = false; // unlock immediately
        } else {
            // not matched: hide after 1 sec
            setTimeout(() => {
                check[0].classList.remove("flipped");
                check[1].classList.remove("flipped");
                check = [];
                flag = false; // unlock after hiding
            }, 1000);
        }
    }
}

function complete()
{
    message.textContent = `Game completed!
                       Tries:${tries}`;
}