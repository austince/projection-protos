const TWO_PI = Math.PI * 2;
const angleStep = 0.05;

export default class NoiseCircle {
  constructor(centerX, centerY, radius, max, angle, color) {
    this.cX = centerX;
    this.cY = centerY;
    this.rad = radius;
    this.maxNoise = max;
    this.cAng = angle;
    this.color = color;
  }

  set noiseValue(val) {
    this.noiseVal = val;
  }

  setCenter(x, y) {
    this.cX = x;
    this.cY = y;
  }

  incCenter(angle) {
    this.cAng += angle;
    this.cX += Math.cos(this.cAng);
    this.cY += Math.sin(this.cAng);
  }

  draw(p) {
    let angle = 0;
    const {
      cX, cY, rad, noiseVal, maxNoise,
    } = this;

    const nRad = rad * p.map(p.noise(noiseVal), 0, 1, 0.75, 1.25);

    p.stroke(this.color);
    p.beginShape();

    while (angle <= TWO_PI) {
      const n = p.noise(noiseVal);
      const mn = maxNoise * n / 2;
      const dx = cX + (nRad + p.random(-mn, mn)) * Math.cos(angle);
      const dy = cY + (nRad + p.random(-mn, mn)) * Math.sin(angle);

      p.vertex(dx, dy);

      angle += angleStep;
    }

    p.endShape(p.CLOSE);
  }
}
