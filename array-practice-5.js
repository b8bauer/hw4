var x = [];
var y = [];
var vx = []; 
var vy = [];
var startX;
var startY;
var numBalls = 0;
var mouseIsPressed;

function setup() {
	createCanvas(600, 600);
	background(200);
}

function draw() {
	background (200);
	
	if (mouseIsPressed === true){
		stroke(0);
		line (startX, startY, mouseX, mouseY);
		vx.push(dist(mouseX, mouseY, startX, startY));
		vy.push(dist(mouseX, mouseY, startX, startY));
	}
	
	for (var i = 0; i <= numBalls; i++){
		noStroke();
		ellipse (x[i], y[i], 20, 20);
			
		x[i] = x[i] + vx[i];
		y[i] = y[i] + vy[i]; 
	}
}

function mousePressed(){
	mouseIsPressed = true;
	startX = mouseX;
	startY = mouseY;
}

function mouseReleased(){
	mouseIsPressed = false;
	x.push(mouseX);
	y.push(mouseY);
	numBalls = numBalls + 1;
}
