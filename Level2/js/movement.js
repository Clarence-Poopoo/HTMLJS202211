var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player1;
	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");		

	//Instantiate the Player
	player1 = new GameObject(5, canvas.height/2, 10, 150, "black");
	player2 = new GameObject(1019, canvas.height/2, 10, 150, "red");
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	context.fillText("Player 1 | Player 2", 425,15) 
	context.fillText(p1Wins, 460, 40)
	context.fillText(p2Wins, 540, 40)
	context.font = "20px Franklin Gothic Medium"

	if(w)
	{
		console.log("Moving Up");
		player1.y += -5;
	}
	if(s)
	{
		console.log("Moving Down");
		player1.y += 5;
	}
	if(player1.y < player1.height/2)
	{
		player1.y = player1.height/2
	}

	if(player1.y > canvas.height - player1.height/2)
	{
		player1.y = canvas.height - player1.height/2
	}

	if(player2.y < player2.height/2)
	{
		player2.y = player2.height/2
	}

	if(player2.y > canvas.height - player2.height/2)
	{
		player2.y = canvas.height - player2.height/2
	}

	if(up)
	{
		console.log("Moving Up 2");
		player2.y += -5;
	}
	if(down)
	{
		console.log("Moving Down 2");
		player2.y += 5;
	}
	if(player1.y < player1.height/2)
	{
		player1.y = player1.height/2
	}

	if(player1.y > canvas.height - player1.height/2)
	{
		player1.y = canvas.height - player1.height/2
	}
	

	//Update the Screen
	player1.drawRect();
	player2.drawRect();
	ball.drawCircle();
}

