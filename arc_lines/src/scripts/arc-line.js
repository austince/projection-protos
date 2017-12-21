export function arcLine(p, x, y, maxX, stepX, offsetX, minHeight, maxHeight) {
  let prevX = x;
  x += p.random(0, stepX);
  for (; x < maxX; x += p.random(0, stepX)) {
    // let offX = p.random(-offsetX, offsetX);

    p.curve(
      prevX, y + p.random(minHeight, maxHeight),
      prevX, y,
      x + offsetX, y,
      x, y + p.random(minHeight, maxHeight)
    );

    prevX = x;
  }
}

export class ArcLine {
  constructor(cHeight, arcColor) {
    this.cHeight = cHeight;
    this.arcColor = arcColor;
    console.log(this);
  }

  draw(p) {
    console.log(this.arcColor);
    p.stroke(255, 0);
    p.fill(this.arcColor);
    arcLine(p, -50, this.cHeight, p.width + 50, 100, 50, 500, 3000);
  }
}