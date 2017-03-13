$(document).ready(function(){
    $(".slickCarouselWrapper").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        accessibility: false,
        arrows: false,
        dots: true,
    });


    $(".menuButton").on('click', function(){
        if($(window).width() <= 425) {
            if ($('#nav').css('display') == 'none'){
                $("#nav").insertAfter($("header"));
                $("#nav").css({
                    "width": "100%",
                    "display": "flex",
                    "flex-direction": "column",
                    "background-color": "#19c3c1",
                    "margin": "0",
                    "padding-bottom": "20px"
                });
                $('.navLinks').css({
                    "font-size": "6.5vw"
                })
            } else {
                $("#nav").css({
                    "display": "none"
                })
            }
        return false;
        } else {
        $("#nav").toggle();
        return false
        }
    });


   $('.slick-dots').insertAfter('.carouselImg');


    $("#defaultValue").addClass("active");
    $("#defaultValue").siblings('.content').slideDown(200);
    $(".set > a").on("click", function(event){
        event.preventDefault();
        if($(this).hasClass('active')){
            $(this).removeClass("active");
            $(this).siblings('.content').slideUp(200);
            $(".set > a img").attr("src", "img/down-arrow.svg");
        }else{
            $(".set > a img").attr("src", "img/down-arrow.svg");
            $(this).find("img").attr("src", "img/up-arrow.svg");
            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $('.content').slideUp(200);
            $(this).siblings('.content').slideDown(200);
        }
    });


    $("a[href^=#]").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

