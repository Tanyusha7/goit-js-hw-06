const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery");

list.style.paddingRight = "40px";
list.style.display = "flex";
list.style.justifyContent = "center";
list.style.alignItems = "center";
list.style.listStyle = "none";
list.style.gap = "24px";

const imageElem = images.map((image) => {
  const liElemImg = `<li>
  <img src = ${image.url} alt = ${image.alt} width = 300 />
  </li>`;

  // console.log(liElemImg);
  return liElemImg;
});
list.insertAdjacentHTML("beforeend", imageElem);
