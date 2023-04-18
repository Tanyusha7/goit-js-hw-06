const nameInput = document.querySelector("#name-input");
console.log(nameInput);

const nameOutput = document.querySelector("#name-output");
console.log(nameOutput);

console.log(nameOutput.textContent);

nameInput.addEventListener("input", (event) => {
  nameOutput.textContent;
  if (event.currentTarget.value !== "") {
    nameOutput.textContent = event.currentTarget.value;
  }
});
