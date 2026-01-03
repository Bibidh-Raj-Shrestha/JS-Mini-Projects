const buttons = document.querySelectorAll("#choices button");
const result = document.getElementById("result");
const score = document.getElementById("score");

let userScore = 0;
let computerScore = 0;

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const userChoice = btn.value;
        const computerChoice = getComputerChoice();
        
        if(userChoice === computerChoice)
        {
            result.textContent = "Both choosed same options ";
            return;
        }

        if(userChoice === "rock")
        {
            if( computerChoice === "paper")
            {
                computerScore++;
                result.textContent = "User loses computer choosed paper ";
            }
            else 
            {
                userScore++;
                result.textContent = "User wins.";
            }
        }
        else if(userChoice === "paper")
        {
            if( computerChoice === "rock")
            {
                userScore++;
                result.textContent = "User wins.";
            }
            else 
            {
                computerScore++;
                result.textContent = "User loses computer choosed scissors ";
            }
        }
        else
        {
            if( computerChoice === "rock")
            {
                computerScore++;
                result.textContent = "User loses computer choosed rock ";
            }
            else 
            {
                userScore++;
                result.textContent = "User wins.";
            }
        }
        score.textContent = `You: ${userScore} | Computer: ${computerScore}`;
        
    });
});

function getComputerChoice() {
    const choices =["rock","paper","scissors"];
    let randomChoice = Math.floor(Math.random()*3);
    return choices[randomChoice];
}
