let message = document.getElementById("message")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const restartBtn = document.getElementById("restartBtn")
let player1Turn = true

rollBtn.addEventListener("click", function(){
    let randomResult = Math.ceil(Math.random() * 6)
    if(player1Turn){
        player1Dice.textContent = randomResult
        let x = parseInt(player1Scoreboard.textContent)
        let y = x + randomResult
        player1Scoreboard.textContent = y
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
    message.textContent = "Player 2 turn"


   
    }
        else {
            player2Dice.textContent = randomResult
            let x = parseInt(player2Scoreboard.textContent)
            let y = x + randomResult
            player2Scoreboard.textContent = y
            player2Dice.classList.remove("active")
            player1Dice.classList.add("active")
    message.textContent = "Player 1 turn"

}

if (parseInt((player1Scoreboard.textContent))>=20){
    message.textContent = "Player 1 Won"
    showResetbtn()
}
else if ((parseInt(player2Scoreboard.textContent))>=20){
    message.textContent = "Player 2 Won"
    showResetbtn()
}

    player1Turn = !player1Turn
})

function showResetbtn(){
    rollBtn.style.display="none"
resetBtn.style.display = "block"
restartBtn.style.display = "none"

}

resetBtn.addEventListener("click", function(){
    reset()


})

function reset(){
    message.textContent = "Player 1 Turn"
    player1Scoreboard.textContent = "0"
 player2Scoreboard.textContent = "0"
 player1Dice.textContent = "-"
 player2Dice.textContent = "-"
 rollBtn.style.display = "inline-block"
 resetBtn.style.display = "none" 
restartBtn.style.display = "inline-block"

 player1Turn = true
 player1Dice.classList.add("active")
 player2Dice.classList.remove("active")

}
restartBtn.addEventListener("click", function(){
    reset()
})