import { ArcLine } from './arc-line';

export function sketch(p, elem) {
  let heightStep = 10;
  let arcs;
  const numArcs = 5;

  p.setup = () => {
    p.createCanvas(elem.offsetWidth, elem.offsetHeight);
    p.colorMode(p.HSB);
    p.background(0);

    // for (let i = 1; i <= numArcs; i++) {
    //   let cVal = 255 - (i / numArcs * 255);
    //   let arc = new ArcLine(p.height - (i / numArcs * p.height), p.color(cVal, 220, 255, 0.29));
    //   arcs.push(arc)
    // }
    arcs = [
      new ArcLine(p.height / 4 - p.height, p.color(170, 86, 255, 0.29)),
      new ArcLine(p.height / 2 - p.height, p.color(340, 86, 255, 0.29)),
      new ArcLine(p.height * 3 / 4 - p.height, p.color(85, 86, 255, 0.29)),
      new ArcLine(0, p.color(42, 86, 255, 0.29)),

      new ArcLine(p.height / 4, p.color(170, 86, 255, 0.29)),
      new ArcLine(p.height / 2,p.color(340, 86, 255, 0.29)),
      new ArcLine(p.height * 3 / 4, p.color(85, 86, 255, 0.29)),
      new ArcLine(p.height, p.color(42, 86, 255, 0.29)),
    ];

    p.frameRate(15);
  };
  
  p.draw = () => {
    p.background(0);
    p.push();
    // p.translate(p.width / 2, p.height / 2);
    p.rotate(p.radians(5));
    for (let arc of arcs) {
      arc.draw(p);
      arc.cHeight += heightStep;

      if (arc.cHeight > p.height + 750) {
        arc.cHeight = 0;
      }
    }
    p.pop();
  };

  p.keyTyped = () => {

  };

  p.windowResized = () => {
    console.log(`Resizing canvas to be ${elem.offsetWidth} x ${elem.offsetHeight}`);
    p.resizeCanvas(elem.offsetWidth, elem.offsetHeight);
  };
}
