import "./style.css";
import Icon from "./icon.png";

// Add the image to our existing div.
const myIcon = new Image();
myIcon.src = Icon;

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

const name = document.createElement("title");
name.classList.add("name");

header.appendChild(name);

const navigation = document.createElement("nav");
navigation.classList.add("navigation");

header.appendChild(navigation);

const mainContent = document.createElement("title");
mainContent.classList.add("main-content");

main.appendChild(mainContent);

const introContent = document.createElement("p");
introContent.classList.add('intro')
introContent.textContent= 'Best pizza in the country';

mainContent.appendChild(introContent)