$(document).ready(function(){
  $('#titletechnical').addClass('active');
  $('#technical').fadeIn(600).siblings().hide().fadeOut(600)
});

$('.tabs li').on('click', function(e){
  var currAttr = $(this).attr('href');
  console.log(currAttr);
  $(currAttr).fadeIn(600).siblings().hide().fadeOut(600);

  $(this).addClass('active').siblings().removeClass('active');
  e.preventDefault();
});
