function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBoxes = document.querySelector("[data-destroy]");

const boxes = document.querySelector("#boxes");
boxes.style.margin = "10px";
boxes.style.display = "flex";
boxes.style.flexWrap = "wrap";
boxes.style.gap = "10px";

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    console.log(i);
    console.log(amount);
    let divEl = document.createElement("div");
    divEl.style.textAlign = "center";
    divEl.style.width = 30 + 10 * i + "px";
    divEl.style.height = 30 + 10 * i + "px";
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.textContent = i;

    console.log(divEl);
    boxes.append(divEl);
  }
}

createBtn.addEventListener("click", function () {
  let amount = createBtn.previousElementSibling.value;
  if (amount > 0) {
    createBoxes(amount);
  }
});

destroyBoxes.addEventListener("click", function () {
  boxes.innerHTML = "";
  createBtn.previousElementSibling.value = "";
});
