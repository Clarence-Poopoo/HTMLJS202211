function GameObject(x,y,w,h,color)
{	
		
	if(x == undefined)
	this.x = canvas.width/2;
else 
	this.x = x;
if(y == undefined)
	this.y = canvas.height/2;
else 
	this.y = y;

if(w == undefined)
	this.width = 100;
else 
	this.width = w;
if(h == undefined)
	this.height = 100;
else 
	this.height = h;

if(color == undefined)
	this.color = "#ff0000";
else 
	this.color = color;
	
		this.force = 2.5;
		this.ax = 1;
		this.ay = 1;
		this.vx = 0;
		this.vy = 0;


	this.drawRect = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.translate(this.x, this.y);
			context.fillRect((-this.width/2), (-this.height/2), this.width, this.height);
		context.restore();
		
	}	
	this.drawCircle = function()
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
	
	this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
	}
	
	
	this.left = function() 
	{
		return {x:this.x - this.width/2 , y:this.y}
	}
	this.right = function() 
	{
		return {x:this.x + this.width/2 , y:this.y}
	}
	
	this.top = function() 
	{
		return {x:this.x, y:this.y - this.height/2}
	}
	this.bottom = function() 
	{
		return {x:this.x , y:this.y + this.height/2}
	}
	
	this.hitTestObject = function(obj)
	{
		if(this.left().x <= obj.right().x && 
		   this.right().x >= obj.left().x &&
		   this.top().y <= obj.bottom().y &&
		   this.bottom().y >= obj.top().y)
		{
			return true
		}
		return false;
	}
		
	this.hitTestPoint = function(obj)
	{
		if(obj.x >= this.left().x && 
		   obj.x <= this.right().x &&
		   obj.y >= this.top().y &&  
		   obj.y <= this.bottom().y)
		{
			return true;
		}
		return false;
	}
	

}
