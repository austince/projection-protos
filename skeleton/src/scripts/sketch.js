export default function sketch(p, elem) {
  p.setup = () => {
    p.createCanvas(elem.offsetWidth, elem.offsetHeight);
  };

  p.draw = () => {

  };

  p.keyTyped = () => {

  };

  p.mouseMoved = () => {

  };

  p.windowResized = () => {
    console.log(`Resizing canvas to be ${elem.offsetWidth} x ${elem.offsetHeight}`);
    p.resizeCanvas(elem.offsetWidth, elem.offsetHeight);
  };
}
