console.log("JS is working");

fetch("https://api.artic.edu/api/v1/artworks")
.then(response => response.json());


const click = document.querySelector("#click");

click.addEventListener("click", eventHandler);