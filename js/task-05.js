const refs = {
  inputText: document.querySelector("#name-input"),
  spanText: document.querySelector("#name-output"),
};
const getName = (event) => {
  if (event.target.value !== "") {
    refs.spanText.textContent = event.target.value;
  } else {
    refs.spanText.textContent = "Anonymous";
  }
};
refs.inputText.addEventListener("input", getName);
