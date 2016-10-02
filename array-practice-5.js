var x = [];
var y = [];
var vx = []; 
var vy = [];
var startX = [];
var startY = [];
var endX = [];
var endY = [];
var numOfBalls = 0;
var mouseIsPressed = false;
var mouseRelease = false;

function mousePressed(){
	mouseIsPressed = true;
	startX.push(mouseX);
	startY.push(mouseY);
}

function mouseReleased(){
	mouseIsPressed = false;
	mouseRelease = true;
	endX.push(mouseX);
	endY.push(mouseY);
}

function setup() {
 createCanvas(600, 600);
 background(200);
}

function draw() {
	background(200);
	
	for (var i = 0; i < 20; i++){

		if (mouseIsPressed == true){
			line (startX[i], startY[i], mouseX, mouseY);
			x.push(startX);
			y.push(startY);
		}
			
		if (mouseRelease == true){
			vx.push(endX-startX);
			vy.push(endY-startY);
			ellipse (x[numOfBalls], y[numOfBalls], 20, 20);
			numOfBalls++;
		}
				
		x[numOfBalls] = x[numOfBalls] + vx[numOfBalls];
		y[numOfBalls] = y[numOfBalls] + vy[numOfBalls];
	}
}
