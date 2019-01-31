$(document).ready(function(){

  //get a new random walk and start the drawing process
  $.get( "http://bstadt-walk-api.herokuapp.com/", { steps: "5000", geometric: "True" } ).done(
    function(data){
      startWalk(JSON.parse(data)['locs']);
    }
  );

});


function startWalk(walk) {

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

  ctx.beginPath();
  ctx.lineWidth = 2;
  stepWalk(canvas, ctx, walk, 0);

}


function stepWalk(canvas, ctx, walk, t){
  mid = Math.floor(walk.length/2);

  forward_start_point = walk[mid + t];
  forward_next_point = walk[mid+t+1];

  rear_start_point = walk[mid - t];
  rear_next_point = walk[mid-t-1];

  ctx.moveTo(forward_start_point[0] * canvas.width, forward_start_point[1] * canvas.height);
  ctx.lineTo(Math.floor(forward_next_point[0] * canvas.width), Math.floor(forward_next_point[1] * canvas.height));

  ctx.moveTo(rear_start_point[0] * canvas.width, rear_start_point[1] * canvas.height);
  ctx.lineTo(Math.floor(rear_next_point[0] * canvas.width), Math.floor(rear_next_point[1] * canvas.height));
  ctx.stroke();

  //if the next endpoint exists, draw to it
  if(t < walk.length/2){
    setTimeout(stepWalk, 10, canvas, ctx, walk, t+1);
  }

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
