const correctAns = document.querySelector(".correct-ans");
const inputNumber = document.querySelector(".input-number");
const checkBtn = document.querySelector(".check");
const guessingText = document.querySelector(".guessing-text");
const score = document.querySelector(".score");
const highScore = document.querySelector(".high-score");
const playAgain = document.querySelector(".play-again");
const span = document.querySelector("span");


let SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);
let SCORE = 20;
let HIGH_SCORE = 0;


function guessingTextContent(t){
    guessingText.textContent = t;
}



checkBtn.addEventListener("click", function(){
    const input = Number(inputNumber.value);
    console.log(input)

    if(!input)  guessingTextContent("Enter a valid number.....")

    else if(input === SECRET_NUMBER){
        guessingTextContent("Hurrah! Correct Answer😎");
        correctAns.textContent = SECRET_NUMBER;
        correctAns.style.backgroundColor  = "#222";
        correctAns.style.color  = "#fff";
        document.body.style.backgroundColor  = "aquamarine";
        document.body.style.color = "#222";

        if(SCORE > HIGH_SCORE)
        {
            HIGH_SCORE = SCORE;
            highScore.textContent = HIGH_SCORE;
        }
    }

    else if(input !== SECRET_NUMBER){
        if(SCORE > 1){
            guessingTextContent(
                input > SECRET_NUMBER ? `${input} is Too High` : `${input} is Too Low`
            );
            inputNumber.style.border = "2px solid red";
            span.style.display = "initial";
            span.style.color = "red";
            SCORE--;
            score.textContent = SCORE;
        }
        else{
            guessingTextContent("Game Over!");
            score.textContent = 0;
        }
    }
    inputNumber.value = "";
});


playAgain.addEventListener("click", function(){
    SCORE = 20;
    SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);

    guessingTextContent("Start guessing.....");
    document.body.style.backgroundColor = "#222";
    correctAns.style.backgroundColor = "aquamarine";
    correctAns.style.color = "#222";
    document.body.style.color = "#aeaeae";
    correctAns.textContent = "?";
    span.style.display = "none";
    inputNumber.style.border = "none";
    score.textContent = SCORE;
    inputNumber.value = "";
})