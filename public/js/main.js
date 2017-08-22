$(document).ready(function() {
  $('.hidden').css('opacity', '1');
  var navBurgers = Array.prototype.slice.call($('.navbar-burger'), 0);

  if(navBurgers.length > 0) {
    $('.navbar-burger').click(function(){
      $(this).toggleClass('is-active');
      $($(this).data('target')).slideToggle();
    });
  }
  $('.intro-text').animate({opacity:1}, 600);

});

var lastTop = 0;
$(window).scroll(function(){
  var top = $(this).scrollTop();
  if (top > lastTop) {
    $('.nav').slideUp();
  } else {
    if (top == 0) {
      $('.nav').slideDown().css({
        "background-color":"transparent",
        "box-shadow":"none",
        "-webkit-transition":"background-color 600ms",
        "-moz-transition":"background-color 600ms",
        "transition":"background-color 600ms"
      });
      $('.nav a').css({
        "color":"white",
      });
      $('.nav a:hover').css({
        "background-color":"#494949"
      });
    } else {
      $('.nav').slideDown().css({
        "background-color":"white",
        "box-shadow":"0 1.5px 1.5px lightgrey"
      });
      $('.nav a').css({
        "color":"black"
      });
      $('.nav a:hover').css({
        "background-color":"whitesmoke"
      });
    }
  }
  lastTop = top;
});
