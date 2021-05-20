const catButton = document.querySelector("#cat-btn");
const imgContainerForCats = document.querySelector(".cat-container"); // <div class="cat-container>"
const dogButton = document.querySelector("#dog-btn");
const imgContainerForDogs = document.querySelector(".dog-container");
const bells= document.getElementById("wrestling-bells")
const catMeow= document.getElementById("cat-meow")
const puppyBark= document.getElementById("puppy-bark")
let header = document.querySelector("h1");

header.style.backgroundColor = "white";

document.addEventListener('DOMContentLoaded',() =>{
  alert("Welcome to the Cute Animal Competition, where YOU are the judge that chooses the cuter picture!")
})

header.addEventListener("click", function () {
  let randomColorNumber = Math.floor(Math.random() * 16777215).toString(16);
  let randomColor = `#${randomColorNumber}`;
  header.style.color = randomColor;
  let randomColorNumberTwo = Math.floor(Math.random() * 16777215).toString(16);
  let randomColorTwo = `#${randomColorNumberTwo}`;
  header.style.backgroundColor = randomColorTwo;
  bells.play();
});

catButton.addEventListener("click", (catButtonParameter) => {
  fetch("https://aws.random.cat/meow")
    .then((response) => response.json())
    .then((catApiAfterJsonConversion) => {
      const displayedImageForCats = document.createElement("img"); // <img />
      displayedImageForCats.setAttribute("src", catApiAfterJsonConversion.file); // <img src="http:url" />
      imgContainerForCats.innerHTML = "";
      catMeow.play();
      imgContainerForCats.appendChild(displayedImageForCats);
    });
});

dogButton.addEventListener("click", (dogButtonParameter) => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((dogApiAfterJsonConversion) => {
        const displayedImageForDogs = document.createElement("img");
        displayedImageForDogs.setAttribute(
          "src",
          dogApiAfterJsonConversion.message
        );
        imgContainerForDogs.innerHTML = "";
        puppyBark.play();
        imgContainerForDogs.appendChild(displayedImageForDogs);
      });
  });