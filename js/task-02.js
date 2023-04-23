const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const elements = [];
const newIngredients = ingredients.forEach((ingredient) => {
  // const liEl = `<li class='item' > ${ingredient} </li>`;
  // list.innerHTML += liEl;
  // console.log(ingredient);

  const liEl = document.createElement("li");
  liEl.classList = "item";
  liEl.textContent = `${ingredient}`;
  console.log(liEl);

  elements.push(liEl);
});

list.append(...elements);
console.log(list);
