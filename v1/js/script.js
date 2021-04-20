$(document).ready(function(){

    $(window).on("resize", function() {
        if (window.matchMedia("(min-width: 992px)").matches) {
            $("nav").addClass("position-fixed");
            let translateY = (($(window).width()) * 250 / 928) - (992 * 250 / 928);
            $("main").css("transform", "translate(0, -" + translateY + "px)");
        } else {
            $("nav").removeClass("position-fixed");
            $("main").css("transform", "none");
        }
    });

    $('.accueil_sect3_slider').slick({
        dots: true,
        lazyLoad: 'ondemand',
        slidesToShow: 5,
        slidesToScroll: 1
    });
    $(".slick-dots li").html("•").css("color", "rgb(46, 167, 176)");
    $(".slick-prev").html("<i class=\"fas fa-chevron-left\"></i>");
    $(".slick-next").html("<i class=\"fas fa-chevron-right\"></i>");
  });