$(document).ready(function(){
  $(this).scrollTop(0);
  centerDivAtLoc(.5, .33, "#intro_body");
  $("#intro_body").delay(1000).fadeIn(1000);

  $('.portfolio-item').each(function(i){
    //when we have a small device in landscape mode, keep the ratio
    if($(window).width() < 768 && $(window).width() > $(window).height()){
      $(this).height($(this).width() *$(window).height()/$(window).width());
    }
    //if the screen is extra wide
    else if ($(window).width() > 1600){
      $(this).height($(this).width());
    }
    //akward case before bootstrap medium kicks in
    else if ($(window).width() > 1200 && $(window).width() < 1350){
      $(this).height($(this).width() * 1.8);
    }
    else {
      $(this).height($(this).width() * 1.5);
    }
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
    //when we have a small device in landscape mode, keep the ratio
    if($(window).width() < 768 && $(window).width() > $(window).height()){
      $(this).height($(this).width() *$(window).height()/$(window).width());
    }
    //if the screen is extra wide
    else if ($(window).width() > 1600){
      $(this).height($(this).width());
    }
    //akward case before bootstrap medium kicks in
    else if ($(window).width() > 1200 && $(window).width() < 1350){
      $(this).height($(this).width() * 1.8);
    }
    else {
      $(this).height($(this).width() * 1.5);
    }
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
