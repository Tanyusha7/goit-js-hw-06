function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.querySelector("#controls");
console.dir(controlsEl);
console.log(controlsEl.firstElementChild);
console.log(controlsEl.firstElementChild.nextElementSibling);
console.log(controlsEl.lastElementChild);

const input = document.querySelector("input");
console.log(input);

const createBtn = document.querySelector("[data-create]");
console.log(createBtn);

const destroyBtn = document.querySelector("[data-destroy]");
console.log(destroyBtn);

const boxes = document.querySelector("#boxes");
console.dir(boxes);

createBtn.addEventListener("click", onCreateBtn);
destroyBtn.addEventListener("click", onDestroyBtn);

function createBoxes(numbers) {
  boxes.style.width = "30px";
  boxes.style.height = "30px";
}

function onCreateBtn() {
  console.log("Stvorennya");
}

function onDestroyBtn() {
  console.log("vudalennya");
}
