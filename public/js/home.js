

$(document).ready(function() {
  $(window).scroll( function(){
    $('.intro-section').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({opacity:1}, 600);
        }
    });
  });
});
setInterval(function(){
  $('.blink').delay(600).fadeTo(600, 1).delay(600).fadeTo(600, 0.1);
}, 500);
