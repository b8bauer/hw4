var length = [];

function setup() {
	
	createCanvas (500,500);
	background(0);
	
	for (var i = 0; i < height; i++){	
		length.push(random(50,width));
	}
	
}

function draw() {
	var x = mouseX;
	var y = mouseY;
	
	for (var i = 0; i < height; i = i +2){
		stroke(255);
		line (0, i, length[i], i);
		ellipse(x,y,30,30);

	}
	
	
}
