$(document).ready(function(){

    function responsive() {
        if (window.matchMedia("(min-width: 992px)").matches) {
            $("nav").addClass("position-fixed");
            let translateY = $("#carousel_accueil img").height() * 32 / 100;
            // let translateY = ($(window).width() - 993) * 22 / 100;
            $("main").css("margin-top", "-" + translateY + "px");
            $("footer").css("margin-top", "-" + translateY + "px");
            $("#accueil_sect4").addClass("container");
            $(".footer_nav_children_p").css("display", "block");
            $(".footer_nav_children").unbind("click");
            $(window).unbind("click", footerEventResponsiveClear);
    
        } else {
            $("nav").removeClass("position-fixed");
            $("#accueil_sect4").removeClass("container");
            $("main").css("margin-top", "0");
            $("footer").css("margin-top", "0");
    
            $(".footer_nav_children_p").css("display", "none");
            $(".footer_nav_children").bind("click", footerEventResponsive);
            $(window).bind("click", footerEventResponsiveClear);
        }
    }
    
    function footerEventResponsive(e) {
        let $p = $(this).find(".footer_nav_children_p");
        let $this = $(this);
        $this.css("z-index", "2");
        $p.toggle();
        e.stopPropagation();
    }
    
    function footerEventResponsiveClear() {
        $(".footer_nav_children_p").css("display", "none");
        $(".footer_nav_children").css("z-index", "1");
    }

    responsive();

    $(window).on("resize", function() {
        // responsive();
        location.reload();
    });

    $('.accueil_sect3_slider').slick({
        dots: true,
        lazyLoad: 'ondemand',
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint:1500,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint:1199,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint:991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint:767,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });

});