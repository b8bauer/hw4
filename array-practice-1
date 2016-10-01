var x = [];
var y = [];
var vx = [];
var vy = [];
var c = [];
var dotSize = [];

var numCircles = 1000;

function setup() {
  createCanvas(600, 600);

  colorMode(HSB);

  for (var i = 0; i < numCircles; i = i + 1) {
    x.push(random(width));
    y.push(random(height));
    vx.push(random(-4, 4));
    vy.push(random(-4, 4));
    c.push(color(random(360), 100, 100));
    dotSize.push(random(10,50));
  }
}

function draw() {
  background(255);
  for (var i = 0; i < numCircles; i = i + 1) {
    noStroke();
    fill(c[i]);
    ellipse(x[i], y[i], dotSize[i], dotSize[i]);

    x[i] = x[i] + vx[i];
    y[i] = y[i] + vy[i];

    // x+10: right edge of the circle
    if (x[i] + 10 >= width) {
      vx[i] = -abs(vx[i]);
    }
    // x-10: left edge of the circle
    if (x[i] - 10 <= 0) {
      vx[i] = abs(vx[i]);
    }
    // y+10: bottom edge of the circle
    if (y[i] + 10 >= height) {
      vy[i] = -abs(vy[i]);
    }
    // y-10: top edge of the circle
    if (y[i] - 10 <= 0) {
      vy[i] = abs(vy[i]);
    }
  }
}
