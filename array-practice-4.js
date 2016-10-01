var x = [];
var y = [];
var vx = []; 
var vy = [];
var dx = [];
var dy = [];
var c = [];

function setup() {
 createCanvas(600, 600);
  
 for (var i = 0; i < 10; i++){
	  x.push(random(600));
	  y.push(random(600));
	  vx.push(random(2));
	  vy.push(random(2));
	  dx.push(0);
	  dy.push(0);
	  c.push(random(360));
 }
  
}

function draw() {
	background(255);

	for (var i = 0; i < 10; i++){
	 	colorMode(HSB,100,100);
	 	fill(c[i],100,100);
	 	noStroke();
	 	ellipse(x[i], y[i], 20, 20);
	
	  x[i] = x[i] + vx[i];
	  y[i] = y[i] + vy[i];
	  
	  if (i ==0){
	  	dx[0] = mouseX - x[0];
	  	dy[0] = mouseY - y[0];
	  }
	  
	  else{
	  dx[i] = x[i-1] - x[i];
	  dy[i] = y[i-1] - y[i];
	  }

	  vx[i] = dx[i]/10;
	  vy[i] = dy[i]/10;
	}
}
