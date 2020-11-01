const pikachu = {
    name: "pikachu",
    health: 100,
    damage: 15,
    image: "http://sify4321.000webhostapp.com/pikachu.png"
}

const charmander = {
    name: "charmander",
    health: 100,
    damage: 15,
    image: "http://sify4321.000webhostapp.com/charmander.png"
}

const pikaButton = document.querySelector('#character-btn-kick')
const charmanButton = document.querySelector('#enemy-btn-kick')
const restartButton = document.querySelector('#restart-btn')
const pikachuHealth = document.querySelector('#health-character')
const pikachuHpBar = document.querySelector('#progressbar-character')
const charmanderHealth = document.querySelector('#health-enemy')
const charmanderHpBar = document.querySelector('#progressbar-enemy')
const pikachuName = document.querySelector('#name-character')
const charmanderName = document.querySelector('#name-enemy')
const winnerImg = document.querySelector('#winner-img')
const opacitySet = document.querySelector('.final')
const characterTurn = document.querySelector('#turn')

const random = num => {
    return Math.ceil(Math.random() * num)
}

const showTurn = () => {
    if (charmanButton.disabled == false) {
        characterTurn.innerHTML = "Charmander's turn"
    }

    else if (pikaButton.disabled == false) {
        characterTurn.innerHTML = "Pikachu's turn"
    }
}

const dealDamage = (character1, character2, hp, hpBar) => {
    character1.health -= random(character2.damage)
    hp.innerHTML = character1.health + " / 100"
    hpBar.style.width = character1.health + '%'
}

const checkHealth = (character1, character2, hp, hpBar) => {
    if (character1.health <= 0) {
        characterTurn.innerHTML = ""
        hp.innerHTML = 0 + " / 100"
        hpBar.style.width = 0 + '%'
        pikaButton.disabled = true
        charmanButton.disabled = true
        opacitySet.style.opacity = 1
        winnerImg.src = character2.image
    }
}

const restartGame = (character, hp, hpBar, button) => {
    character.health = 100
    hp.innerHTML = 100 + " / 100"
    hpBar.style.width = 100 + '%'
    button.disabled = false
    opacitySet.style.opacity = 0
}

pikaButton.addEventListener('click', () => {
    dealDamage(charmander, pikachu, charmanderHealth, charmanderHpBar)
    pikaButton.disabled = true
    charmanButton.disabled = false
    checkHealth(charmander, pikachu, charmanderHealth, charmanderHpBar)
    showTurn()
});

charmanButton.addEventListener('click', () => {
    dealDamage(pikachu, charmander, pikachuHealth, pikachuHpBar)
    pikaButton.disabled = false
    charmanButton.disabled = true
    checkHealth(pikachu, charmander, pikachuHealth, pikachuHpBar)
    showTurn()
});

restartButton.addEventListener('click', () => {
    restartGame(pikachu, pikachuHealth, pikachuHpBar, pikaButton)
    restartGame(charmander, charmanderHealth, charmanderHpBar, charmanButton)
    characterTurn.innerHTML = "Choose who will strike first"
});
