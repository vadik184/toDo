const todoCard = document.querySelector(".todo-card");
const editButton = document.querySelector(".edit");
const deleteButton = document.querySelector(".delete");
const colorChangeButton = document.querySelector(".color-change");
const colorOptions = document.querySelector(".color-options");

const customPrompt = document.getElementById("customPrompt");
const newTitleInput = document.getElementById("newTitleInput");
const submitPromptButton = document.getElementById("submitPrompt");

// editButton.addEventListener("click", () => {
//   const newTitle = prompt(
//     "Enter new title:",
//     todoCard.querySelector("h3").textContent
//   );

//   if (newTitle !== null) {
//     todoCard.querySelector("h3").textContent = newTitle;
//   }
// });

editButton.addEventListener("click", () => {
  if (todoCard.querySelector("h3").textContent === "Title") {
    newTitleInput.value = "";
  } else {
    newTitleInput.value = todoCard.querySelector("h3").textContent;
  }

  customPrompt.style.display = "block";
});

deleteButton.addEventListener("click", () => {
  todoCard.remove();
});

submitPromptButton.addEventListener("click", () => {
  const newTitle = newTitleInput.value.trim();
  if (newTitle !== "") {
    todoCard.querySelector("h3").textContent = newTitle;
    customPrompt.style.display = "none";
  } else {
    alert("Please enter both a new title and a new description.");
  }
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
