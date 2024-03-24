const rangeInput = document.querySelector("#font-size-control");
const rangeSpan = document.querySelector("#text");

rangeInput.addEventListener("input", () => {
  const inputValue = event.currentTarget.value;
  console.log(inputValue);
  rangeSpan.classList.add("spanCase");
  document.querySelector(".spanCase").style.fontSize = `${inputValue}px`;
});
