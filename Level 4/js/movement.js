var canvas;
var context;
var timer;
var interval;
var player;


canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
canvas.addEventListener("mousemove", track);
canvas.addEventListener("click", bullet);


player = new GameObject(canvas.width / 2, canvas.height / 2, 40, 40, "red");
enemy = new GameObject(canvas.width - 50, canvas.height / 2, 40, 40, "green");
health = new GameObject(180, 50, 300, 10, "green");
backHealth = new GameObject(180, 50, 300, 10, "black");
var bullet = new GameObject(1000, 1000,);

var eHealth = 100;

var mouse = { x: 0, y: 0 };
var angle = 0;

function track(e) {
	var rect = canvas.getBoundingClientRect();
	mouse.x = e.clientX - rect.left;
	mouse.y = e.clientY - rect.top;

}
function bullet() {
	bullet = new GameObject(player.x, player.y, 20, 20, "red");
}
var friction = .80;
var canDash = true;
var dashTimer;
var delay = 100;


interval = 1000 / 60;
timer = setInterval(animate, interval);

function dashStop() {
	canDash = true;
}


function animate() {

	context.clearRect(0, 0, canvas.width, canvas.height);

	if (w) {

		player.vy += player.ay * -player.force;
	}
	if (s) {
		player.vy += player.ay * player.force;
	}
	if (a) {
		player.vx += player.ax * -player.force;
	}
	if (d) {
		player.vx += player.ax * player.force;
	}

	if (player.hitTestObject(enemy)) {
		health.x -= .5;
		health.width--;
		if (health.width <= 0) {
			health.width = 0;
		}
	}
	//var dx = player.x - enemy.x;
	//var dy = player.y - enemy.y;

	//enemy.x += dx/100;
	//enemy.y += dy/100;


	if (canDash) {
		if (shift) {
			player.force = 50;
			clearTimeout(dashStop);
			dashTimer = setTimeout(dashStop, 2000);
			canDash = false;
		}
	}

	else {
		timer = 0;
		player.force = 2
	}

	if (health.width == 0) {
		context.fillStyle = "red"
		context.font = "25px Roboto"
		context.textAlign = 'center'
		context.fillText("You Ran Out Of Health", canvas.width / 2, canvas.height / 2)

		if (w || s || a || d) {
			player.vy = 0
			player.vx = 0
		}
	}

	if (enemy.hitTestPoint(player.bottom())) {
		player.vy = -(player.vy * 5)
	}
	if (enemy.hitTestPoint(player.left())) {
		player.vx = -(player.vx * 5)
	}
	if (enemy.hitTestPoint(player.right())) {
		player.vx = -(player.vx * 5)
	}
	if (enemy.hitTestPoint(player.top())) {
		player.vy = -(player.vy * 5)
	}


	if (enemy.hitTestPoint(bullet)) {
		eHealth -= 10;
		console.log(eHealth)
		{
			if(eHealth <=0)
			{
				enemy.x = 100000
			}

		}
	}

	bullet.move();
	if(bullet.x == player.x && bullet.y == player.y)
	{
		bullet.vx = Math.cos(player.angle * Math.PI/180) * 20;
		bullet.vy = Math.sin(player.angle * Math.PI/180) * 20;
	}

	if (player.x < player.width / 2) {
		player.x = player.width / 2
	}

	if (player.x > canvas.width - player.width / 2) {
		player.x = canvas.width - player.width / 2
	}
	if (player.y < player.height / 2) {
		player.y = player.height / 2
	}

	if (player.y > canvas.height - player.height / 2) {
		player.y = canvas.height - player.height / 2
	}

	var dx = mouse.x - player.x;
	var dy = mouse.y - player.y;
	var radians = Math.atan2(dy, dx);
	player.angle = radians * 180 / Math.PI;

	
	player.vx *= friction;
	player.vy *= friction;

	player.x += player.vx;
	player.y += player.vy;

	bullet.drawCircle();
	enemy.drawRect();
	player.drawRect();
	backHealth.drawRect()
	health.drawRect();

}
