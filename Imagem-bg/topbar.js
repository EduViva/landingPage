
var position = $(window).scrollTop();

$(document).on("scroll",function(){

	var scroll = $(window).scrollTop();

	if (scroll > 100){ //QUANDO O SCROLL PASSAR DOS 100px DO TOPO
	
		if (window.matchMedia('(max-width: 768px)').matches){
			$('.navbar-collapse').css("display","none");
		}

		if(scroll < position){
			$('.navbar-collapse').css("display","block");
		}

		position = scroll;

	} else {
		$('.navbar-collapse').css("display","block");
	}

});