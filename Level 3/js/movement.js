var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var ball;
var paddle;
var score = 0;
var gravity = 1; 
var img = document.getElementById("ric");

//paddle.force = 2;
	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	paddle = new GameObject(canvas.width/2, canvas.height - 50, 250, 40, "cyan");
	ball = new GameObject(canvas.width/2, canvas.height/2, 80, 80, "magenta");
	ball.vx = 5
	ball.vy = 0
	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Score HUD
	context.fillText("Score: ", 80,25,) 
	context.fillStyle = ("dark gray")
	context.fillText(score, 140, 25)
	context.font = "16px Arial black"
	
	//Move the Player
	ball.move();
	
	//Draw line from ball to paddle
	context.beginPath()
	context.lineTo(ball.x, ball.y)
	context.lineTo(paddle.x, paddle.y)
	context.stroke()
	
	ball.vy += gravity;
	//collision 
	if(paddle.hitTestObject(ball))
	{
		score ++;
		if(ball.x < paddle.x - paddle.width/6)
		{
			ball.vy = -5
			ball.vx = -(ball.vx)
		}
		if(ball.x < paddle.x - paddle.width/3)
		{
			ball.vy = -5
			ball.vx = -(ball.vx * 5)
		} 
		if(ball.x > paddle.x + paddle.width/6)
		{
			ball.vy = -5
			ball.vx = ball.vx
		}
		 if(ball.x > paddle.x + paddle.width/3)
		{
			ball.vy = -5
			ball.vx = ball.vx * 5
		}
		


		
	}

	//Losing
	if(ball.y > canvas.height - ball.width/2)
	{
		score = 0
		ball.vy = ball.vy * .67
	}

	//boundary
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
	if(ball.x < ball.width/2)
	{
		ball.x = ball.width/2
		ball.vx = -(ball.vx)
		
	}

	if(ball.x > canvas.width - ball.width/2)
	{
		ball.x = canvas.width - ball.width/2
		ball.vx = -(ball.vx)
	}

	//Paddle Movement
	
    if(a)
	{
		console.log("Moving left");
		paddle.x += -15
		
	}
	if(d)
	{
		paddle.x += 15
		console.log("Moving right");
	}

	if(paddle.x < paddle.width/2)
	{
		paddle.x = paddle.width/2
	}

	if(paddle.x > canvas.width - paddle.width/2)
	{
		paddle.x = canvas.width - paddle.width/2
	}
	
	//Update the Screen
	paddle.drawRect();
	ball.drawCircle();
}
