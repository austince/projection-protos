final float TWO_PI = PI * 2;

void noiseyCircle(float x, float y, float radius, float noiseVal, float max) {
  float angle = 0;
  float angleStep = 0.05;
  float nRad = radius * map(noise(noiseVal),0, 1, 0.75, 1.25);

  beginShape();

  while (angle <= TWO_PI) {
    float n = noise(noiseVal);
    float mn = max * n / 2;
    float dx = x + (nRad + random(-mn, mn)) * cos(angle);
    float dy = y + (nRad + random(-mn, mn)) * sin(angle);
    
    vertex(dx, dy);

    angle += angleStep;
  }

  endShape(CLOSE);
}


void wavyCircle(float x, float y, float radius, float freq, float amp) {
  float angle = 0;
  float angleStep = 0.005;
  float dx, dy;

  beginShape();
  while (angle <= TWO_PI) {
    dx = x + (radius + sin(angle * freq) * amp) * cos(angle);
    dy = y + (radius + sin(angle * freq) * amp) * sin(angle);
    vertex(dx, dy);
    angle += angleStep;
  }
  endShape(CLOSE);
}