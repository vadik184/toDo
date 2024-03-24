const todoCard = document.querySelector(".todo-card");
const editButton = document.querySelector(".edit");
const deleteButton = document.querySelector(".delete");
const colorChangeButton = document.querySelector(".color-change");
const colorOptions = document.querySelector(".color-options");

editButton.addEventListener("click", () => {
  const newTitle = prompt(
    "Enter new title:",
    todoCard.querySelector("h3").textContent
  );

  if (newTitle !== null) {
    todoCard.querySelector("h3").textContent = newTitle;
  }
});

deleteButton.addEventListener("click", () => {
  todoCard.remove();
});

colorChangeButton.addEventListener("click", () => {
  colorOptions.style.display = "flex";
});

colorOptions.addEventListener("click", (event) => {
  const colorOption = event.target.closest(".color-option");
  if (colorOption) {
    const backgroundColor = colorOption.style.backgroundColor;
    const rgbaColor = backgroundColor
      .replace(")", ", 0.25)")
      .replace("rgb", "rgba");
    todoCard.style.backgroundColor = rgbaColor;
    colorOptions.style.display = "none";
  }
});
