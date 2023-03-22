import "./style.css";
import Icon from "./icon.png";

// Add the image to our existing div.
const myIcon = new Image();
myIcon.src = Icon;

(() => {
  "use strict";
  const contactOwner = {
      name: "Jerrick Backous",
      phone: "763-843-4185",
      location: "My house"
    };

  const menuItems = [
    {
      item: "Salsiccia",
      description:
        "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil",
    },
    {
      item: "Gamberi",
      description:
        "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil",
    },
    {
      item: "Pepe",
      description: "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil",
    },
    {
      item: "Disgustoso",
      description: "Tomato sauce, Bacon, Pineapple, Olives, Basil",
    },
  ];

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
  const listItemOne = document.createElement("button");
  listItemOne.classList.add("home-btn");
  listItemOne.textContent = "Home";
  const listTwo = document.createElement("li");
  const listItemTwo = document.createElement("button");
  listItemTwo.classList.add("menu-btn");
  listItemTwo.textContent = "Menu";
  const listThree = document.createElement("li");
  const listItemThree = document.createElement("button");
  listItemThree.classList.add("contact-btn");
  listItemThree.textContent = "Contact";

  header.appendChild(listHeader);
  listHeader.appendChild(listOne);
  listHeader.appendChild(listTwo);
  listHeader.appendChild(listThree);
  listOne.appendChild(listItemOne);
  listTwo.appendChild(listItemTwo);
  listThree.appendChild(listItemThree);

  function handleClick(event) {
    if (event.target.classList == "home-btn") {
      goHome();
      console.log(`Button ${event.target.classList} clicked!`);
    } else if (event.target.classList == "menu-btn") {
      goToMenu();
      console.log(`Button ${event.target.classList} clicked!`);
    } else if (event.target.classList == "contact-btn") {
      goToContact();
      console.log(`Button ${event.target.classList} clicked!`);
    }
  }

  listItemOne.addEventListener("click", handleClick);
  listItemTwo.addEventListener("click", handleClick);
  listItemThree.addEventListener("click", handleClick);

  // Create main content for Home
  const goHome = function () {
    const activeElements = document.querySelectorAll(".active");
    activeElements.forEach((element) => {
      element.remove();
    });

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

  const menuItem = (i) => {
    const bucket = document.createElement("div");
    const item = document.createElement("h2");
    item.classList.add("item");
    item.textContent = `${i.item}`;
    const description = document.createElement("h2");
    description.classList.add("description");
    description.textContent = `${i.description}`;

    bucket.appendChild(item);
    bucket.appendChild(description);
    menuBack.appendChild(bucket);
    console.log(`${i.item}`);
  };

  const goToMenu = function () {
    const activeElements = document.querySelectorAll(".active");
    activeElements.forEach((element) => {
      element.remove();
    });

    const menuBack = document.createElement("div");
    menuBack.classList.add("menu-background");
    menuBack.classList.add("active");

    main.appendChild(menuBack);

    menuItems.forEach((element) => {
      const bucket = document.createElement("div");
      bucket.classList.add("item-container");
      const item = document.createElement("h2");
      item.classList.add("item");
      item.textContent = `${element.item}`;
      const description = document.createElement("h2");
      description.classList.add("description");
      description.textContent = `${element.description}`;

      bucket.appendChild(item);
      bucket.appendChild(description);
      menuBack.appendChild(bucket);
    });
  };

  const goToContact = function () {
    const activeElements = document.querySelectorAll(".active");
    activeElements.forEach((element) => {
      element.remove();
    });

    const contBack = document.createElement("div");
    contBack.classList.add("contact-background");
    contBack.classList.add("active");

    main.appendChild(contBack);

    const contHeader = document.createElement("h3");
    contHeader.classList.add("contact-header");
    contHeader.textContent = "Contact"

    contBack.appendChild(contHeader);

    const name = document.createElement("p");
    name.classList.add("owner");
    name.textContent = `Name: ${contactOwner.name}`;

    contBack.appendChild(name);

    const phone = document.createElement("p");
    phone.classList.add("phone");
    phone.textContent = `Phone: ${contactOwner.phone}`;

    contBack.appendChild(phone);

    const address = document.createElement("p");
    address.classList.add("address");
    address.textContent = `Address: ${contactOwner.location}`;

    contBack.appendChild(address);

  };

  // Create footer
  const footText = document.createElement("p");
  footText.classList.add("footer-text");
  footText.textContent = "Copyright © 2023 JerrickBackous";

  footer.appendChild(footText);
})();
