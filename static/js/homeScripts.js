$(document).ready(function(){
  $(this).scrollTop(0);
  centerDivAtLoc(.5, .33, "#intro_body");
  $("#intro_body").delay(1000).fadeIn(1000);
});

$(window).resize(function(){
  centerDivAtLoc(.5, .33, "#intro_body");
  /*
  if ($(window).width()<980){
  }
  else{
  }
  */
});

function centerDivAtLoc(xTarget, yTarget, elem) {
  var wHeight = $(window).height();
  var wWidth = $(window).width();
  var dHeight = $(elem).height()
  var dWidth = $(elem).width()

  var posY = (wHeight * yTarget) - (dHeight/2);
  var posX = (wWidth * xTarget) - (dWidth/2);

  $(elem).css("top", posY.toString()+"px");
  $(elem).css("right", posX.toString()+"px");
  return;
}
