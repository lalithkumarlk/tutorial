const email = document.getElementById("mail");
email.addEventListener("input", xyz);

function xyz() {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
}
