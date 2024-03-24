function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const amount = document.querySelector("#controls input");
const createBtn = document.querySelector("#controls [data-create]");
const destroyBtn = document.querySelector("#controls [data-destroy]");
const boxes = document.querySelector("#boxes");

const createBoxes = () => {
  let lastBoxSize = boxes?.lastChild?.clientWidth + 10 || 30;

  const list = Array.from({ length: amount.value }).reduce((acc, item) => {
    let boxDiv = document.createElement("div");
    boxDiv.style.width = `${lastBoxSize}px`;
    boxDiv.style.height = `${lastBoxSize}px`;
    lastBoxSize += 10;
    boxDiv.style.backgroundColor = getRandomHexColor();
    acc.push(boxDiv);
    return acc;
  }, []);

  boxes.append(...list);
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
