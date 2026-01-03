const cards = document.querySelectorAll(".card");
const items =['🙈','🙉','🙊','🐵','🙈','🙉','🙊','🐵'];
const start = document.getElementById("start");

start.addEventListener("click",start_game);
cards.forEach(card=>{    
    card.addEventListener("click",()=>{
        card.classList.add("flipped");
        setTimeout(()=>{
            card.classList.remove("flipped");
        },2000);
    });  
})


function shuffleItems(array){
    let shuffled = [...array];
    for(let i= shuffled.length-1 ; i>0 ; i--)
    {
        let j = Math.floor(Math.random()*(i+1));
        [shuffled[i],shuffled[j]] = [shuffled[j],shuffled[i]];
    }
    return shuffled;
}

function start_game(){
    shuffled= shuffleItems(items);
    cards.forEach((el,index)=>{
        el.textContent = shuffled[index];
    });
}

function flip_card(card){

}