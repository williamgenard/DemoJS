// Récupérer un élément HTML


// Récupérer un élément

// Par id
const bonjourHTML = document.getElementById("bonjour")
console.log(bonjourHTML)
bonjourHTML.innerText = "Bonjour bis"

// Par selecteur CSS
const bonjourHTML2 = document.querySelector("#bonjour")

// Récupérer plusieurs éléments HTML

// Par classe
const paragrapheHTML = document.getElementsByClassName("paragraphe")
console.log(paragrapheHTML)

// Par sélecteur CSS
const paragrapheHTML2 = document.querySelectorAll(".paragraphe")

// Par tag
const liHTML = document.getElementsByTagName("li")
console.log(liHTML)

// Manipulation des élément html

// Changer le texte
bonjourHTML.innerText = "Bonjour bis bis"
console.log(bonjourHTML.innerText)

// Changer l'html
bonjourHTML.innerHTML = "<em>Bonjour bis bis</em>"

// Manipuler attribut HTML
liHTML[1].setAttribute("class", "red")

// Manipuler les classes
liHTML[1].classList.add("paragraphe")
liHTML[1].classList.remove("paragraphe")

// Manipulation des enfants
const ulHTML = document.getElementsByTagName("ul")[0]

// Récupérer le premier enfant
const firstLiHTML = ulHTML.firstElementChild
console.log(firstLiHTML)

// Récupérer le dernier enfant
const lastLiHTML = ulHTML.lastElementChild

// Récupérer tous les enfants
const allChildrenHTML = ulHTML.children

// Récupérer le parent
console.log(ulHTML.parentElement)

// Création
const newElem = document.createElement("li")
newElem.innerText = "Mon nouveau élément html"
newElem.classList.add("red")
ulHTML.appendChild(newElem)






