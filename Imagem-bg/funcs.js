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
    $('.t-ball3').css('top',-(scrolled*0.4)+'px');
    $('.big-ball').css({
      'transform':`scale(${1-(scrolled/1000) * 0.25})`
    });
  }
  $(".custom-switch").on('click', () => {

    if($("#customSwitch1").is(":checked")){
      $("#value-basic").html("R$9,00");
      $("#value-pro").html("R$25,50");
      $("#value-expert").html("R$40,00");
      $("#anual-plan").css("color","black");
      $("#mensal-plan").css("color","gray");
      $(".economia-plan").css("display","block");
    } else {
      $("#value-basic").html("R$10,00");
      $("#value-pro").html("R$30,00");
      $("#value-expert").html("R$50,00");
      $("#anual-plan").css("color","gray");
      $("#mensal-plan").css("color","black");
      $(".economia-plan").css("display","none");
    }

  });
  
})


