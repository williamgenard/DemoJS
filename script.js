console.log("hello world")
const name = prompt("Quel est votre nom ?")

let maVariable = "Bonjour"
maVariable = "Au revoir"
maVariable = 5

console.log(maVariable)

// Number
const maVariableConstante = 12.23

const monCalcul = 12*45/20.2
const maDivisionReel = 12/5

console.log(parseInt(maDivisionReel))

// String
let message = "Mon messsage"
console.log(message.charAt(2))
console.log(message.toLocaleLowerCase())
console.log(message.length)

// Booleen
let majeur = true
let blond = false
let majeurEtBlond = majeur && blond
console.log(majeurEtBlond)
let majeurOuBlond = majeur || blond

let age = 12

const a18Ans = age === 18

console.log(1 !== "1")

majeur = age >= 18

console.log(majeur)

let monMessage = "Bonjour"

let monNombre = 12

console.log(monMessage + monNombre)
console.log("12" + "10")
console.log(parseInt("12") + parseInt("10"))

console.log(isNaN(parseInt("Bonjour")))

let undefinedVariable = null
let isUndefinedVariableTrue = !!undefinedVariable

// Structure conditionnelle

// If else

if (undefinedVariable) {
    console.log("hello")
}
else if (undefinedVariable === "bonjour") {
    console.log("hello else if")
}
else {
    console.log("goodbye")
}

// Switch

let jourDeLaSemaine = 2
switch (jourDeLaSemaine) {
    case 1:
        console.log("Lundi")
        break
    case 2:
        console.log("Mardi")
        break
    default:
        console.log("Ni mardi ni lundi")
        break
}

// While

let i = 0
while (i < 10) {
    console.log(i)
    i++
}

do {
    console.log(i)
    i++
} while(i < 20)


// Tableau

const tab = [12, 45, 23]

// Ajouter, modifier et supprimer des élément d'un tableau
tab.push(78)
tab[0] = 11


tab.pop()
tab.splice(1, 2, 89)

const newTab = [1, 2, 3, 4, 5]

//newTab.splice(1, 2, 12, 13)

console.log(newTab)

// Renvoie un nouveau tableau qui est une partie découpé d'un autre tableau

const newTabModified = newTab.slice(1, 3)

console.log(newTab)

// Renvoie un nouveau tableau qui est la concaténation de 2 tableaux

console.log(newTab.concat(newTabModified))

// Longueur un tableau

console.log(tab.length)

// Join

console.log(newTab.join(", "))

//Structure itérative

// for i

for (let i = 0; i < 10; i++) {
    console.log(i)
}

// for of 

for (let elem of newTab) {
    console.log(elem)
}

// for in (peu utilisé)

// for (let elem in newTab) {
//     console.log(elem)
// }
