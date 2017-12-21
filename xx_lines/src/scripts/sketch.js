/**
 * Inspired by Jaime xx
 */


export function sketch(p, elem) {
  const { HSB, CLOSE } = p;

  function linearColorWheel() {
    const { width, height } = p;
    const step = width / 6;
    const yStep = height / 6;
    const cX = width / 2;
    const cY = height / 2;
    // p.beginShape();
    // p.vertex(0, 0);
    // p.vertex(cX, cY);
    // p.vertex(0 + step, 0);
    // p.endShape(p.CLOSE);
    p.colorMode(HSB);
    for (let x = 0; x < width; x += step) {
      // p.line(cX, cY, x, 0);
      // p.line(cX, cY, x, height);
      //
      p.fill(p.map(x, 0, width, 0, 255), 240, 255);
      p.beginShape();
      p.vertex(x, 0);
      p.vertex(cX, cY);
      p.vertex(x + step, 0);
      p.endShape(CLOSE);
    }

    for (let y = 0; y < height; y += yStep) {
      // p.line(cX, cY, 0, y);
      // p.line(cX, cY, width, y);

      p.fill(p.map(y, 0, height, 0, 255), 240, 255);
      p.beginShape();
      p.vertex(0, y);
      p.vertex(cX, cY);
      p.vertex(0, y + step);
      p.endShape(CLOSE);
    }
  }

  let cX = 0;
  let cY = 0;
  const TWO_PI = Math.PI * 2;

  p.setup = () => {
    p.createCanvas(elem.offsetWidth, elem.offsetHeight);
    cX = p.width / 2;
    cY = p.height / 2;

    p.colorMode(HSB);
    p.background(255);
  };

  p.draw = () => {
    const { width, height } = p;
    let rad = Math.sqrt((height / 2) ** 2 + (width / 2) ** 2) * 1.3;
    let angle = 0;

    let angleStep;
    const len = 4000;
    const hLen = len / 2;
    const m = p.millis() % len;
    const maxVal = 0.7;
    const minVal = 0.005;
    if (m > hLen) {
      angleStep = p.map(p.millis() % len, 0, len, minVal, maxVal);
    } else {
      angleStep = p.map(p.millis() % len, 0, len, maxVal, minVal);
    }


    p.push();
    p.translate(cX, cY);
    let lastX = rad * Math.cos(angle - angleStep);
    let lastY = rad * Math.sin(angle - angleStep);
    while (angle <= TWO_PI) {
      const nextX = rad * Math.cos(angle);
      const nextY = rad * Math.sin(angle);
      // const hAng = p.atan2(nextY, nextX);
      const sectionColor = p.color(p.map(angle, 0, TWO_PI, 0, 360), 100, 100);
      p.fill(sectionColor);
      p.stroke(sectionColor);

      p.beginShape();
      p.vertex(0, 0);
      p.vertex(nextX, nextY);
      p.vertex(lastX, lastY);
      p.endShape(CLOSE);


      lastX = nextX;
      lastY = nextY;
      angle += angleStep;
    }
    p.pop();

    p.noStroke();
    p.rectMode(p.CENTER);
    p.push();
    p.translate(cX, cY);
    p.rotate(p.radians(-20));
    p.fill(255);
    p.rect(-width / 4, 200, 200, 100);
    p.pop();
  };

  p.keyTyped = () => {

  };

  p.mouseMoved = () => {
    // cX = p.mouseX;
    // cY = p.mouseY;
  };

  p.windowResized = () => {
    console.log(`Resizing canvas to be ${elem.offsetWidth} x ${elem.offsetHeight}`);
    p.resizeCanvas(elem.offsetWidth, elem.offsetHeight);
    p.setup();
  };
}
