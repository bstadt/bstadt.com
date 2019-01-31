$(document).ready(function(){

  //get a new random walk and start the drawing process
  $.get( "http://bstadt-walk-api.herokuapp.com/", { steps: "5000", geometric: "True" } ).done(
    function(data){
      startWalk(JSON.parse(data)['locs']);
    }
  );

});


function startWalk(walk) {

  var n = walk.length;
  end_of_intro_idx = 10;

  var canvas = document.getElementById("introCanvas");

  // Get the device pixel ratio, falling back to 1.
  var dpr = window.devicePixelRatio || 1;

  // Get the size of the canvas in CSS pixels.
  var rect = canvas.getBoundingClientRect();

  // Give the canvas pixel dimensions of their CSS
  // size * the device pixel ratio.
  true_width = rect.width * dpr;
  true_height = rect.height * dpr;

  canvas.width = true_width;
  canvas.height = true_height;

  var ctx = canvas.getContext("2d");

  //ctx.scale(dpr, dpr);
  ctx.beginPath();

  start_point = walk[0];
  ctx.moveTo(start_point[0] * canvas.width, start_point[1] * canvas.height);

  for (i=1; i<end_of_intro_idx; i++){
    next_point = walk[i];
    ctx.lineTo(Math.floor(next_point[0] * canvas.width), Math.floor(next_point[1] * canvas.height));
    ctx.moveTo(Math.floor(next_point[0] * canvas.width), Math.floor(next_point[1] * canvas.height));
  }

  ctx.stroke();

  stepWalk(canvas, ctx, walk, end_of_intro_idx);

}


function stepWalk(canvas, ctx, walk, i){
  start_point = walk[i];
  next_point = walk[i+1];

  ctx.moveTo(start_point[0] * canvas.width, start_point[1] * canvas.height);
  ctx.lineTo(Math.floor(next_point[0] * canvas.width), Math.floor(next_point[1] * canvas.height));
  ctx.stroke();
  setTimeout(stepWalk, 10, canvas, ctx, walk, i+1);
}


function centerDivAtLoc(xTarget, yTarget, elem) {
  var wHeight = $(window).height();
  var wWidth = $(window).width();
  var dHeight = $(elem).height();
  var dWidth = $(elem).width();

  var posY = (wHeight * yTarget) - (dHeight/2);
  var posX = (wWidth * xTarget) - (dWidth/2);

  $(elem).css("top", posY.toString()+"px");
  $(elem).css("right", posX.toString()+"px");
  return;
}
