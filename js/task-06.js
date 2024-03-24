const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const inputValue = input.value;
  console.log(inputValue);
  const inputLength = input.dataset.length;
  console.log(inputLength);
  if (inputValue.length === Number(inputLength)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else if (inputValue.length === 0) {
    input.classList.remove("invalid");
    input.classList.remove("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
