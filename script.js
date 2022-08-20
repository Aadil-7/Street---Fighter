const p1health = document.getElementById(`p1health`)
const p2health = document.getElementById(`p2health`)
const p1attack = document.getElementById(`p1attack`)
const p2attack = document.getElementById(`p2attack`)
const p1heal = document.getElementById(`p1heal`)
const p2heal = document.getElementById(`p2heal`)
const player1name = document.getElementById(`player1name`)
const player2name = document.getElementById(`player2name`)
const message = document.getElementById(`message`)
const reset = document.getElementById(`reset`)
class player {
    constructor(name, health, attackdamage) {
        this.name = name,
            this.health = health,
            this.attackdamage = attackdamage
    }
    attack(p) {
        p.health -= Math.floor(Math.random() * this.attackdamage)
    }
    heal() {
        if (this.health >= 100) {
            return
        }
        this.health += Math.floor(Math.random() * 5)
    }
}

let player1 = new player("md ali", 100, 10);
let player2 = new player("tyson", 100, 10);

class game {
    constructor(p1, p2) {
        this.player1 = p1,
            this.player2 = p2
    }
}

let gamestate = new game(player1, player2);

const resetGame = (p1, p2) =>{
    p1.health = 100;
    p2.health = 100;
    message.innerText = ``
    p2attack.disabled = false
    p1heal.disabled = false
    p1attack.disabled = false
    p2heal.disabled = false
}

const updateGame = (player1, player2) => {
    if (player1.health <= 0) {
        message.innerText = `${player2.name} won this game!`
        p2attack.disabled = true
        p1heal.disabled = true
        return
    } else if (player2.health <= 0) {
        message.innerText = `${player1.name} won this game!`
        p1attack.disabled = true
        p2heal.disabled = true
        return
    }
    player1name.innerText = player1.name
    player2name.innerText = player2.name
    p1health.innerText = player1.health
    p2health.innerText = player2.health
}

const punch = (x, y) => {
    x.attack(y)
    updateGame(player1, player2)
}
p1attack.onclick = () => { punch(player1, player2) }
p2attack.onclick = () => { punch(player2, player1) }
p1heal.onclick = () => { player1.heal(), updateGame(player1, player2) }
p2heal.onclick = () => { player2.heal(), updateGame(player1, player2) }
reset.onclick = () => {resetGame(player1, player2),updateGame(player1, player2)}