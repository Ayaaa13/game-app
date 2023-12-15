const Timer = document.querySelector(".game-timer");
const startBtn = document.querySelector(".start-button")
const firstNumber = document.querySelector(".first-number");
const secondNumber = document.querySelector(".second-number")
const answer = document.querySelector(".answer");



// TIMER 
let time = 120;
Timer.innerHTML = time;

// FIRST AND SECOND NUMBER
let first = 0;
let second = 0;
firstNumber.innerHTML = first;
secondNumber.innerHTML = second;

startBtn.addEventListener("click", function() {
    // RANDOM NUMBER
    let first = Number(firstNumber.innerHTML = Math.floor(Math.random() * 5));
    let second = Number(secondNumber.innerHTML = Math.floor(Math.random() * 5));

    // ANSWER
    let equals = first + second;
    console.log(equals);

    
        firstNumber.innerHTML = Number(first);
        secondNumber.innerHTML = Number(second);
    const answerBtn = document.querySelector(".answerBtn");

    answerBtn.addEventListener("click", function(){
        const correctOrWrong = document.querySelector(".correct-or-wrong");
        
    
        let userAnswer = parseInt(answer.value);
        console.log("WORKING");
        if(userAnswer === equals) {
            correctOrWrong.innerHTML = String("CORRECT")
        }
    
    })
    
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


    

