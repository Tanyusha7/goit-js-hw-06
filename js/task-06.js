const textInput = document.querySelector("#validation-input");
// console.log(textInput);
// console.log(textInput.getAttribute("data-length"));

textInput.addEventListener("input", (event) => {
  textInput.style.borderLine = "2px";
  textInput.style.borderStyle = "solid";
  textInput.style.borderColor = "#bdbdbd";

  if (
    event.currentTarget.value.length ===
    Number(textInput.getAttribute("data-length"))
  ) {
    return (textInput.style.borderColor = "#4caf50");
  }
  textInput.style.borderColor = "#f44336";
});
