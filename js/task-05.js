const nameInput = document.querySelector("#name-input");
// console.log(nameInput);

const nameOutput = document.querySelector("#name-output");
// console.log(nameOutput);
// console.log(nameOutput.textContent);

nameInput.addEventListener("input", onNameInput);

function onNameInput(event) {
  if (event.currentTarget.value === "") {
    return (nameOutput.textContent = "Anonymous");
  }
  nameOutput.textContent = event.currentTarget.value;
}
