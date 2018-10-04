function setup() {
  createCanvas(400, 400);
	colorMode(HSB, width, height, 100);
}

function draw() {

  for (var x=0; x< width; x+= 10 ){
    for (var y=0; y< height; y+= 10) {
	    stroke(x, y, 100);
	    point(x, y);
}
  }
}
