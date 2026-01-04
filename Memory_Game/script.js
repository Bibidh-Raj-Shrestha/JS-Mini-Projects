const cards = document.querySelectorAll(".card");
const items =['🙈','🙉','🙊','🐵','🙈','🙉','🙊','🐵'];
const start = document.getElementById("start");

// starts the game
start.addEventListener("click",start_game);
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
function flip_card() {
    if (this.classList.contains("flipped") || flag) return; // prevents flipping same card again

    this.classList.add("flipped");
    check.push(this);

    if (check.length === 2) {
        flag = true; // lock the board

        if (check[0].textContent === check[1].textContent) {
            // matched: remove click listeners
            check[0].removeEventListener("click", flip_card);
            check[1].removeEventListener("click", flip_card);
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





