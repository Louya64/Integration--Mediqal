$(document).ready(function(){

    if (window.matchMedia("(min-width: 992px)").matches) {
        $("nav").addClass("position-fixed");
        let translateY = ($(window).width() - 992) * 26.9 / 100;
        $("main").css("transform", "translate(0, -" + translateY + "px)");
        $("footer").css("transform", "translate(0, -" + translateY + "px)");
        $("#accueil_sect4").addClass("container");
        $(".footer_nav_children_p").removeClass("d-none");
        $(".footer_nav_children").unbind("click");

    } else {
        $("nav").removeClass("position-fixed");
        $("main").css("transform", "none");
        $("footer").css("transform", "none");
        $("#accueil_sect4").removeClass("container");

        //à partir breakpoint 992, d-none sur les paragraphes du footer et toogle au click
        $(".footer_nav_children_p").addClass("d-none");
        $(".footer_nav_children").bind("click", function() {
            $(".footer_nav_children").removeClass("active");
            $(this).addClass("active");
            $(".footer_nav_children:not(\".active\") .footer_nav_children_p").addClass("d-none");
            $(".footer_nav_children:not(\".active\")").css("z-index", "1");
            ($(this).find("div")).toggleClass("d-none");
            if ($(this).css("z-index") == 1) {
                $(this).css("z-index", "2");
            } else {
                $(this).css("z-index", "1");
            }
        });
    }

    $(window).on("resize", function() {
        if (window.matchMedia("(min-width: 992px)").matches) {
            $("nav").addClass("position-fixed");
            translateY = ($(window).width() - 992) * 26.9 / 100;
            $("main").css("transform", "translate(0, -" + translateY + "px)");
            $("footer").css("transform", "translate(0, -" + translateY + "px)");
            $("#accueil_sect4").addClass("container");
            $(".footer_nav_children_p").removeClass("d-none");
            $(".footer_nav_children").unbind("click");

        } else {
            $("nav").removeClass("position-fixed");
            $("main").css("transform", "none");
            $("footer").css("transform", "none");
            $("#accueil_sect4").removeClass("container");

            //à partir breakpoint 992, d-none sur les paragraphes du footer et toogle au click
            $(".footer_nav_children_p").addClass("d-none");
            $(".footer_nav_children").bind("click", function() {
                $(".footer_nav_children").removeClass("active");
                $(this).addClass("active");
                $(".footer_nav_children:not(\".active\") .footer_nav_children_p").addClass("d-none");
                $(".footer_nav_children:not(\".active\")").css("z-index", "1");
                ($(this).find("div")).toggleClass("d-none");
                if ($(this).css("z-index") == 1) {
                    $(this).css("z-index", "2");
                } else {
                    $(this).css("z-index", "1");
                }
            });
        }
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