const ulEl = document.querySelector("#categories");

console.log(`Number of categories: ${ulEl.children.length}`);

const liEl = document.querySelectorAll(".item");

liEl.forEach((name) => {
  console.log(`Category: ${name.firstElementChild.textContent}`);
  console.log(`Elements: ${name.lastElementChild.children.length}`);
});
