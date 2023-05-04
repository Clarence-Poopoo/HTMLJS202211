var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player1;
	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	ctx = canvas.getContext("2d");	

	//Instantiate the Player
	player1 = new Player1();
	player2 = new Player2();
	timer = setInterval(animate, interval);

function animate()
{

	ctx.fillText("You Win!", canvas.width/2,10) 

	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
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
	player1.draw();
	player2.draw();
	ball.draw();
	ctx.draw
}

