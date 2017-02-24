var words = $(".words");
var i = -1;
var first = true;
function changeWord() {
    i++;
    words.eq(i%words.length).fadeIn(800).delay(1000).fadeOut(800, changeWord);
}

$(document).ready(function(){
  $(this).scrollTop(0);
	$('#intro').fadeIn(1000);
	$('#name').delay(1100).fadeIn(1000);
	$('#tagline').delay(1100).fadeIn(1000);
	$('#downArrow').delay(1100).fadeIn(1000);
	$('#nav').delay(2100).fadeIn(1000);
});
$(window).resize(function(){
  if ($(window).width()<980){
    $('#about').hide();
  }
  else{
    $('#about').show();
  }
});
$(document).on('click', 'a[href^="#"]', function(e) {
	$('#landing').fadeIn(2000);
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    e.preventDefault();
    var pos = $(id).offset().top;
    $('body, html').animate({scrollTop: pos}, 'slow');
    if(first){
        first=false;
        changeWord();
    }
});
