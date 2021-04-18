$(document).ready(function(){
    // $(".slick-prev").html("<i class=\"fas fa-chevron-left\"></i>");
    $('.accueil_sect3_slider').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 6,
        slidesToScroll: 1
    });
    $(".slick-prev").html("<i class=\"fas fa-chevron-left\"></i>");
    $(".slick-next").html("<i class=\"fas fa-chevron-right\"></i>");
  });