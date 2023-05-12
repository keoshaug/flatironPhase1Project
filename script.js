/*

JS retrieval info:

Artist:	"artist_titles"
Title:	"title"
Category:	"category_titles"
Style:	"style_title"
Year:		"date_display"

*/

fetch("https://api.artic.edu/api/v1/artworks")
.then(response => response.json());


const click = document.querySelector("#click");

click.addEventListener("click", eventHandler);