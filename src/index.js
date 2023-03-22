import "./style.css";
import Icon from "./icon.png";

// Add the image to our existing div.
const myIcon = new Image();
myIcon.src = Icon;

// Create main containers
const container = document.getElementById("content");

const header = document.createElement("div");
header.classList.add("header");

container.appendChild(header);

const main = document.createElement("div");
main.classList.add("main");

container.appendChild(main);

const footer = document.createElement("div");
footer.classList.add("footer");

container.appendChild(footer);

// Create header
const name = document.createElement("h1");
name.classList.add("name");
name.textContent = "Beautizza";

header.appendChild(name);

const listHeader = document.createElement("ul");
listHeader.classList.add("navButtons");
const listOne = document.createElement("li");
const listItemOne = document.createElement("a");
listItemOne.href = "#";
listItemOne.textContent = "Home";
const listTwo = document.createElement("li");
const listItemTwo = document.createElement("a");
listItemTwo.href = "#";
listItemTwo.textContent = "Menu";
const listThree = document.createElement("li");
const listItemThree = document.createElement("a");
listItemThree.href = "#";
listItemThree.textContent = "Contact";

header.appendChild(listHeader);
listHeader.appendChild(listOne);
listHeader.appendChild(listTwo);
listHeader.appendChild(listThree);
listOne.appendChild(listItemOne);
listTwo.appendChild(listItemTwo);
listThree.appendChild(listItemThree);

// Create main content for Home
const goHome = function () {
  const mainBack = document.createElement("div");
  mainBack.classList.add("main-background");
  mainBack.classList.add("active");

  main.appendChild(mainBack);

  const mainContent = document.createElement("h3");
  mainContent.classList.add("main-content");
  mainContent.classList.add("active");

  mainBack.appendChild(mainContent);

  const introContent = document.createElement("p");
  introContent.classList.add("intro");
  introContent.classList.add("active");
  introContent.textContent = "Best pizza in the country";

  mainContent.appendChild(introContent);

  const introImage = document.createElement("img");
  introImage.classList.add("face");
  introImage.classList.add("active");
  introImage.src = myIcon.src;

  mainContent.appendChild(introImage);

  const orderContent = document.createElement("p");
  orderContent.classList.add("outro");
  orderContent.classList.add("active");
  orderContent.textContent = "Order online or visit us!";

  mainContent.appendChild(orderContent);
};

goHome();

const goToMenu = function () {
  const mainBack = document.createElement("div");
  mainBack.classList.add("main-background");

  main.appendChild(mainBack);

  const mainContent = document.createElement("h3");
  mainContent.classList.add("main-content");

  mainBack.appendChild(mainContent);

  const introContent = document.createElement("p");
  introContent.classList.add("intro");
  introContent.textContent = "Best pizza in the country";

  mainContent.appendChild(introContent);

  const introImage = document.createElement("img");
  introImage.classList.add("face");
  introImage.src = myIcon.src;

  mainContent.appendChild(introImage);

  const orderContent = document.createElement("p");
  orderContent.classList.add("outro");
  orderContent.textContent = "Order online or visit us!";

  mainContent.appendChild(orderContent);
};

const goToContact = function () {
  const mainBack = document.createElement("div");
  mainBack.classList.add("main-background");

  main.appendChild(mainBack);

  const mainContent = document.createElement("h3");
  mainContent.classList.add("main-content");

  mainBack.appendChild(mainContent);

  const introContent = document.createElement("p");
  introContent.classList.add("intro");
  introContent.textContent = "Best pizza in the country";

  mainContent.appendChild(introContent);

  const introImage = document.createElement("img");
  introImage.classList.add("face");
  introImage.src = myIcon.src;

  mainContent.appendChild(introImage);

  const orderContent = document.createElement("p");
  orderContent.classList.add("outro");
  orderContent.textContent = "Order online or visit us!";

  mainContent.appendChild(orderContent);
};

// Create footer
const footText = document.createElement("p");
footText.classList.add("footer-text");
footText.textContent = "Copyright © 2023 JerrickBackous";

footer.appendChild(footText);
