function direBonjour(nom) {
    console.log(`Bonjour ${nom}`)
}

direBonjour("William")

function direBonjourReturn(nom) {
    return `Bonjour ${nom}`
}

const message = direBonjourReturn("Jean")

console.log(message)

// Autre notation

const multiplierPar2 = function(nbr) {
    return nbr * 2
}

console.log(multiplierPar2(2))

const multiplierPar3 = (nbr) => {
    return nbr*3
}


// Return sous entendu
const mutliplierPar4 = nbr => nbr*4

console.log(mutliplierPar4(2))


// Exemple d'utilisation d'une fonction flechées

setTimeout(() => {
    direBonjour("William")
}, 2000)

// Parametre Rest

function direQuelquechoseAPleinDeGens(quelquechose, ...noms) {
    for (let nom of noms) {
        console.log(`${quelquechose} ${nom}`)
    }
}

direQuelquechoseAPleinDeGens("Au revoir", "William", "Jean", "Jacques")

// Objet

const salameche = {
    name: "Salamèche",
    niveau: 5,
    type: "Feu"
}

const dresseur = {
    name: "Sacha",
    pokemons: [
        {
            name: "Carapuce",
            niveau: 4,
            type: "Eau"
        },
        {
            name: "Pikachu",
            niveau: 6,
            type: "Electrique"
        },
        salameche
    ]
}

console.log(dresseur.pokemons[0].type)

