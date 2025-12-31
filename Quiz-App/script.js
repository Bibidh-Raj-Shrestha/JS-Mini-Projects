let quiz = document.getElementById("quiz");
let question = document.getElementById("question");
let options = document.getElementById("options");
let next_btn = document.getElementById("next-btn");
let score = document.getElementById("score");
let message = document.getElementById("message");

// questions list
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

// render first question 
render_question();

function next_question(){

    // get the selected input 
    const selected = document.querySelector('input[name="quiz-opt"]:checked');

    //increase the point counter when right answer is selected
    if (selected) {
        if(selected.value === questions[index].answer)
        {
            points++;
        }
    }
    // checks if none of the options are selected
    if(!selected)
    {
        message.textContent = "Please select an option before continuing!";
        message.style.opacity = 1; // make sure it’s visible

        // fade out after 2 seconds
        setTimeout(() => {
            message.style.transition = "opacity 0.5s";
            message.style.opacity = 0;
        }, 2000);

        return;
    }

    message.textContent = "";
    //update the score
    score.textContent = `Score:${points}`;

    
    index++;

    // check if all the questions has been asked
    if(index >= questions.length)
    {
        quiz_end();
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

function quiz_end(){
    quiz.innerHTML = "";
    let end = document.createElement("h1");
    end.textContent = "Quiz completed";
        
    let total_score = document.createElement("h2");
    total_score.textContent = `Your Total Score : ${points}/${questions.length}`;

    quiz.appendChild(end);
    quiz.appendChild(total_score);
}