function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  for (var y = 0; y<360; y=y+10)
   for (var x = 10; x < width-10; x = x + 10) {
    line(200+100*cos(y*3.14/180), 200+100*sin(y*3.14/180), mouseX, mouseY);
  }
}
