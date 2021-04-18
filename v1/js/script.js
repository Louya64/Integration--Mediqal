$(document).ready(function(){
    // $(".slick-prev").html("<i class=\"fas fa-chevron-left\"></i>");
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