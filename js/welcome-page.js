const playNowBtn = document.querySelector(".play-now-button");
const playFreeBtn = document.querySelector(".play-free");
const playNowModal = document.querySelector(".play-now-modal");
const closeModal = document.querySelector(".close-button");
const playNowOverlay = document.querySelector(".play-now-overlay");

const addPlayNowModalAndOverlay = () => {
  playNowModal.classList.add("visible");
  playNowOverlay.classList.add("visible");
};

const removePlayNowModalAndOverlay = () => {
  playNowModal.classList.remove("visible");
  playNowOverlay.classList.remove("visible");
};

playNowBtn.addEventListener("click", function () {
  addPlayNowModalAndOverlay();
});

playFreeBtn.addEventListener("click", function () {
  addPlayNowModalAndOverlay();
});

closeModal.addEventListener("click", function () {
  removePlayNowModalAndOverlay();
});

const barsBtn = document.querySelector(".barsBtn");
const navbarModal = document.querySelector(".navbar-modal .main-navbar");

barsBtn.addEventListener("click", function(){
  navbarModal.classList.toggle("visible")
})