$(document).ready(function() {
  var navBurgers = Array.prototype.slice.call($('.navbar-burger'), 0);

  if(navBurgers.length > 0) {
    $('.navbar-burger').click(function(){
      $(this).slideToggle();
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
        "box-shadow":"none"
      });
    } else {
      $('.nav').slideDown().css({
        "background-color":"white",
        "box-shadow":"0 1.5px 1.5px lightgrey"
      });
    }
  }
  lastTop = top;
});
