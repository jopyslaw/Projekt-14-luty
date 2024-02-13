const noButton = document.querySelector(".button-no");
const yesButton = document.querySelector(".button-yes");

noButton.addEventListener("mouseover", function () {
  let button = this;
  let boundingRect = button.getBoundingClientRect();

  let mouseX = boundingRect.x;
  let mouseY = boundingRect.y;

  yesButton.style.width = yesButton.getBoundingClientRect().width + 50 + "px";
  yesButton.style.height = yesButton.getBoundingClientRect().height + 50 + "px";

  document.onmousemove = function (event) {
    let newMouseX = event.clientX;
    let newMouseY = event.clientY;

    let distanceX = newMouseX - mouseX;
    let distanceY = newMouseY - mouseY;

    button.style.top = distanceX + 10 + "px";
    button.style.right = distanceY + 10 + "px";

    mouseX = newMouseX;
    mouseY = newMouseY;
  };
});

noButton.addEventListener("mouseleave", function () {
  document.onmousemove = null;
});

yesButton.addEventListener("click", (event) => {
  const element = document.querySelector(".buttons");

  element.remove();

  const newElementImage = document.createElement("img");
  newElementImage.src = "img/agree.jpg";

  const newElement = document.createElement("div");
  newElement.innerText =
    "DZIEKUJE !!!!!!!!!!!!!!!!!!!!!!!!!!! Tak to niżej to ja XD Wiedziałem, że tak odpowiesz więc cały czas czekałem XDDDD";
  newElement.style.display = "flex";
  newElement.style.justifyContent = "center";
  newElement.style.alignItems = "center";
  newElement.style.flexDirection = "column";

  newElement.appendChild(newElementImage);

  const container = document.querySelector(".second-container");
  container.appendChild(newElement);
});
