$(document).ready(function(){
  alert(sessionStorage.getItem("work"))
  $('.tab-links a').on('click', function(e){
    var currAttr = $(this).attr('href');

    $('.tab'+currAttr).fadeIn(800).siblings().hide().fadeOut(800)

    $(this).parent('li').addClass('is-active').siblings().removeClass('is-active')
    e.preventDefault();
  });
});

$('project-item').hover(
  function(){
      $('.project-text').fadeIn();
  },
  function(){
      $('project-text').fadeOut();
  }
);
