function setup() {
  createCanvas(400, 400);

  for (var i = 0; i< 20; i = i+1) {
    append (x,210);
   append (y,random(height));
    append (r, random(5));
  }

}

  var x = [];
  var y = [];
  var r = [];


function draw() {

  background(0);
  noStroke();

  for (var i = 0; i< x.length; i = i+1) {


  // draw smokestack
  fill(255);
  rect(195, height, 30, -100);

  // darker as it gets closer to 0
  push();
  fill(y[i]);
  translate(x[i], y[i]);
  rotate(r[i]);
  rect(-10, -10, 20, 20);
  pop();

  // up 3 pixels
  y[i] -= 3;

  // rotate 0.05 radians ~= 2.8 degrees per frame
  r[i] += 0.05

  // if reach past the top a bunch
  if (y[i] < -150) {
    y[i] = 290;
  }
}
}
