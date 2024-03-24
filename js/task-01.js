const mainList = document.querySelector("#categories");
const mainListItem = document.querySelectorAll(".item");

console.log(`Number of categories: ${mainListItem.length}`);

function getList(arry) {
  arry.forEach((element) => {
    const categoryName = element.firstElementChild;
    const elementsCase = element.lastElementChild;
    const elementsLength = elementsCase.querySelectorAll("li");
    console.log(`Category: ${categoryName.textContent}
Elements: ${elementsLength.length}`);
  });
}

getList(mainListItem);
