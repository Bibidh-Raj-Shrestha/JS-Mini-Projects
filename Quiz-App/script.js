let quiz = document.getElementById("quiz");
let question = document.getElementById("question");
let options = document.getElementById("options");
let next_btn = document.getElementById("next-btn");
let score = document.getElementById("score");

const questions = [
    {
        question: "What is 2 + 2?",
        options: ["1", "2", "4", "5"],
        answer: "4"
    },
    {
        question: "JS stands for?",
        options: ["Java Source", "JavaScript", "Just Script"],
        answer: "JavaScript"
    }
];

next_btn.addEventListener("click",next_question);

let points =0;
let index=0;
render_question();
function next_question(){

    // get the selected input 
    const selected = document.querySelector('input[name="quiz-opt"]:checked');

    if (selected) {
        if(selected.value === questions[index].answer)
        {
            points++;
        }
    }
    if(!selected)
    {
        console.log("alu"); 
        return;
    }

    //update the score
    score.textContent = `Score:${points}`;

    
    index++;

    console.log(index);
    if(index >= questions.length)
    {
        quiz.innerHTML = "";
        let end = document.createElement("h1");
        end.textContent = "Quiz completed";
        
        let total_score = document.createElement("h2");
        total_score.textContent = `Your Total Score : ${points}/${questions.length}`;

        quiz.appendChild(end);
        quiz.appendChild(total_score);
        return;
    }
    render_question(); 
    
}

function render_question(){
    // extracting current qeustion from the array 
    q = questions[index];

    question.textContent = q.question;

    //clearing the options before redering new ones
    options.innerHTML ="";
    //options rendering
    q.options.forEach(option => {
        let div = document.createElement("div");
        let input = document.createElement("input");
        input.type = "radio";
        input.name = "quiz-opt";
        input.value = option;

        let label = document.createElement("label");
        label.textContent = option;

        div.appendChild(input);
        div.appendChild(label);
        options.appendChild(div);
    });
}