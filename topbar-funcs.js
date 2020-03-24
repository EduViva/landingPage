var doed = 1;
$(document).on("scroll",function(){

    if($(document).scrollTop()>100){ //QUANDO O SCROLL PASSAR DOS 100px DO TOPO
        $(".logo-img").remove();
        $("header").css({
            "height" : "60px",
        });
        
        //Com scroll e tela de pc
        if (window.matchMedia('(min-width: 767px)').matches) {
            $("header h1").css("margin-top","8px");
        } else {
            $("header h1").css("margin-top","15px");
        }
        doed = 0;
    } else if (doed != 1) {
        $(".logo").append("<img class='logo-img' src='sources/logo.png' alt='logo bower'>");
        $("header").css({
            "background" : "0",
            "height" : "90px",
            "background-image" : "linear-gradient(to bottom, purple, rgba(250,250,250,0))",
            "color" : "black"
        });

        //Sem scroll e tela de pc
        if (window.matchMedia('(min-width: 767px)').matches) {
            $("header h1").css("margin-top","19px");
            $("header ul li button").css("color","black");
        } else {
            $("header h1").css("margin-top","19px");
        }
        doed = 1;
    }
});

$(function(){
    mediaQuery();
    $("#menu-icon").click(function(){ return openMenu()});
    $("#close").click(function(){ return closeMenu()});
})

function mediaQuery(){
    if (window.matchMedia('(max-width: 767px)').matches) {
        $("#nav-items").append($(".social-ul"));
        $("#nav-items ul li a").css({"margin-left" : "4.5rem"});  
        $("#nav-items img").css({"height":"1.5rem"});  
        $("#nav-items #insta").css({"margin-left" : "-3rem"});  
    } else {
        $("#close").remove();
    }
}

function openMenu(){
    $("#nav-items").css("display","block");
    $("#menu-icon").css("display","none");
}
function closeMenu(){
    $("#nav-items").css("display","none");
    $("#menu-icon").css("display","block");
    //$("#nav-items").css("animation","openMenu 1s linear infinite alternate;")
}
