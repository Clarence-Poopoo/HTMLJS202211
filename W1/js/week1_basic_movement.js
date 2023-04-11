//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var score = 0

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new Player();
	player.vx = 2
	player.vy = 2
	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the Player
	player.move();
	
	//Collision
	score = document.getElementById("score").innerHTML = score.toString();;

	if(player.x < player.width/2)
	{
		player.x = player.width/2
		player.vx = -(player.vx - 2)
		score ++
		
	}

	if(player.x > canvas.width - player.width/2)
	{
		player.x = canvas.width - player.width/2
		player.vx = -(player.vx + 2)
		score ++
	}

	if(player.y < player.width/2)
	{
		player.y = player.width/2
		player.vy = -(player.vy - 2)
		score ++
	}

	if(player.y > canvas.height - player.width/2)
	{
		player.y = canvas.height - player.width/2
		player.vy = -(player.vy + 2)
		score ++
	}

	//Update the Screen
	player.draw();
}
