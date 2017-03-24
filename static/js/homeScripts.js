$(document).ready(function(){
  $(this).scrollTop(0);
  centerDivAtLoc(.5, .33, "#intro_body");
  $("#intro_body").delay(1000).fadeIn(1000);

  $('.portfolio-item').each(function(i){
    $(this).height($(this).width());
  });


  $(window).scroll( function(){
      $('.portfolio-item').each( function(i){
        var topOfObject = $(this).offset().top;
        var bottomOfWindow = $(window).scrollTop() + $(window).height();
        if(bottomOfWindow > (topOfObject+1)){
          $(this).animate({'opacity':'1'},500);
        }
    });
  });

});

$(window).resize(function(){
  centerDivAtLoc(.5, .33, "#intro_body");


  $('.portfolio-item').each(function(i){
    $(this).height($(this).width());
  });

});

$(document).on('click', 'a', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
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
