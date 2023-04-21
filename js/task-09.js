function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");

const bodySpan = document.querySelector(".color");
// console.log(bodySpan);
// console.log(bodySpan.textContent);

const bodyBtn = document.querySelector(".change-color");
// console.log(bodyBtn);

bodyBtn.addEventListener("click", onBody);

function onBody() {
  body.style.backgroundColor = getRandomHexColor();

  bodySpan.textContent = body.style.backgroundColor;
  // console.log(bodySpan.textContent);
}
