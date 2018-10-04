function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);



  for (var x = 10; x < width-10; x = x + 10) {
    colorMode(HSB)
    stroke(x, 100, 90);
    line(x, height/2, mouseX, mouseY);


  }
}
