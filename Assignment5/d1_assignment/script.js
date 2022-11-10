var canvas = document.getElementById("canvas")

var ctx = canvas.getContext('2d')

ctx.fillStyle = "yellow";
ctx.strokeStyle = "black";
ctx.lineWidth = "5";

ctx.fillRect(85,301,100,100)
ctx.strokeRect(85,301,100,100)

ctx.strokeStyle = "rgb(255,0,0)"
ctx.lineWidth = "5"
ctx.beginPath()
ctx.lineTo(85,683)
ctx.lineTo(279, 549)
ctx.stroke()

ctx.fillStyle = "#fff00"
ctx.strokeStyle = "red"
ctx.lineWidth = "5"
ctx.beginPath()
ctx.arc(385,440, 65, 0, 2*Math.PI)
ctx.closePath()
ctx.fill()
ctx.stroke()

ctx.fillStyle = "#ff00ff"
ctx.strokeStyle = "#00ffff"
ctx.lineWidth = "5"
ctx.beginPath()
ctx.lineTo(555, 309)
ctx.lineTo(669, 285)
ctx.lineTo(724, 380)
ctx.lineTo(651, 464)
ctx.lineTo(548, 420)
ctx.closePath()
ctx.fill()
ctx.stroke()


ctx.fillStyle = "#ffff00"
ctx.strokeStyle = "rgb(32,32,32)"
ctx.lineWidth = "5"
ctx.beginPath()
ctx.lineTo(635,496)
ctx.lineTo(668,555)
ctx.lineTo(733,567)
ctx.lineTo(688,615)
ctx.lineTo(696,682)
ctx.lineTo(635,653)
ctx.lineTo(575,682)
ctx.lineTo(582,616)
ctx.lineTo(538,567)
ctx.lineTo(603,555)
ctx.closePath()
ctx.fill()
ctx.stroke()