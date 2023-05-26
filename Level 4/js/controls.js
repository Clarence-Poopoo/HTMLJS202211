var w = false;
var a = false;
var s = false;
var d = false;
var shift = false;
var t = false;
document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

function press(e)
{
	
	if(e.keyCode == 87)
	{
		w = true;
	}
	if(e.keyCode == 65)
	{
		a = true;
	}
	if(e.keyCode == 83)
	{
		s = true;
	}
	if(e.keyCode == 68)
	{
		d = true;
	}
	if(e.keyCode == 16)
	{
		shift = true;
	}
	if(e.keyCode == 84)
	{
		t = true;
	}
}

function release(e)
{
	
	if(e.keyCode == 87)
	{
		w = false;
	}
	if(e.keyCode == 65)
	{
		a = false;
	}
	if(e.keyCode == 83)
	{
		s = false;
	}
	if(e.keyCode == 68)
	{
		d = false;
	}
	if(e.keyCode == 16)
	{
		shift = false;
	}
	if(e.keyCode == 84)
	{
		t = false;
	}
}
