const refs = {
  container: document.querySelectorAll("#counter"),
  countSpan: document.querySelector("#value"),
  btnMinus: document.querySelector('[data-action="decrement"]'),
  btnPlus: document.querySelector('[data-action="increment"]'),
  btns: document.querySelectorAll("[data-action]"),
};

let counterValue = 0;

refs.btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn === refs.btnMinus) {
      counterValue -= 1;
    } else {
      counterValue += 1;
    }
    refs.countSpan.textContent = counterValue;
  });
});
