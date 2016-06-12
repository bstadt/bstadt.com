$(document).ready(function(){
    $(this).scrollTop(0);
	$('#intro').fadeIn(1500);
});

// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
	$('#landing').fadeIn(2000);
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $(id).offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos}, 'slow');
});