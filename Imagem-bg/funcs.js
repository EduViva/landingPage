$(function(){

  $(".chevron").on('click', () => window.scrollTo({
      top: 620,
      behavior:"smooth",
  }));

  $(window).scroll(function(e){
    parallax();
  });

  function parallax(){
    var scrolled = $(window).scrollTop();
    $('.tiny-ball').css('top',-(scrolled*0.36)+'px');
  }

})


