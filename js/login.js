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
  errorusername.classList.add("wrong");
  usernameAccount.classList.add("wrong");
};

const passwordError = () => {
  errorpassword.classList.add("wrong");
  passwordAccount.classList.add("wrong");
};

const usernameCorrect = () => {
  usernameAccount.classList.add("correct");
};

const passwordCorrect = () => {
  passwordAccount.classList.add("correct");
};

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const usernameInput = usernameAccount.value;
  const passwordInput = passwordAccount.value;

  const user = userData.find(
    (user) => user.username === usernameInput && user.password === passwordInput
  );

  if (!user) {
    usernameError();
    passwordError();
  } else {
    usernameCorrect();
    passwordCorrect();
  }
});
