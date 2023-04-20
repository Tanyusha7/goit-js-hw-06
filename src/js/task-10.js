function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.querySelector("#controls");
// console.dir(controlsEl);
// console.log(controlsEl.firstElementChild.getAttribute("max"));
// console.log(controlsEl.firstElementChild.getAttribute("min"));

const input = document.querySelector("input");

const createBtn = document.querySelector("[data-create]");
// console.log(createBtn.previousElementSibling);
const destroyBtn = document.querySelector("[data-destroy]");

const boxes = document.querySelector("#boxes");
boxes.style.margin = "10px";
boxes.style.display = "flex";
boxes.style.flexWrap = "wrap";
boxes.style.gap = "10px";
// console.dir(boxes);

createBtn.addEventListener("click", onBtnCreate);
destroyBtn.addEventListener("click", destroyBoxes);

const elementsBoxes = [];

function createBoxes(amount) {
  amount = createBtn.previousElementSibling.value;
  for (let i = 1; i <= amount; i += 1) {
    console.log(i);
    console.log(amount);
    const divEl = document.createElement("div");
    divEl.style.textAlign = "center";
    divEl.style.width = "30px";
    divEl.style.height = "30px";
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.textContent = i;

    // console.log(divEl.style.width`&{+=10}px`);

    console.dir(divEl);
    elementsBoxes.push(divEl);
    boxes.append(...elementsBoxes);
  }
}

function onBtnCreate() {
  input.addEventListener("input", onInput());
  createBoxes();
  console.log("Stvorennya");
}

function destroyBoxes() {
  console.log("vudalennya");

  boxes.remove();
}

function onInput() {
  console.log("chislo");
  // createBoxes(number);
}
