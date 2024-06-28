const form = document.getElementById("form");

const emailOrPhoneInput = document.getElementById("emailOrPhone");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("remember-password");

let emailOrPhone, password, rememberPassword;

function checkCheckbox() {
  if (checkbox.checked) {
    rememberPassword = true;
  } else {
    rememberPassword = false;
  }
}

emailOrPhoneInput.addEventListener("change", (e) => {
  emailOrPhone = e.target.value;
});

passwordInput.addEventListener("change", (e) => {
  password = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(
    `Form submitted. Email/Phone: ${emailOrPhone}. Password: ${password}. Remember password: ${rememberPassword}`
  );
});
