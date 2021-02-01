document.addEventListener("DOMContentLoaded", function() {

  setTimeout(function() {
    var bgEl = document.getElementById("sketchBg");
    var p5SketchBg = new p5(sketchBg, bgEl);

    var logoEl = document.getElementById("sketchLogo");
    var p5SketchLogo = new p5(sketchLogo, logoEl);

    let toggleEl = document.getElementById("toggleMode");
    toggleEl.onclick = function(){
      let mode = p5SketchBg.toggleMode();

      if(mode){
        toggleEl.className = "webcam";
        p5SketchLogo.exit();
      }else{
        toggleEl.className = "";
        p5SketchLogo.enter();
      }
    };
  }, 3000)

});