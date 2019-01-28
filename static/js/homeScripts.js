$(document).ready(function(){
  var canvas = document.getElementById("introCanvas");
  canvas.style.width ='100%';
  canvas.style.height='100%';
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
});

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
