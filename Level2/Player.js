// JavaScript Document
function GameObject()
{

	
	//player's location
	this.x = 5;
	this.y = canvas.height/2;
	
	//player's dimensions
	this.width = 10;
	this.height = 125;
	
	//player's velocity or speed on each axis
	this.vx = 0;
	this.vy = 0;
	
	//player's color
	this.color = "purple";
	
	//This draws the player to the screen
	this.draw = function()
	{
		context.save();
		context.beginPath();
			context.fillStyle = this.color;
			context.translate(this.x, this.y);
			context.fillRect((-this.width/2), (-this.height/2), this.width, this.height);
			context.closePath();
		context.fill();
		context.restore();
		
	}	
}