function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);



  for (var x = 10; x < width-10; x = x + 10) {
    colorMode(HSB)
    //ellipse(200,200,60);
    stroke(x, 100, 90);
    line(200, 230, mouseX, mouseY);
    line(230, 200, mouseX, mouseY);
    line(170, 200, mouseX, mouseY);
    line(200, 170, mouseX, mouseY);
    line(175, 180, mouseX, mouseY);
    line(180, 175, mouseX, mouseY);
    line(215, 175, mouseX, mouseY);
    line(175, 215, mouseX, mouseY);
    line(225, 215, mouseX, mouseY);
    line(215, 225, mouseX, mouseY);


  }
}
