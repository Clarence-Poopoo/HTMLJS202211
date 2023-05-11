var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var ball;
var player1;
var p1Wins = 0;
var p2Wins = 0;
var img = document.getElementById("ric");

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player1 = new GameObject(5, canvas.height/2, 10, 150, "black");
	player2 = new GameObject(1019, canvas.height/2, 10, 150, "red");
	ball = new GameObject(canvas.width/2, canvas.height/2, 25, 25,);
	ball.vx = -10
	ball.vy = 0
	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Score HUD
	context.fillText("Player 1 | Player 2", 425,15) 
	context.fillText(p1Wins, 460, 40)
	context.fillText(p2Wins, 540, 40)
	context.font = "20px Franklin Gothic Medium"
	

	//Net
	context.save();
	context.strokeStyle = "yellow";
	context.beginPath();
	context.moveTo(canvas.width/2, 0);
	context.lineTo(canvas.width/2, canvas.height);
	context.closePath();
	context.lineWidth = 5; 
	context.stroke();
	context.restore();
	
	//Move the Player
	ball.move();
	
	//collision 
	if(player1.hitTestObject(ball))
	{
			
		if(ball.y < player1.y - player1.height/6)
		{
			ball.vx = -(ball.vx)
			ball.vy = -2
		}else if(ball.y > player1.y + player2.height/6)  
		{
			ball.vx = -(ball.vx)
			ball.vy = 2
		}else
		{
			ball.vx = -(ball.vx)
			ball.vy = 0
		}
		
		
	}

	if(player2.hitTestObject(ball))
	{
		if(ball.y < player2.y - player2.height/6)
		{
			ball.vx = -(ball.vx)
			ball.vy = -2
		}else if(ball.y > player2.y + player2.height/6)  
		{
			ball.vx = -(ball.vx)
			ball.vy = 2
		}else
		{
			ball.vx = -(ball.vx)
			ball.vy = 0
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
	player1.drawRect();
	player2.drawRect();
	context.drawImage(img, (ball.x - 20), (ball.y - 25), 40, 40)
}
