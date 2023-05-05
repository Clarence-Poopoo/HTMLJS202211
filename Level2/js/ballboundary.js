var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var ball;
var player1;
var p1Wins = 0;
var p2Wins = 0;
	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player1 = new GameObject(5, canvas.height/2, 10, 150, "black");
	player2 = new GameObject(1019, canvas.height/2, 10, 150, "red");
	ball = new GameObject(canvas.width/2, canvas.height/2, 25, 25, "purple");
	ball.vx = -10
	ball.vy = 0
	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	context.fillText("Player 1 | Player 2", 425,15) 
	context.fillText(p1Wins, 460, 40)
	context.fillText(p2Wins, 540, 40)
	context.font = "20px Franklin Gothic Medium"
	

	//Move the Player
	ball.move();
	
	//collision 
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
		if(ball.y > player1.y )  
		{
			ball.vx = -(ball.vx)
			ball.vy = (ball.vy + 2)
		}
		
	}

	if(player2.hitTestObject(ball))
	{
		if(ball.y == player2.y)
		{
			ball.vx = -(ball.vx)
		}
		if(ball.y < player2.y)
		{
			ball.vx = -(ball.vx)
			ball.vy = (ball.vy - 2)
		}
		if(ball.y > player2.y )  
		{
			ball.vx = -(ball.vx)
			ball.vy = (ball.vy + 2)
		}
		
	}

	//losing
	if(ball.x < ball.width/2)
	{
		ball.x = (canvas.width/2)
		ball.y = (canvas.height/2)
		ball.vy = 0;
		p1Wins ++;
		console.log(p1Wins)
	}

	if(ball.x > canvas.width - ball.width/2)
	{
		ball.x = (canvas.width/2)
		ball.y = (canvas.height/2)
		ball.vy = 0;
		p2Wins ++;
		console.log(p2Wins)
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

	
	//Update the Screen
	ball.drawCircle();
	player1.drawRect();
	player2.drawRect();
	
}
