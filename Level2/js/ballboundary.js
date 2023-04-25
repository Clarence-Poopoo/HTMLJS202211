var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var ball;
var player1;
	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player1 = new Player();
	ball = new GameObject();
	ball.vx = -10
	ball.vy = 0
	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the Player
	ball.move();
	
	if(player1.hitTestObject(ball))
	{
		if(ball.y == player1.y)
		{
			ball.vx = -(ball.vx)
		}
		if(ball.y < player1.y)
		{
			ball.vx = -(ball.vx)
			ball.vy = (ball.vy - 2)
		}
		if(ball.y > player1.y)
		{
			ball.vx = -(ball.vx)
			ball.vy = (ball.vy + 2)
		}
		
	}

	//losing
	if(ball.x < ball.width/2)
	{
		ball.x = (canvas.height/2)
	}

	if(ball.x > canvas.width - ball.width/2)
	{
		ball.x = canvas.width - ball.width/2
		ball.vx = -(ball.vx )
	}

	if(ball.y < ball.width/2)
	{
		ball.y = ball.width/2
		ball.vy = -(ball.vy)
	}

	if(ball.y > canvas.height - ball.width/2)
	{
		ball.y = canvas.height - ball.width/2
		ball.vy = -(ball.vy)
	}

	

	//Update the Screen
	ball.draw();
	player1.draw();
}
