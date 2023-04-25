
function GameObject()
{
	//player's location
	this.x = canvas.width/2;
	this.y = canvas.height/2;
	
	//player's dimensions
	this.width = 25;
	this.height = 25;
	
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
			context.arc(0,0,this.width/2,0,360*Math.PI/180,true)
			context.closePath();
		context.fill();
		context.restore();
		
	}	
	
	//This changes the player's position

    this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
	}
	
	this.left = function() 
	{
		return this.x - this.width/2;
	}
	this.right = function() 
	{
		return this.x + this.width/2;
	}
	
	this.top = function() 
	{
		return this.y - this.height/2;
	}
	this.bottom = function() 
	{
		return this.y + this.height/2;
	}
	
	this.hitTestObject = function(obj)
	{
		if(this.left() < obj.right() && 
		   this.right() > obj.left() &&
		   this.top() < obj.bottom() &&
		   this.bottom() > obj.top())
		{
			return true
		}
		return false;
	}

    
}
