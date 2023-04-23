const form = document.querySelector(".login-form");
// console.log(form);
// console.log(form.firstElementChild);
// console.log(form.firstElementChild.nextElementSibling);
// console.log(form.lastElementChild);

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const formData = { email: email.value, password: password.value };
  // const formData = new FormData(event.currentTarget);
  // console.log(formData);

  // formData.forEach((value, name) => {
  //   console.log("value", value);
  //   console.log("name", name);
  // });
  console.log(formData);

  console.log(`Email: ${email.value};   Password: ${password.value}`);

  event.currentTarget.reset();
}
