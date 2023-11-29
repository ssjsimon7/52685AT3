let spaceX = 6,
  spaceY = 6;

let redSlider, greenSlider, blueSlider;

function setup() {
  createCanvas(400, 400);
  noFill();
  strokeWeight(2);
  ellipseMode(CENTER);

  // Sliders
  redSlider = createSlider(150, 255, 255);
  greenSlider = createSlider(0, 255, 0);
  blueSlider = createSlider(0, 255, 0);

  // comment this out for animation
  // noLoop();
}

function draw() {
  clear();
  noiseSeed(37);

  stroke(redSlider.value(), greenSlider.value(), blueSlider.value());
  pass(3, 8, 0);

  noiseSeed(73);

  blendMode(ADD);
  stroke(greenSlider.value(), redSlider.value(), blueSlider.value());
  pass(2, 10, 1);
}

function pass(weight, diam, offset) {
  // horizontal row
  for (let x = 0; x <= width; x += spaceX) {
    // vertical column
    for (let y = 0; y <= height; y += spaceY) {
      let n = noise(x / 200, y / 200, millis() / 10000);
      strokeWeight(n * weight);
      ellipse(x + offset, y + offset, n * diam);
    }
  }
}
