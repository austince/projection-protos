float yIncrement =    0.05;    // how much to change b/w individual waves (0-1)
float timeIncrement = 0.01;    // speed of change over time (0-1)
float timeOffset =    0;       // incremented each frame to shift the noise
float maxOffset = 30;

float cX, cY;
float cAng = 0.0;
float angleStep = 0.05;
float[] of1;

void setup() {
  size(800, 800);
  background(0);


  // first adjusts overall variety
  // Lower --> less
  // second adjusts local variety
  // 0 -> 1
  cX = width / 2;
  cY = height / 2;
  int s = 30;
  of1 = new float[]{
    random(-s, s), 
    random(-s, s), 
    random(-s, s), 
  };
}

void draw() {
  background(0);
  noiseDetail(8, 0.6);
  makeNoise(3);
  // update time position in the Perlin
  // noise each frame 
  float whAvg = (width + height) / 2;

  //float n = noise(noiseVal);
  //float mn = max * n / 2;
  cX += cos(cAng);
  cY += sin(cAng);

  cAng += angleStep;

  //noiseyCircle(width / 2, height / 2, whAvg / 2, timeOffset, 30);
  noFill();
  stroke(255);
  strokeWeight(2);
  noiseDetail(1, 0.1);
  int s = 1;
  println(of1[0], of1[1], of1[2]);
  noiseyCircle(cX + of1[0], cY + of1[0], whAvg / 2, timeOffset, 30);
  noiseyCircle(cX + of1[1], cY + of1[1], whAvg / 4, 4/ timeOffset, 30);
  noiseyCircle(cX + of1[2], cY + of1[2], whAvg / 8, 2/ timeOffset, 30);



  maxOffset = map(millis(), 0, 999, 30, 32);

  timeOffset += timeIncrement;
}