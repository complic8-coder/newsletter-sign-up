const signUp = document.querySelector(".sign-up");
const form = document.getElementById("form");
const inputError = document.querySelector(".email-error");
const emailInput = document.getElementById("email-input");
const success = document.querySelector(".success");

emailInput.addEventListener("invalid", (e) => {
  e.preventDefault();

  setInvalidMessage();
});

function setInvalidMessage() {
  inputError.innerHTML = `Valid email required`;
  emailInput.classList.add("error");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  var emailName = emailInput.value;
  localStorage.setItem("email_name", emailName);
  document.querySelector(".success__message b").innerHTML =
    localStorage.getItem("email_name");

  openSuccessMessage();
});

function openSuccessMessage() {
  success.style.display = "block";
  signUp.style.display = "none";
}
