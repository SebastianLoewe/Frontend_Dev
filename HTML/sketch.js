function setup() {
  var canvas = createCanvas(500, 600);
  canvas.parent('sketch-holder');
}

function draw() {
  noCursor();
  fill(0, 0, mouseX);
  circle(mouseX, mouseY, 30);
}

function windowResized() {
  if (windowWidth >= 600) {
    resizeCanvas(windowWidth * 0.7, windowHeight * 0.7);
    console.log('w-size: 70%');
    console.log(windowWidth);
  } else if (windowWidth < 600) {
    resizeCanvas(windowWidth*0.95, windowHeight*0.6);
    console.log('w-size: full');
  }
}
