//canvas drawing stuff
var canvas = document.getElementById("c")
var ctx = canvas.getContext("2d")

//drawing the font
ctx.font = "40px Arial"
ctx.fillStyle = "blue"
ctx.strokerStyle = "green"
ctx.fillText("Welcome to the RPS Game!", 125,280)
ctx.strokeText("Welcome to the RPS Game!", 127,280)

//alert("Select rock, paper, or scissors!")
var rps = ["rock", "paper", "scissors"]
//console.log(rps[0])

document.getElementById("rock").addEventListener('click', function (e) {
    alert("You picked " + rps[0])
    playGame(rps[0])
})
document.getElementById("paper").addEventListener('click', function (e) {
    alert("You picked " + rps[1])
    playGame(rps[1])
})
document.getElementById("scissors").addEventListener('click', function (e) {
    alert("You picked " + rps[2])
    playGame(rps[2])
})

function playGame(playerChoice) {
    var cpuChoice = Math.floor(Math.random() * 2.99)
    console.log(cpuChoice, playerChoice)

    switch (playerChoice) {
        case "rock":
            if (cpuChoice == 0) {
                //rock
                alert("CPU Chose Rock. It's a tie!")
            }
            else if (cpuChoice == 1) {
                //paper
                alert("CPU Chose Paper. You lose! :(")
            }
            else {
                alert("CPU Chose Scissors. You win! :)")
            }

            break

        case "paper":
            if (cpuChoice == 0) {
                //rock
                alert("CPU Chose Rock. You win! :)")
            }
            else if (cpuChoice == 1) {
                //paper
                alert("CPU Chose Paper. Its a tie!")
            }
            else {
                alert("CPU Chose Scissors. You lose! :(")
            }

            break
        case "scissors":
            if (cpuChoice == 0) {
                //rock
                alert("CPU Chose Rock. You lose! :(")
            }
            else if (cpuChoice == 1) {
                //paper
                alert("CPU Chose Paper. You win! :)")
            }
            else {
                alert("CPU Chose Scissors. Its a tie!")
            }

            break
    }
}