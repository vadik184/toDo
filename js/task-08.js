const mainForm = document.querySelector(".login-form");

mainForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const finalObj = {};
  if (email === "" || password === "") {
    return alert("Будь ласка, всі поля повинні бути заповнені!");
  }
  finalObj.email = email;
  finalObj.password = password;
  console.log(finalObj);
  form.reset();
}
