$(document).ready(function() {
  $('.hidden').css('opacity', '1');
  var navBurgers = Array.prototype.slice.call($('.navbar-burger'), 0);

  if(navBurgers.length > 0) {
    $('.navbar-burger').click(function(){
      $(this).toggleClass('is-active');
      $($(this).data('target')).toggleClass('active-nav');
    });
  }
  $('.hidden').animate({opacity:1}, 600);

});
var lastTop = 0;
$(window).scroll(function(){
  var top = $(this).scrollTop();
  if ($(window).width() > 1007) {
   if (top > lastTop) {
    $('.nav').slideUp();  
    } else {
      if (top == 0) {
        $('.nav').slideDown().removeClass('topbar').addClass("reachtop")
        $('.navbar-menu').removeClass('topmenu');
        $('.navbar-burger').removeClass('topburger');

      } else {
        $('.nav').slideDown().addClass('topbar');
        $('.navbar-menu').addClass('topmenu');
        $('.navbar-burger').addClass('topburger');
      }
    }
  }
  lastTop = top;
});
