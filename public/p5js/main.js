document.addEventListener("DOMContentLoaded", function() {

  setTimeout(function() {
    var bgEl = document.getElementById("sketchBg");
    var p5SketchBg = new p5(sketchBg, bgEl);

    var logoEl = document.getElementById("sketchLogo");
    var p5SketchLogo = new p5(sketchLogo, logoEl);

    let toggleEl = document.getElementById("toggleMode");
    let navbar = document.getElementById('navbar');

    toggleEl.onclick = function(){
      let mode = p5SketchBg.toggleMode();

      if(mode){
        toggleEl.className = "webcam";
        p5SketchLogo.exit();
        navbar.style.visibility = 'hidden';
      }else{
        toggleEl.className = "";
        p5SketchLogo.enter();
        navbar.style.visibility = 'visible';
      }
    };
  }, 3000)

});