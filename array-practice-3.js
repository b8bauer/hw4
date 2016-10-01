var x = [];
var y = [];
var vx = [];
var vy = [];
var c = [];

function setup() {
  createCanvas(600, 600);

  // initialize circles
  for (var i = 0; i < 20; i++){
  x.push(random(width));
  y.push(50);
  vx.push(random(2));
  vy.push(random(1));
  c.push(random(360));
  }
}

function draw() {
  background(255);

  // draw circles
  for (var i = 0; i < 20; i++){
	  colorMode(HSB);
	  fill(c[i],100,100);
	  noStroke();
	  ellipse(x[i], y[i], 20, 20);
	
	 // move circles
	  x[i] += vx[i]; // equivalent to x1 = x1 + vx1;
	  y[i] += vy[i];
	
	  // gravity circles
	  vy[i] += 0.5;
	
	
	  // bounce circles
	  if (x[i] + 10 >= width) {
	    vx[i] = -abs(vx[i]);
	  }
	  if (x[i] - 10 <= 0) {
	    vx[i] = abs(vx[i]);
	  }
	  if (y[i] + 10 >= height) {
	    vy[i] = -abs(vy[i]);
	    vy[i] = vy[i] * 0.75; // dampen -- lose some speed on every bounce!
	  }
	  if (y[i] - 10 <= 0) {
	    vy[i] = abs(vy[i]);
	  }

}
}
