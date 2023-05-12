var canvas;
var context;
var timer;
var interval;
var player;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:150});

	var fX = .95;
	var fY = .95;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

	if(w)
	{
		
		player.vy += -player.ay * player.force;
	}
	if(s)
	{
		player.vy += player.ay * player.force;
	}
	if(a)
	{
		player.vx += -player.ax * player.force;
	}
	if(d)
	{
		player.vx += player.ax * player.force;
	}

	if(player.x < player.width/2)
	{
		player.x = player.width/2
	}

	if(player.x > canvas.width - player.width/2)
	{
		player.x = canvas.width - player.width/2
	}
	if(player.y < player.height/2)
	{
		player.y = player.height/2
	}

	if(player.y > canvas.height - player.height/2)
	{
		player.y = canvas.height - player.height/2
	}

	player.vx *= fX;
	player.vy *= fY;
	
	player.x += player.vx;
	player.y += player.vy;

	player.drawRect();
}
