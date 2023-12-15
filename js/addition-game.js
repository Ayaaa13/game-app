const Timer = document.querySelector(".game-timer");
const startBtn = document.querySelector(".start-button")
const firstNumber = document.querySelector(".first-number");
const secondNumber = document.querySelector(".second-number")
const answer = document.querySelector(".answer");

function AnswerGame(equals) {
    const answerBtn = document.querySelector(".answerBtn");
    answerBtn.addEventListener("click", function(){
        const correctOrWrong = document.querySelector(".correct-or-wrong");
        
        let userAnswer = Number(answer.value);
        if(userAnswer === equals) {
            correctOrWrong.innerHTML = String("CORRECT");
            StartGame();
        } else if (userAnswer !== equals){
            correctOrWrong.innerHTML = String("WRONG");
        }
    
    })
}
function StartGame() {
    // RANDOM NUMBER
    first = Number(Math.floor(Math.random() * 5));
    second = Number(Math.floor(Math.random() * 5));

    // ANSWER
    let equals = first + second;
    firstNumber.innerHTML = first;
    secondNumber.innerHTML = second;
    AnswerGame(equals);
}

startBtn.addEventListener("click", function() {
    StartGame()
    let time = 120;
    function tick() {
        time --;

        Timer.innerHTML = Number(time);

        if(time > 0){
            setTimeout(tick, 1000)
        } else {
            Timer.innerHTML = String("TIME IS UP");
        }}
        tick();
    }
)


    

