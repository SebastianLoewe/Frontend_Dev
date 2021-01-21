function setup() {
  var canvas = createCanvas(500, 600);
  canvas.parent('sketch-holder');
}

function draw() {
  noCursor();
  fill(0, 0, mouseX);
  circle(mouseX, mouseY, 30);
}
