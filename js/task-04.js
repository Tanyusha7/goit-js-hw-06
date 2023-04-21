const button = document.querySelector("#counter");
// console.log(button);
// console.log(button.children.value);
// console.log(button.children.value.textContent);

const addListenerBtn = document.querySelector(
  "#counter button[data-action='increment']"
);

const removeListenerBtn = document.querySelector(
  "#counter button[data-action='decrement']"
);

let counterValue = 0;

addListenerBtn.addEventListener("click", () => {
  counterValue += Number(addListenerBtn.textContent);
  console.log(counterValue);
  button.children.value.textContent = counterValue;
});

removeListenerBtn.addEventListener("click", () => {
  counterValue += Number(removeListenerBtn.textContent);
  console.log(counterValue);
  button.children.value.textContent = counterValue;
});

// function onButton() {
//   console.log("Клик по кнопке");
// }
