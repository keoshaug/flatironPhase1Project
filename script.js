/*

JS retrieval info:

Artist:	"artist_titles"
Medium: "artwork_type_title"
Title:	"title"
Category:	"category_titles"
Style:	"style_title"
Year:		"date_display"

*/

const renderImages = (dataArray) => {
        console.log(dataArray)
        dataArray.forEach(imageInfo => {
            console.log(imageInfo)
        })
    }


fetch("https://api.artic.edu/api/v1/artworks")
.then(response => response.json())
.then(data => renderImages(data.data))

const click = document.querySelector("#click")

//click.addEventListener("click", eventHandler)