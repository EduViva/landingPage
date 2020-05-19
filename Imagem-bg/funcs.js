$(function(){

  //Navegação pela página
  $(".chevron").click({place:620},goTo);

  $(".nav-home").click({place:0},goTo);
  $(".nav-features").click({place:1209},goTo);
  $(".nav-pricing").click({place:2101},goTo);
  $(".nav-contact").click({place:3317},goTo);

  //Adicionando propriedade de distância nas bolas
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

  //Alterando planos mensal/anual
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


  //Modal como chegar section contact, endereço
  $('.como-chegar').on('click', () => { 
    $('#fundo_modal').css('display','block');

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        
        long = position.coords.longitude;
        lat = position.coords.latitude;
  
        const link = `https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d13829.032095624527!2d-50.99498272500959!3d-29.943256017104723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-29.9498121!2d-50.978119199999995!4m5!1s0x95190b411058e789%3A0x3dab572cc51b99e4!2sR.%20Dr.%20Luiz%20Bastos%20do%20Prado%2C%202128%20-%20Centro%2C%20Gravata%C3%AD%20-%20RS%2C%2094010-021%2C%20Brasil!3m2!1d${lat}!2d${long}!5e0!3m2!1spt-BR!2sbr!4v1584608422913!5m2!1spt-BR!2sbr`;
        document.getElementById("map").src = link;
        
        let box = document.getElementById("box");
        box.remove();
         
      });
    }
    
  });

  $("body").append(meu_modal);

  $("#fundo_modal, .close").click(function(){ $("#fundo_modal").hide(); });
  $("#meu_modal").click(function(e){ e.stopPropagation(); });
  
});

//Função de navegação pela página
function goTo(event){
  window.scrollTo({
    top: event.data.place,
    behavior:"smooth",
  })
}

//Formulário de contato
function contactSubmited(e){
  e.preventDefault();
  $(".submit-form").html("Enviando...");
  $(".submit-form").attr("disabled", true);

  let data = {
    name: $('.input-nome').val(),
    email: $('.input-mail').val(),
    message: $('.input-msg').val(),
    url: window.location.href
  };

  sendMessage(data);
}


function sendMessage(message){
  $.ajax({
    url: `contact.php`,
    type: "POST",
    data: {'message': message},
    cache: false,
    async: true,
    success: function(response) {
      $(".submit-form").html("Enviar");
      $(".submit-form").attr("disabled", false);
      
      if (response) {
        $("#response-form").html("Mensagem enviada com sucesso!");
      } else {
        $("#response-form").html("Erro no envio da mensagem, tente novamente!");
      }
    }
  })
}




//Estilos da modal
var modal_estilos = 'display: block;'
+'width: 90%; height:70%;'
+'background: #fff; padding: 15px;'
+'border-radius: 5px; padding-top: 30px;'
+'-webkit-box-shadow: 0px 6px 14px -2px rgba(0,0,0,0.75);'
+'-moz-box-shadow: 0px 6px 14px -2px rgba(0,0,0,0.75);'
+'box-shadow: 0px 6px 14px -2px rgba(0,0,0,0.75);'
+'position: fixed;'
+'top: 50%; left: 50%;'
+'transform: translate(-50%,-50%);'
+'z-index: 99999999; text-align: center';

var fundo_modal_estilos = 'top: 0; right: 0;'
+'bottom: 0; left: 0; position: fixed;'
+'background-color: rgba(0, 0, 0, 0.6); z-index: 99999999;'
+'display: none;';

//Modal
var meu_modal = '<div id="fundo_modal" style="'+fundo_modal_estilos+'">'
+'<div id="meu_modal" style="'+modal_estilos+'">'
  +'<h4>Como chegar</h4><br />'
    +'<div class="map-div">'
      +'<iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.485523113965!2d-50.99707218535495!3d-29.936710133233387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95190b411058e789%3A0x3dab572cc51b99e4!2sR.%20Dr.%20Luiz%20Bastos%20do%20Prado%2C%202128%20-%20Centro%2C%20Gravata%C3%AD%20-%20RS%2C%2094010-021!5e0!3m2!1spt-BR!2sbr!4v1584608758162!5m2!1spt-BR!2sbr" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
      +'<div id="box">'
        +'<p>Permita localização para<br> saber como chegar aqui</p>'
      +'</div>'
    +'</div>'
   +'<button type="button" class="close" style="top: 5px; right: 10px; position: absolute; cursor: pointer;"><span>&times;</span></button>'
+'</div></div>';


