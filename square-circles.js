function setup() {
  createCanvas(400, 400);
}

var x = []; // new empty array
var y = []; // new empty array

function draw() {
  background(255);
  noFill();

  x.push(mouseX); // equivalent to append(x, mouseX)
  y.push(mouseY); // equivalent to append(y, mouseY)

  rectMode(CENTER);
  for (var i = 0; i < x.length; i = i + 5) {
    fill(100,200,230,40);
    noStroke();
    rect(x[i], y[i], 1 + (x.length - i),1+(y.length-i));
  }

  x = x.slice(-50); // keep the last 50 x values
  y = y.slice(-50); // keep the last 50 y values
}
