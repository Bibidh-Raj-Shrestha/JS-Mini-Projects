// game variables
const game_board = document.getElementById("game-board");
const cells = document.querySelectorAll(".cell");
const message = document.getElementById("message");
const start_btn = document.getElementById("start");
const restart_btn = document.getElementById("restart");

//buttons listeners
start_btn.addEventListener("click",start);
restart_btn.addEventListener("click",restart);

//players
const players =["X","O"];
let index=-1;

// game state
let isrunning = false;

//win conditions
win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let startrun = false;

function start(){
    if(startrun) return;
    startrun = true;
    //allow to click for cells
    isrunning = true;
    index = 0;
    message.textContent = `Status : ${players[index]} turn`;
    cells.forEach(cell=>{
        cell.addEventListener("click",click_cell);
    });
}

//resets the game
function restart(){
    
    message.textContent = `Status : `;
    index = -1;
    isrunning = false;
    cells.forEach(cell=>{
        cell.textContent = ``;
        cell.removeEventListener("click",click_cell);
    });
    check =[];
    if(startrun)
    {
        startrun = false;
        start();
    }
}

// game complete
function complete(){
    message.textContent = `Status : ${players[index]} won`;
    cells.forEach(cell=>{
        cell.removeEventListener("click",click_cell);
    });
}

// marks the visited players places
let check =[]

//make cells clickable
function click_cell(){

    if(!isrunning)
        return;

    // avoids double click
    if(this.textContent != "") return;

    
    this.textContent = `${players[index]}`;

    cellIndex = Number(this.getAttribute("cellIndex"));
    check[cellIndex] = this.textContent;


    
    let winner = checkWinner();
    if(winner!=null)
    {
        isrunning =false;
        complete();
        
        return;
    }

    // check draw
    if (check.length === 9 && !check.includes(undefined)) {
        isrunning = false;
        message.textContent = "Status : Draw";
        for (let i = 0; i < cells.length; i++) {
            cells[i].removeEventListener("click", click_cell);
        }
        return;
    }

    index = (index==0)? 1:0;
    message.textContent = `Status : ${players[index]} turn`;
    
}

function checkWinner(){
    let flag = false;
    for(let i=0 ; i<win.length ; i++)
    {
        let condition = win[i];
        const c1 = check[condition[0]];
        const c2 = check[condition[1]];
        const c3 = check[condition[2]];
        if(c1=='' || c2=='' || c3=='')
            continue;
        if(c1==c2 && c2==c3)
        {
            return c1;
        }
        
    }
    return null;
}
  