$(function(){
  var navBurgers = Array.prototype.slice.call($('.navbar-burger'), 0);

  if(navBurgers.length > 0) {
    $('.navbar-burger').click(function(){
      $(this).toggleClass('is-active');
      $($(this).data('target')).toggleClass('is-active');
    });
  }
  $('#hero-text').animate({opacity:1});
});

$('.mtoggle').click(function(){
  $('.modal').toggleClass('is-active');
});

$(document).ready(function(){
  $('.tab-links a').on('click', function(e){
    var currAttr = $(this).attr('href');
    alert(currAttr)
    $('.tabs' + currAttr).show().siblings().hide();
    $(this).parent('li').addClass('active').siblings().removeClass('active')
    e.preventDefault();
  });
});
