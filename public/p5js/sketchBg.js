/******************
Code by Vamoss
Original code link:
https://www.openprocessing.org/sketch/1057106

Author links:
http://vamoss.com.br
http://twitter.com/vamoss
http://github.com/vamoss
******************/

const sketchBg = p5js => {
  const gridSize = 13;

  var graphs = [];

  //webcam
  let camera;
  const camWidth = 320;
  const camHeight = 240;
  const maxColor = 765;// 255*3
  let scaleToCam;

  //mode
  MODES = {GENERATIVE: 1, WEBCAM: 2};
  mode = MODES.GENERATIVE;

  p5js.toggleMode = () => {
    mode = mode == MODES.GENERATIVE ? MODES.WEBCAM : MODES.GENERATIVE;;

    if(mode == MODES.WEBCAM){
      camera = p5js.createCapture(p5js.VIDEO);
      camera.size(camWidth, camHeight);
      camera.hide();
    }else{
      camera.remove();
    }

    return mode == MODES.WEBCAM;
  }

  p5js.setup = () => {
    p5js.createCanvas(p5js.windowWidth, p5js.windowHeight);
    p5js.pixelDensity(1);

    scaleToCam = p5js.max(camWidth, camHeight) / p5js.max(p5js.width, p5js.height);
    
    for(var i = 0; i < 5; i++){
      graph = p5js.createGraphics(gridSize, gridSize);
      switch(i){
      case 0:
        //dot
        graph.noStroke();
        graph.fill("#FFF");//"#8bd9e6");
        graph.circle(gridSize/2, gridSize/2, gridSize * 2 / 3);
      break;
      case 1:
        //circle
        graph.stroke("#FFF");//"#73b4cc");
        graph.strokeWeight(4);
        graph.noFill();
        graph.circle(gridSize/2, gridSize/2, gridSize * 2 / 3);
      break;
      case 2:
        //line
        graph.stroke("#FFF");//"#69a3c0");
        graph.strokeWeight(4);
        graph.noFill();
        graph.line(gridSize/2, 0, gridSize/2, gridSize);
      break;
      case 3:
        //cross
        graph.stroke("#FFF");//"#68a0be");
        graph.strokeWeight(4);
        graph.noFill();
        graph.line(0, gridSize/2, gridSize, gridSize/2);
        graph.line(gridSize/2, 0, gridSize/2, gridSize);
      break;
      case 4:
        //square
        graph.noStroke();
        graph.fill("#FFF");//"#6498b9");
        graph.rect(gridSize/10, gridSize/10, gridSize - gridSize/5, gridSize - gridSize/5);
      break;
      }
      graphs.push(graph);
    }
  }

  p5js.draw = () => {
    var t = p5js.millis()/1000;
    p5js.clear();//background("#9aeff6");

    if(mode == MODES.GENERATIVE){
      for(let x = 0; x < p5js.width; x += gridSize) {
        for(let y = 0; y < p5js.height; y += gridSize) {
          let pattern = p5js.floor(((p5js.noise(x/gridSize/50, y/gridSize/50, t/20)+0.5)*4)%1 * (graphs.length));
          drawPattern(pattern, x, y, t, gridSize);
        }
      }
    }else if(mode == MODES.WEBCAM){
      camera.loadPixels();
      p5js.push();
      p5js.translate((p5js.width - camWidth/scaleToCam)/2, (p5js.height - camHeight/scaleToCam)/2);
      let gridSize2 = gridSize * 1.2;
      let sampleSize = p5js.floor(gridSize2 * scaleToCam);
      for (let x = 0; x < camWidth; x += sampleSize) {
        for (let y = 0; y < camHeight; y += sampleSize) {
          const i = p5js.floor((y * camWidth) + x) * 4;
          const r = camera.pixels[i];
          const g = camera.pixels[i + 1];
          const b = camera.pixels[i + 2];
          let pattern = p5js.floor((1 - (r+g+b) / maxColor) * (graphs.length-1));
          // let h = hue(color(r, g, b));
          // let pattern = floor((h / 360) * (graphs.length-1));
          drawPattern(pattern, x / scaleToCam, y / scaleToCam, t, gridSize2);
        }
      }
      p5js.pop();
    }
  }

  function drawPattern(pattern, x, y, t, gridSize) {
    if(pattern > 1){
      p5js.push();
      p5js.translate(x + gridSize/2, y + gridSize/2);
      
      let rot = p5js.map(p5js.noise(x/200, y/200, t/2), 0.2, 0.6, 0, p5js.TWO_PI);
      p5js.rotate(rot);
      p5js.translate(-x - gridSize/2, -y - gridSize/2);
    }

    p5js.image(graphs[pattern], x, y, gridSize, gridSize);

    if(pattern > 1){
      p5js.pop();
    }
  }
}