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
const quitBtn = document.querySelector(".quit-button");
const quitModal = document.querySelector(".quit-modal");
const quitOverlay = document.querySelector(".quit-overlay");
const noBtn = document.querySelector(".no-button");
const yesBtn = document.querySelector(".yes-button");

let score = 0;
let highscore = 5;
let timerInterval;

scoreNumber.innerHTML = score;
highscoreNumber.innerHTML = highscore;


function AnswerIsTrue() {
  score++;
  scoreNumber.innerHTML = score;

  answer.value = "";
  if (score > highscore) {
    highscore.innerHTML = score;
    highscoreNumber.innerHTML = score;
  }
}

function WrongAnswer() {
  body.classList.add("wrong");
  body.classList.remove("correct");
  const wrong = new Audio('/mp3/wrong.mp3');

  wrong.play();
  setTimeout(function () {
    body.classList.remove("wrong");
  }, 100);
}

function CorrectAnswer() {
  body.classList.add("correct");
  body.classList.remove("wrong");
  const correct = new Audio('/mp3/correct.mp3');

  correct.play();
  setTimeout(function () {
    body.classList.remove("correct");
  }, 100);
}

function GameTimer() {
  let time = 120;
  function tick() {
    time--;

    Timer.innerHTML = Number(time);

    if (time > 0) {
      timerInterval = setTimeout(tick, 1000);
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

  // AnswerGame(equals);
}

startBtn.addEventListener("click", function () {
  quitBtn.classList.add("abled");
  startBtn.classList.add("disabled");
  answerBtn.classList.add("abled");

  GameTimer();
  StartGame();
});

function QuitGame() {
  quitBtn.classList.remove("abled");
  startBtn.classList.remove("disabled");
  answerBtn.classList.remove("abled");
  myAnswer.innerHTML = "?";
  answer.value = "";

  score = 0;
  scoreNumber.innerHTML = score;
  Timer.innerHTML = Number(120);
  clearTimeout(timerInterval);

  let firstNumberReset = 0;
  let secondNumberReset = 0;
  firstNumber.innerHTML = firstNumberReset;
  secondNumber.innerHTML = secondNumberReset;
}

function AddQuitModal() {
  quitModal.classList.add("visible");
  quitOverlay.classList.add("visible");
}

function RemoveQuitModal() {
  quitModal.classList.remove("visible");
  quitOverlay.classList.remove("visible");
}

quitBtn.addEventListener("click", function () {
  AddQuitModal();
});

yesBtn.addEventListener("click", function () {
  RemoveQuitModal();
  QuitGame();
});

noBtn.addEventListener("click", function () {
  RemoveQuitModal();
});

function AnswerGame(equals) {
  let userAnswer = Number(answer.value);

  myAnswer.innerHTML = userAnswer;
  if (userAnswer === equals) {
    AnswerIsTrue();
    CorrectAnswer();
    StartGame();
  } else {
    WrongAnswer();
  }
}

answerBtn.addEventListener("click", function () {
  AnswerGame(first + second);
})
  

  
