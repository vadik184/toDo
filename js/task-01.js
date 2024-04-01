const todoCard = document.querySelector(".todo-card");
const editButton = document.querySelector(".edit");
const deleteButton = document.querySelector(".delete");
const colorChangeButton = document.querySelector(".color-change");
const colorOptions = document.querySelector(".color-options");
const toDoText = document.querySelector(".toDoText");

const customPrompt = document.getElementById("customPrompt");
const newTitleInput = document.getElementById("newTitleInput");
const newTextarea = document.getElementById("newText");
const submitPromptButton = document.getElementById("submitPrompt");

editButton.addEventListener("click", () => {
  if (todoCard.querySelector("h3").textContent === "Title") {
    newTitleInput.value = "";
  } else {
    newTitleInput.value = todoCard.querySelector("h3").textContent;
  }

  customPrompt.style.display = "flex";
});

deleteButton.addEventListener("click", () => {
  todoCard.remove();
});

submitPromptButton.addEventListener("click", () => {
  const newTitle = newTitleInput.value.trim();
  const newText = newTextarea.value.trim();
  if (newTitle !== "") {
    todoCard.querySelector("h3").textContent = newTitle;
    todoCard.querySelector("p").textContent = newText;
    customPrompt.style.display = "none";
    // } else {
    //   alert("Please enter both a new title and a new description.");
  }
});
colorChangeButton.addEventListener("click", () => {
  colorOptions.style.display = "flex";
});

function colorCangeTitle(event) {
  const colorOption = event.target.closest(".color-option");
  console.log(colorOption);
  if (colorOption) {
    const backgroundColor = colorOption.style.backgroundColor;

    const rgbaColor = backgroundColor
      .replace(")", ",0.3)")
      .replace("rgb", "rgba");

    console.log(rgbaColor);
    todoCard.style.backgroundColor = rgbaColor;
    colorOptions.style.display = "none";

    // toDoText.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    toDoText.style.backgroundColor = backgroundColor;

    toDoText.style.color = "#fff";
    todoCard.querySelector("h3").style.color = backgroundColor;
    toDoText.style.border = `1px solid ${backgroundColor}`;
  }
}
// function colorCangeText(event) {
//   const colorOption = event.target.closest(".color-option");
//   console.log(colorOption);
//   if (colorOption) {
//     const backgroundColor = colorOption.style.backgroundColor;

//     const textBack = backgroundColor
//       .replace(")", ", 0.1)")
//       .replace("rgb", "rgba");

//     console.log(textBack);
//     toDoText.style.backgroundColor = textBack;
//     toDoText.style.border = `1px solid ${backgroundColor}`;
//   }
// }
colorOptions.addEventListener("click", colorCangeTitle);
