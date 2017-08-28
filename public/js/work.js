$(document).ready(function(){
  var loadTab = sessionStorage.getItem("work");
  if (loadTab == null || loadTab == "technical") {
    $('#titletechnical').addClass('activelink');
    $('#technical').fadeIn(800).siblings().hide().fadeOut(800)
  } else{
    $('#titleservice').addClass('activelink');
    $('#service').fadeIn(800).siblings().hide().fadeOut(800)
  }

  $('.tab-links a').on('click', function(e){
    var currAttr = $(this).attr('href');

    $('.tab'+currAttr).fadeIn(800).siblings().hide().fadeOut(800)

    $(this).parent('li').addClass('activelink').siblings().removeClass('activelink')
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
