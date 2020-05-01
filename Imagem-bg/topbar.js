
var position = $(window).scrollTop();

$(document).on("scroll",function(){

	var scroll = $(window).scrollTop();

	if(window.matchMedia('(max-width: 768px)').matches){
		if(scroll > 100){
			$('.navbar-collapse').css("display","none");
		}
	}

	if(window.matchMedia('(min-width: 769px)').matches){
		if(scroll > 100){
			$('.navbar').css({
				//'background':'rgb(173,48,173)',
				'background-image':'linear-gradient(to bottom, purple, rgba(250,250,250,0))',
				'height':'50px',
			});
			$('.img-logo').css({
				"height":"0",
				"width":"0"
			});
			$('.social').css("margin-left","20%");
		} else {
			$('.navbar').css({
				'background':'transparent',
				'background-image':'linear-gradient(to bottom, purple, rgba(250,250,250,0))',
				'height':'81px',
			});
			$('.img-logo').css({
				"height":"52px",
				"width":"52px"
			});
			$('.social').css("margin-left","10%");
		}
	}

	if(scroll < position || scroll <= 100){
		$('.navbar-collapse').css("display","block");
	}

	position = scroll;

});