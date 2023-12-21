const loginBtn = document.querySelector(".form-loginBtn");
const usernameAccount = document.querySelector("#username");
const passwordAccount = document.querySelector("#password");
const errorusername = document.querySelector(".error-username");
const errorpassword = document.querySelector(".error-password");

const userData = [
  { username: "user1", password: "pass1" },
  { username: "user2", password: "pass2" },
  // Add more user data as needed
];

const usernameError = () => {
  usernameAccount.classList.add("wrong");
};

const passwordError = () => {
  passwordAccount.classList.add("wrong");
};

const usernameCorrect = () => {
  usernameAccount.classList.add("correct");
};

const passwordCorrect = () => {
  passwordAccount.classList.add("correct");
};

const Login = () => {
  const loginBtn = document.querySelector(".form-loginBtn");
  const usernameAccount = document.querySelector("#username");
  const passwordAccount = document.querySelector("#password");
  const errorusername = document.querySelector(".error-username");
  const errorpassword = document.querySelector(".error-password");

  const userData = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" },
    // Add more user data as needed
  ];

  const usernameError = () => {
    usernameAccount.classList.add("wrong");
    usernameAccount.classList.remove("correct");
  };

  const passwordError = () => {
    passwordAccount.classList.add("wrong");
    passwordAccount.classList.remove("correct");
  };

  const usernameCorrect = () => {
    usernameAccount.classList.add("correct");
    usernameAccount.classList.remove("wrong");
  };

  const passwordCorrect = () => {
    passwordAccount.classList.add("correct");
    passwordAccount.classList.remove("wrong");
  };

  loginBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const usernameInput = usernameAccount.value;
    const passwordInput = passwordAccount.value;

    const username = userData.find((user) => user.username === usernameInput);
    const password = userData.find((user) => user.password === passwordInput);
    if (!username) {
      usernameError();
    }

    if (!password) {
      passwordError();
    }

    if (username) {
      usernameCorrect();
    }

    if (password) {
      passwordCorrect();
    }

    if (username && password) {
      window.location.href = "/pages/home.html";
    }
  });
};

const view = document.querySelector(".view");
const hide = document.querySelector(".hide");
const buttons = document.querySelectorAll(".password img")

buttons.forEach((button) => {
  button.addEventListener("click", function(e){
    let buttonValue = e.target.dataset.value;
    let passwordInput = document.getElementById("password");

    if (buttonValue === "view") {
      passwordInput.type = passwordInput.type === "password" && "text";
      hide.classList.add("visible");
      view.classList.add("invisible");
    } else if (buttonValue == "hide") {
      passwordInput.type = passwordInput.type === "text" && "password";
      hide.classList.remove("visible");
      view.classList.remove("invisible");
    }
    
  })
})


Login();
