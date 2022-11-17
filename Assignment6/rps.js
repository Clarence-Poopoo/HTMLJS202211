var canvas = document.getElementById("c")
var ctx = canvas.getContext("2d")

//Array of words
var rps = [];
rps[0] = `Rock`
rps[1] = `Paper`
rps[2] = `Scissors`



//Array of Buttons
var btn = document.querySelectorAll(`a`)
//Changes the words in the buttons
btn[0].innerHTML = rps[0]
btn[1].innerHTML = rps[1]
btn[2].innerHTML = rps[2]

//Makes the buttons clickable.
//Once clicked they call the play function
btn[0].addEventListener(`click`, function (e) {
    play(0)
})
btn[1].addEventListener(`click`, function (e) {
    play(1)
})
btn[2].addEventListener(`click`, function (e) {
    play(2)
})

//Play function accepts an integer
//generates an integer 0-2
//Displays the player's choice and computer's choice
function play(pChoice) {
    var cChoice = Math.floor(Math.random() * 2.999999)

    ctx.font = "40px Franklin Gothic Medium"
    ctx.fillStyle = "Purple"
    ctx.fillText((rps[pChoice] + " | " + rps[cChoice]), 360, 100)
    ctx.fillText("Refresh To Try Again", 300, 500)
    switch (pChoice) {
        case 0:
            if (cChoice == 0) {
                //display a tie
                ctx.fillStyle = "Purple"
                ctx.textAlign = "center"
                ctx.font = "40px Franklin Gothic Medium"
                ctx.fillText("Tie", 500, 300)
                
            }
            else if (cChoice == 1) {
                //display a loss
                ctx.fillStyle = "Purple"
                ctx.textAlign = "center"
                ctx.font = "40px Franklin Gothic Medium"
                ctx.fillText("You Lost", 500, 300)
                
            }
            else {
                //display a win
                ctx.fillStyle = "Purple"
                ctx.textAlign = "center"
                ctx.font = "40px Franklin Gothic Medium"
                ctx.fillText("You Won", 500, 300)
            }
            break;

        case 1:
            if (cChoice == 0) {
                //display a tie
                ctx.fillStyle = "Purple"
                ctx.textAlign = "center"
                ctx.font = "40px Franklin Gothic Medium"
                ctx.fillText("You Won", 500, 300)
            }
            else if (cChoice == 1) {
                //display a loss
                ctx.fillStyle = "Purple"
                ctx.textAlign = "center"
                ctx.font = "40px Franklin Gothic Medium"
                ctx.fillText("Tie", 500, 300)
            }
            else {
                //display a win
                ctx.fillStyle = "Purple"
                ctx.textAlign = "center"
                ctx.font = "40px Franklin Gothic Medium"
                ctx.fillText("You Lost", 500, 300)
            }
            break;

        case 2:
            if (cChoice == 0) {
                //display a tie
                ctx.fillStyle = "Purple"
                ctx.textAlign = "center"
                ctx.font = "40px Franklin Gothic Medium"
                ctx.fillText("You Lost", 500, 300)
            }
            else if (cChoice == 1) {
                //display a loss
                ctx.fillStyle = "Purple"
                ctx.textAlign = "center"
                ctx.font = "40px Franklin Gothic Medium"
                ctx.fillText("You Win", 500, 300)
            }
            else {
                //display a win
                ctx.fillStyle = "Purple"
                ctx.textAlign = "center"
                ctx.font = "40px Franklin Gothic Medium"
                ctx.fillText("Tie", 500, 300)
                
            }
            break;
    }
}
