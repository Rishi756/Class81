canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("color").value;
    x=e.clientX-canvas.offsetLeft;
    y=e.clientY-canvas.offsetTop;
    circle(x,y);
}
function circle(x,y)
{
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(x,y,40,0,2*Math.PI);
ctx.stroke();
}

function clearArea()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}