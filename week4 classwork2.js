
function setup() {
  createCanvas(400, 400);
  for (var i=0; i < 50; i=i+1);{
    append(x,100);
    append(y,230);
  }

}

  var x=[];
  var y=[];

function draw() {
  background(0);
  noStroke();

  for (var i = 0; i< 50; i = i+1) {

  // draw pipe
  rect(0, 200, x[i], 20);

  // draw drip
  ellipse(x[i], y[i], 10);

  // down 3 pixels each frame, but maybe should be accelerating?
  y[i] = y[i] + 4

  // if invisible for a full “height” amount…
  if (y[i] > height*2) {
    // reset
    y[i] = 220;
  }
}
}
