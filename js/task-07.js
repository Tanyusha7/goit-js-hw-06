const inputEl = document.querySelector("#font-size-control");

const inputText = document.querySelector("#text");

inputEl.addEventListener("input", onInputEl);

function onInputEl(event) {
  inputText.style.fontSize = `${event.currentTarget.value}px`;
}
