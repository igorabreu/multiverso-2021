/******************
Code by Vamoss
Original code link:
https://www.openprocessing.org/sketch/1057106

Author links:
http://vamoss.com.br
http://twitter.com/vamoss
http://github.com/vamoss
******************/

const sketchLogo = p5js => {

  var SIZE = 10;
  const chars = ["+", "✖", "◆", "▒", "▓", "█"];

var M = 
`XX       XX
XXX     XXX
XXXX   XXXX
XXXXX XXXXX
XXXXXXXXXXX
XXXXXXXXXXX
XXXXXXXXXXX
XXXXXXXXXXX
XXXXXXXXXXX
XXXXXXXXXXX
XXXXXXXXXXX
XXXXXXXXXXX`;
           
var U = 
`XXXXXXXXXXX
XXXXXXXXXXX
XXXXXXXXXXX
XXXXXXXXXXX
XXXXXXXXXXX
XXXXXXXXXXX
XXXXXXXXXXX
XXXXXXXXXXX
XXXXXXXXXXX
 XXXXXXXXX 
  XXXXXXX  
   XXXXX   `;
           
var L = 
`XXXXXX   
XXXXXX   
XXXXXX   
XXXXXX   
XXXXXX   
XXXXXX   
XXXXXXXXX
XXXXXXXXX
XXXXXXXXX
XXXXXXXXX
XXXXXXXXX
XXXXXXXXX`;
         
var T = 
`XXXXXXXXXX
XXXXXXXXXX
XXXXXXXXXX
XXXXXXXXXX
XXXXXXXXXX
XXXXXXXXXX
  XXXXXX  
  XXXXXX  
  XXXXXX  
  XXXXXX  
  XXXXXX  
  XXXXXX  `;

var I = 
`XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX`;

var V = 
`XXXXXXXXXXXXX
XXXXXXXXXXXXX
 XXXXXXXXXXX 
 XXXXXXXXXXX 
  XXXXXXXXX  
  XXXXXXXXX  
   XXXXXXX   
   XXXXXXX   
    XXXXX    
    XXXXX    
     XXX     
      X      `;
             
var E = 
`XXXXXXXXX
XXXXXXXXX
XXXXXXXXX
XXXXXXXXX
XXXXXXX  
XXXXXXXXX
XXXXXXXXX
XXXXXXX  
XXXXXXXXX
XXXXXXXXX
XXXXXXXXX
XXXXXXXXX`;
         
var R = 
`XXXXXX    
XXXXXXXXX 
XXXXXXXXXX
XXXXXXXXXX
XXXXXXXXXX
XXXXXXXXXX
XXXXXXXXXX
XXXXXXXXX 
XXXXXXX   
XXXXXXXX  
XXXXXXXXX 
XXXXXXXXXX`;
          

var S = 
`   XXXXXXXX
 XXXXXXXXXX
XXXXXXXXXXX
XXXXXXXXXXX
 XXXXXXXXXX
  XXXXXX   
   XXXXXX  
XXXXXXXXXX 
XXXXXXXXXXX
XXXXXXXXXXX
XXXXXXXXXX 
XXXXXXXX   `;
            
var O = 
`   XXXXXX   
  XXXXXXXX  
 XXXXXXXXXX 
XXXXXXXXXXXX
XXXXXXXXXXXX
XXXXXXXXXXXX
XXXXXXXXXXXX
XXXXXXXXXXXX
XXXXXXXXXXXX
 XXXXXXXXXX 
  XXXXXXXX  
   XXXXXX   `;


  var letters = [];
  var colors, colorsBg;

  var animate = false;
  var animPct = 0;

  const enterDuration = 2000;
  var enterTime = -enterDuration;
  var enterTimeout;
  var enterComplete = false;

  const exitDuration = 2000;
  var exitTime = -exitDuration;
  var exitTimeout;
  var exitComplete = false;

  p5js.setup = () => {
    SIZE *= p5js.windowWidth/1280;

    p5js.createCanvas(p5js.windowWidth - 17, 14 * SIZE);
    p5js.pixelDensity(1);
    
    colors = [p5js.color("#8e9eca"), p5js.color("#5577a1")];
    colorsBg = [p5js.color("#b1f4d5"), p5js.color("#a0f9fc"), p5js.color("#43e8d6"), p5js.color("#68c4e8"), p5js.color("#b1f4d5")];
    
    calcLetter(M, 0, SIZE*4);
    calcLetter(U, 0, -SIZE*2);
    calcLetter(L, -SIZE*2, SIZE);
    calcLetter(T, 0, SIZE*6);
    calcLetter(I, 0, -SIZE*6);
    calcLetter(V, 0, SIZE*6);
    calcLetter(E, -SIZE*4, 0);
    calcLetter(R, -SIZE, SIZE*2);
    calcLetter(S, SIZE*2, -SIZE*3);
    calcLetter(O, 0, 0);
    
    p5js.textAlign(p5js.CENTER, p5js.CENTER);
    p5js.textSize(SIZE);
    p5js.textFont("monospace");
    p5js.noStroke();

    p5js.enter();
  }

  p5js.draw = () => {
    p5js.clear();

    const ww = 111 * SIZE;
    const hh = 12 * SIZE;
    let startX = p5js.floor((p5js.width - ww) / 2 / SIZE) * SIZE;
    const startY = SIZE * 1.5;//p5js.floor((p5js.height - hh) / 2/ SIZE) * SIZE;
    const time = p5js.millis() / 1000;

    if(animate){
      p5js.fill(255);
      p5js.circle(p5js.width/2, p5js.height/2, animPct * p5js.width * 2);
    }else{
      p5js.fill(255);
      p5js.rect(0, 0, p5js.width, p5js.height);
    }

    letters.forEach(letter => {
      letter.blocks.forEach(block => {
        const xx = startX + block.x;
        const yy = startY + block.y;

        if(animate) {
          var d = p5js.dist(p5js.width/2, p5js.height/2, xx, yy);
          if(animPct < d / (p5js.width / 2)) {
            return;
          }
        }
        if(!block.cacheCalc)
          block.cacheCalc = 
            p5js.sqrt(
              p5js.pow(block.x + letter.freqX - ((letter.w - 1) * SIZE)/2, 2)/1000 +
              p5js.pow(block.y + letter.freqY - (hh-SIZE/2)/2, 2)/1000
            );
        var freq = (p5js.sin(time-block.cacheCalc) + 1) / 2;
        
        // p5js.fill(255);
        // p5js.rect(xx - SIZE/2, yy - SIZE/2, SIZE, SIZE);
        p5js.fill(lerpColors(freq, colors));
        p5js.text(chars[p5js.floor(freq * (chars.length - 1))], xx, yy);
      });
      startX += (letter.w + 1) * SIZE;
    });
  }

  p5js.enter = () => {
    animate = true;
    enterTime = p5js.millis();
    enterComplete = false;
    
    exitComplete = true;
    if(exitTimeout) clearTimeout(exitTimeout);
    if(enterTimeout) clearTimeout(enterTimeout);
    enterTimeout = setTimeout(p5js.onEnterComplete, enterDuration);
    window.requestAnimationFrame(p5js.onEnterUpdate);
  }

  p5js.onEnterUpdate = () => {
    if(enterComplete) return;

    let enterTimeDiff = p5js.millis() - enterTime;
    animPct = p5js.pow(enterTimeDiff / enterDuration, 2);

    window.requestAnimationFrame(p5js.onEnterUpdate);
  }

  p5js.onEnterComplete = () => {
    animate = false;
    enterComplete = true;
    animPct = 1;
  }

  p5js.exit = () => {
    animate = true;
    exitTime = p5js.millis();
    exitComplete = false;

    enterComplete = true;
    if(exitTimeout) clearTimeout(exitTimeout);
    if(enterTimeout) clearTimeout(enterTimeout);
    exitTimeout = setTimeout(p5js.onExitComplete, exitDuration);
    window.requestAnimationFrame(p5js.onExitUpdate);
  }

  p5js.onExitUpdate = () => {
    if(exitComplete) return;

    let exitTimeDiff = p5js.millis() - exitTime;
    animPct = p5js.pow(1 - exitTimeDiff / exitDuration, 2);
    if(animPct < 0){
      animPct = 0;
    }

    window.requestAnimationFrame(p5js.onExitUpdate);
  }

  p5js.onExitComplete = () => {
    exitComplete = true;
    animPct = 0;
  }

  function calcLetter(letter, freqX, freqY){
    var obj = {blocks: [], freqX, freqY};
    var x = 0;
    var y = 0;
    for (var i = 0; i < letter.length; i++) {
      var l = letter.charAt(i);
      if(l == "X")
        obj.blocks.push({x, y});
      if(l == "\n"){
        if(!obj.w)
          obj.w = i;
        x = 0;
        y += SIZE;
      }else{
        x += SIZE;
      }
    }
    letters.push(obj);
  }

  /**
   * lerp color from multiple color array
   * param {Integer} [t] lerp factor from 0 to 1
   * param {Array} [[color, color]] colors to lerp, minimum 2 colors in array
   */
  function lerpColors(t, colors)
  {
    let i = Math.floor(t*(colors.length-1));
    if(i < 0) return colors[0];
    if(i >= colors.length-1) return colors[colors.length-1];

    let percent = (t - i / (colors.length-1)) * (colors.length-1);
    return p5js.color(
      colors[i]._getRed() + percent*(colors[i+1]._getRed()-colors[i]._getRed()),
      colors[i]._getGreen() + percent*(colors[i+1]._getGreen()-colors[i]._getGreen()),
      colors[i]._getBlue() + percent*(colors[i+1]._getBlue()-colors[i]._getBlue())
    )
  }
}