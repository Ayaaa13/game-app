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

    let time = 120;
    function tick() {
        time --;

        Timer.innerHTML = Number(time);
        firstNumber.innerHTML = Number(first);
        secondNumber.innerHTML = Number(second);

        if(time > 0){
            setTimeout(tick, 1000)
        } else {
            Timer.innerHTML = String("TIME IS UP");
        }}
        tick();

     // RANDOM NUMBER
    let first = firstNumber.innerHTML = Math.floor(Math.random() * 100);
    let second = secondNumber.innerHTML = Math.floor(Math.random() * 100);

    // ANSWER
    let answer = first + second;
    answer

    }
)