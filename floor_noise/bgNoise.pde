float detail =    0.6;      // amount of detail in the noise (0-1)
float increment = 0.002;    // how quickly to move through noise (0-1) 

void makeNoise(int step) {
  
   loadPixels();
  for (int x=0; x<width; x+=step) {
    for (int y=0; y<height; y+=step) {
      
      // noise() returns a value 0-1, so multiply
      // by 255 to get a number we can use for color
      float gray = noise(x*increment, y*increment) * 255;
      
      // set the current pixel to the value from noise()
      pixels[y*width + x] = color(gray);
    }
  }
  updatePixels();
}