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
	player1 = new GameObject();
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	if(w)
	{
		console.log("Moving Up");
		player1.y += -2;
	}
	if(s)
	{
		console.log("Moving Down");
		player1.y += 2;
	}
	//Update the Screen
	player1.draw();
}

