const nameInput = document.querySelector("#name-input");
console.log(nameInput);

const nameOutput = document.querySelector("#name-output");
console.log(nameOutput);

console.log(nameOutput.textContent);

nameInput.addEventListener("input", (event) => {
  event.preventDefault();
  if (event.currentTarget.value === "      ") {
    return nameOutput.textContent;
  }
  nameOutput.textContent = event.currentTarget.value;
});
