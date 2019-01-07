//Variable
let myImage, styleClass, styleTxt;

//Ajouter un texte "suivant" dans page html
var addTxt = function(){
    var txt = document.querySelector('.txt')
    txt.textContent = "Suivant"
}
document.addEventListener('DOMContentLoaded', addTxt) 

//Ajouter .txt dans texte "suivant"
styleClass = document.querySelector('.txt').classList.add('antenaina')
//Ajouter style dans l'élement
styleTxt = document.querySelector('.antenaina')
styleTxt.style.textAlign = "center"
styleTxt.style.fontSize = "50px"
styleTxt.style.display = "block"
styleTxt.style.width = "200px"
styleTxt.style.backgroundColor = "#ff0000"
styleTxt.style.margin = "10px auto"
styleTxt.style.borderRadius = "10px"
styleTxt.style.cursor = "pointer"

//Change image on click
myImage = document.querySelector('img')
var actionImage = function () {
    let getSrc = myImage.getAttribute('src')
    if (getSrc === 'images/1.jpg') {
        myImage.setAttribute('src', 'images/2.jpg')
    } else if (getSrc === 'images/2.jpg') {
        myImage.setAttribute('src', 'images/3.jpg')
    } else if (getSrc === 'images/3.jpg') {
        myImage.setAttribute('src', 'images/1.jpg')
    }
}
myImage.addEventListener('click', actionImage)

//Change image on click text
myTxt = document.querySelector('.antenaina')
txtAction = function () {
    let getSrc = myImage.getAttribute('src')
    if (getSrc === 'images/1.jpg') {
        myTxt.setAttribute('data-antenaina', 'a')
        var getDataAntenaina = myTxt.getAttribute('data-antenaina')
    } 
    if (getDataAntenaina === "a") {
        myImage.setAttribute('src', 'images/2.jpg')
        styleTxt.style.color = "#fff" // Change color text
        styleTxt.style.backgroundColor = "rgb(48, 134, 23)" //Change Bg
    } else if (getSrc === 'images/2.jpg') {
        myImage.setAttribute('src', 'images/3.jpg')
        styleTxt.style.color = "rgb(212, 27, 27)" // Change color text
        styleTxt.style.backgroundColor = "rgb(20, 25, 18)" //Change Bg
    } else if (getSrc === 'images/3.jpg') {
        myImage.setAttribute('src', 'images/1.jpg')
        styleTxt.style.color = "#fff" // Change color text
        styleTxt.style.backgroundColor = "rgb(12, 19, 152)" //Change Bg
    }
    
}
myTxt.addEventListener('click', txtAction)

// Ajouter text avec titre
var title = document.querySelector("[data-antenaina-show]")
var path = title.textContent = window.location.pathname
