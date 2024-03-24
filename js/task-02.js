const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

function createList(arr) {
  const markup = arr.map((ingredient) => {
    const listOfItems = document.createElement("li");
    const text = document.createElement("p");
    text.textContent = ingredient;
    listOfItems.classList.add("item");
    listOfItems.append(text);
    return listOfItems;
  });
  list.append(...markup);
}

createList(ingredients);
