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
        const photoContainer = document.getElementsByClassName("input")
        dataArray.forEach(imageInfo => {
            const img = document.createElement("img")
            img.src = imageInfo.image

            photoContainer.appendChild(img)
        })
    }

const fetchData = () => {

    fetch("https://api.artic.edu/api/v1/artworks")
    .then(response => response.json())
    .then(data => renderImages(data.data))

    fetch("https://raw.githubusercontent.com/keoshaug/open-access-is-great-but-where-are-the-images/main/1.data/chicago-images.csv")
    .then(response => response.json())
    .then(data => renderImages(data.data))

}




const click = document.querySelector("#click")

click.addEventListener("click", eventHandler)
