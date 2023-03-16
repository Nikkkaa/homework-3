const randomButton = document.getElementById("button-random-img");
const imageContainer = document.getElementById("random-image-container");

randomButton.addEventListener("click", () => {
  imageContainer.innerHTML = "";
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      const img = document.createElement("img");
      img.src = data.message;
      imageContainer.appendChild(img);
    })
    .catch((error) => console.error(error));
});
