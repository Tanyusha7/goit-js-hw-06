const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const makeNewItemsOfIngredients = ingredients.forEach((ingredient) => {
  // const liEl = `<li class='item' > ${ingredient} </li>`;
  // list.innerHTML += liEl;

  const liEl = document.createElement("li");
  liEl.classList = "item";
  liEl.textContent = ingredient;
  list.append(liEl);
  // console.log(list);
});
