const Timer = document.querySelector(".game-timer");
const startBtn = document.querySelector(".start-button");
const firstNumber = document.querySelector(".first-number");
const secondNumber = document.querySelector(".second-number");
const answer = document.querySelector(".answer");
const correctOrWrong = document.querySelector(".correct-or-wrong");
const answerBtn = document.querySelector(".answerBtn");
const myAnswer = document.querySelector(".user-answer");
const scoreNumber = document.querySelector(".score-number");
const highscoreNumber = document.querySelector(".highscore-number");
const body = document.querySelector("body");

let score = 0;
let highscore = 5;
scoreNumber.innerHTML = score;
highscoreNumber.innerHTML = highscore;

function WrongAnswer() {
  body.classList.add("wrong");

  setTimeout(function () {
    body.classList.remove("wrong");
  }, 100);
}

function AnswerGame(equals) {
  answerBtn.addEventListener("click", function () {
    let userAnswer = Number(answer.value);

    myAnswer.innerHTML = userAnswer;
    if (userAnswer === equals) {
      score++;
      scoreNumber.innerHTML = score;

      answer.value = "";
      if (score > highscore) {
        highscore.innerHTML = score;
        highscoreNumber.innerHTML = score;
      }
      StartGame();
    } else {
      WrongAnswer();
    }
  });
}

function GameTimer() {
  let time = 120;
  function tick() {
    time--;

    Timer.innerHTML = Number(time);

    if (time > 0) {
      setTimeout(tick, 1000);
    } else {
      Timer.innerHTML = String("TIME IS UP");
    }
  }
  tick();
}

function StartGame() {
  // RANDOM NUMBER
  first = Number(Math.floor(Math.random() * 25));
  second = Number(Math.floor(Math.random() * 25));

  // ANSWER
  let equals = first + second;
  firstNumber.innerHTML = first;
  secondNumber.innerHTML = second;

  AnswerGame(equals);
}

startBtn.addEventListener("click", function () {
  GameTimer();
  StartGame();
});
