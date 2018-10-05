function setup() {
  createCanvas(400, 400);
	colorMode(HSB, width, height, 100);
}

function draw() {

  for (var x=0; x< width; x+= 40 ){
    for (var y=0; y< height; y+= 40) {
	    stroke(x, y, 100);
	    point(random(x,x+40), random(y,y+40));
}
  }
}
