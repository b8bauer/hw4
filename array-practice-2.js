var length = [];
var x; 
var y;
var vx; 
var vy;

function setup() {
	createCanvas (500,500);
	
	for (var i = 0; i < height; i++){	
		length.push(random(50,width));
	}
	
	x = width/2;
  	y = height/2;
  	vx = 0;
  	vy = 0;
}

function draw() {
	background(0);
	for (var i = 0; i < height; i = i +2){
		stroke(255);
		line (0, i, length[i], i);
	}
	
	noStroke();
	ellipse(x-10, y-10, 30, 30);

	x = x + vx;
	y = y + vy;
	
	var dx = mouseX - x;
	var dy = mouseY - y;
	
	vx = dx/10;
	vy = dy/10;
	
}
