
var position = $(window).scrollTop();

$(document).on("scroll",function(){

	var scroll = $(window).scrollTop();

	if(window.matchMedia('(max-width: 768px)').matches){
		if(scroll > 100){
			$('.navbar-collapse').css("display","none");
		}
	}

	if(window.matchMedia('(min-width: 769px)').matches){
		if(scroll > 595){
			$('.navbar').css({
				//'background':'rgb(173,48,173)',
				'background':'rgba(255,255,255,.8)',
				'box-shadow':'-2px 1.5px 20px black',
				'height':'50px',
			});
			$('.img-logo').css({
				"height":"0",
				"width":"0"
			});
			$('.nav-item').css('color','rgba(0,0,0,.7)');
			$('.nav-item:hover').css('color','rgb(0,0,0)');
			$('.active').css('color','rgba(0,0,0,.9)');
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
			$('.nav-item').css('color','rgba(255,255,255,.7)');
			$('.nav-item:hover').css('color','rgb(255,255,255)');
			$('.active').css('color','rgba(255,255,255,.9)');
		}
	}

	if(scroll < position || scroll <= 100){
		$('.navbar-collapse').css("display","block");
	}

	position = scroll;

});