let header = document.querySelector("h1");
 header.style.backgroundColor = "white";
//How would I affect the second h1 using querySelectorAll?
header.addEventListener("click", function () {
//   if (header.style.backgroundColor === "blue") {
//     header.style.backgroundColor = "red";
//   } else if ( header.style.backgroundColor === "red"){
//       header.style.backgroundColor = "green"
//   } else {
//       header.style.backgroundColor = "blue"
//   }

switch(header.style.backgroundColor){
    case 'white':
        header.style.background = "blue"
        header.style.color = "lightgreen"
        break;
    case 'blue':
        header.style.backgroundColor = "red"
        header.style.color = "blue";
        break;
    case 'red':
        header.style.backgroundColor = "lightgreen"
        header.style.color = "red";
        break;
    case 'lightgreen':
        header.style.backgroundColor = "blue"
        header.style.color="lightgreen"
}

});
const catButton= document.querySelector("#cat-btn")
catButton.addEventListener("click", (catButtonParameter) => {
    fetch('https://aws.random.cat/meow')
    .then(response => response.json())
    .then(catApiAfterJsonConversion => {
        const displayedImage = document.createElement('img'); // <img />
        displayedImage.setAttribute('src', catApiAfterJsonConversion.file); // <img src="http:url" />
        const imgContainer = document.querySelector('.cat-container'); // <div class="cat-container>"
        
        // the next line(s) are to replace image, rather than just add another image
        //I set the space where the image will go to ' '/empty, then run code
        //to turn that empty space into the picture from the API
          imgContainer.innerHTML = "";

        imgContainer.appendChild(displayedImage);
    });
});
