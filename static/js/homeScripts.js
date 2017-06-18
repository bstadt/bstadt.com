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
    else if ($(window).width() > 1000 && $(window).width() < 1200) {
      $(this).height($(this).width());
    }
    else{
      $(this).height($(this).width());
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
    else if ($(window).width() > 1000 && $(window).width() < 1450){
      $(this).height($(this).width() * 1.8);
    }
    else if ($(window).width() > 900 && $(window).width() < 1000) {
      $(this).height($(this).width());
    }
    else{
      $(this).height($(this).width());
    }
  });
});

$(document).on('click', 'a', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
});

jQuery('div.portfolio-item').hover(
    function() {
        jQuery(this).children('portfolio-text').show('fast');
        return false;
    },
    function() {
        jQuery(this).children('portfolio-text').hide('fast');
        return false;
    }
);

$('div.portfolio-item').mouseenter(function(event){
  var original = rgb2hex($(this).css('background-color'));
  var updated = shadeColor(original, 25);
  $(this).css('background-color', '#' + updated);
});

$('div.portfolio-item').mouseleave(function(event){
  var original = rgb2hex($(this).css('background-color'));
  var updated = shadeColor(original, -25);
  $(this).css('background-color', '#' + updated);
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

function shadeColor(col, amt){
  var num = parseInt(col,16);
  var r = (num >> 16) + amt;
  var b = ((num >> 8) & 0x00FF) + amt;
  var g = (num & 0x0000FF) + amt;
  var newColor = g | (b << 8) | (r << 16);
  return newColor.toString(16);
}

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
 }
