const noButton = document.querySelector(".button-no");
const yesButton = document.querySelector(".button-yes");

let player; // Zmienna do przechowywania instancji odtwarzacza YouTube

noButton.style.transition = "top 0.3s ease-in-out, left 0.3s ease-in-out"; // Płynna animacja

noButton.addEventListener("mouseover", function () {
  let button = this;
  let boundingRect = button.getBoundingClientRect();
  let viewportWidth = window.innerWidth;
  let viewportHeight = window.innerHeight;
  noButton.style.position = "absolute";

  // Margines, który chcemy zostawić od krawędzi ekranu
  const margin = 20;

  // Obliczamy granice dla X i Y, tak aby przycisk nie wystawał poza ekran
  let maxX = viewportWidth - boundingRect.width - margin; // Szerokość okna minus szerokość przycisku
  let maxY = viewportHeight - boundingRect.height - margin; // Wysokość okna minus wysokość przycisku
  let minX = margin; // Minimalna pozycja na osi X
  let minY = margin; // Minimalna pozycja na osi Y

  // Generujemy losową pozycję w wyznaczonym zakresie
  let newX = Math.random() * (maxX - minX) + minX;
  let newY = Math.random() * (maxY - minY) + minY;

  // Ustawiamy pozycję przycisku przy pomocy top i left
  button.style.left = `${newX}px`;
  button.style.top = `${newY}px`;
});

yesButton.addEventListener("click", (event) => {
  if (player.getPlayerState() !== 1) {
    console.log("XDDDDDDDDDDDDDDD");
    console.log(player);
    player.playVideo();
  }
  const element = document.querySelector(".buttons");

  element.remove();

  const heart = document.querySelector(".heart");

  heart.remove();

  const newElemContainer = document.createElement("div");

  newElemContainer.className = "heart";

  const newElementImage = document.createElement("img");
  newElementImage.src = "img/agree.jpg";
  newElementImage.width = 200;

  const newElement = document.createElement("div");
  newElement.innerText =
    "Dzięki wiedziałem ,że to klikniesz \n Dlatego proponuje w jakimś wolnym terminie kawę i ciastko. \n Ps. Ja stawiam ";
  newElement.style.display = "flex";
  newElement.style.justifyContent = "center";
  newElement.style.alignItems = "center";
  newElement.style.flexDirection = "column";
  newElement.style.textAlign = "center";

  newElement.classList.add("dancing-script-my");

  newElement.appendChild(newElementImage);
  newElemContainer.appendChild(newElement);
  const container = document.querySelector(".second-container");
  container.appendChild(newElemContainer);
});

document.addEventListener("DOMContentLoaded", () => {
  // Funkcja wywoływana, gdy odtwarzacz jest gotowy
  function onPlayerReady(event) {
    console.log("Player is ready");

    // Rozpocznij odtwarzanie wideo zaraz po załadowaniu odtwarzacza
    if (player) {
      console.log("Starting video playback");
      player.playVideo(); // Rozpoczynamy odtwarzanie wideo
      player.mute(); // Wyciszenie wideo na początku
      player.unMute();
    }
  }

  // Funkcja inicjalizująca API YouTube
  window.onYouTubeIframeAPIReady = function () {
    console.log("YouTube Iframe API is ready");
    player = new YT.Player("youtube-video", {
      videoId: "-6KuSa0zgaA", // Zastąp to identyfikatorem wideo, które chcesz odtworzyć
      events: {
        onReady: onPlayerReady, // Funkcja wywoływana, gdy odtwarzacz jest gotowy
      },
    });
  };

  // Załaduj YouTube Iframe API
  const script = document.createElement("script");
  script.src = "https://www.youtube.com/iframe_api";
  document.body.appendChild(script);

  // Dodaj logi do śledzenia załadowania skryptu
  script.onload = function () {
    console.log("YouTube Iframe API script loaded successfully.");
  };

  script.onerror = function () {
    console.error("Error loading YouTube Iframe API script.");
  };
});
