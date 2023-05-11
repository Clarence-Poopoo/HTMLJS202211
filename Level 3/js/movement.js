var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var ball;
var paddle;
var score = 0;
var gravity = 1; 
var friction = .95;
var img = document.getElementById("ric");


	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	paddle = new GameObject(canvas.width/2, canvas.height - 50, 250, 40, "cyan");
	ball = new GameObject(canvas.width/2, canvas.height/2, 80, 80, "magenta");
	ball.vx = 5
	ball.vy = 35
	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the Player
	ball.move();
	
	//Draw line from ball to paddle
	context.beginPath()
	context.lineTo(ball.x, ball.y)
	context.lineTo(paddle.x, paddle.y)
	context.stroke()
	
	ball.vy += gravity;
	ball.vy *= friction;
	//collision 
	if(paddle.hitTestObject(ball))
	{
		score ++;
		ball.y = paddle.y - ball.height;
		ball.vy = -35;
		if(ball.x < paddle.x - paddle.width/6)
		{
			ball.vx = -(ball.force)
		}
		if(ball.x < paddle.x - paddle.width/3)
		{
			ball.vx = -(ball.force * 5)
		} 
		if(ball.x > paddle.x + paddle.width/6)
		{
			ball.vx = ball.force
		}
		 if(ball.x > paddle.x + paddle.width/3)
		{
			ball.vx = ball.force * 5
		}
	}

	//boundary
	if(ball.y < ball.width/2)
	{
		ball.y = ball.width/2
		ball.vy = -(ball.vy)
	}

	if(ball.y > canvas.height - ball.width/2)
	{
		score = 0
		ball.y = canvas.height - ball.width/2
		ball.vy = -ball.vy * .67
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
		paddle.vx += paddle.ax * -paddle.force;
		
	}
	if(d)
	{
		paddle.vx += paddle.ax * paddle.force;
	}
	paddle.x += paddle.vx;
	paddle.vx *= friction;

	if(paddle.x < paddle.width/2)
	{
		paddle.x = paddle.width/2
	}

	if(paddle.x > canvas.width - paddle.width/2)
	{
		paddle.x = canvas.width - paddle.width/2
	}

	//Score HUD
	context.fillText("Score: ", 80,25,) 
	context.fillStyle = ("dark gray")
	context.fillText(score, 140, 25)
	context.font = "16px Arial black"
	
	//Update the Screen
	paddle.drawRect();
	ball.drawCircle();
}
