$(document).ready(function(){

    function footerEventResponsive() {
        let $p = $(this).find(".footer_nav_children_p");
        let $this = $(this);
        console.log("$this: ");
        console.log($this);
        $(".footer_nav_children").not($this).css("z-index", "1");
        $(".footer_nav_children_p").not($p).css("display", "none");
        $this.css("z-index", "2");
        $p.toggle();
        
    }

    function responsive() {
        // if ($(window).width() > 974) { // = le breakpoint 992 de bootstrap - barre défilement?
        if (window.matchMedia("(min-width: 992px)").matches) {
            $("nav").addClass("position-fixed");
            let translateY = ($(window).width() - 993) * 22 / 100;
            $("main").css("margin-top", "-" + translateY + "px");
            $("footer").css("margin-top", "-" + translateY + "px");
            $("#accueil_sect4").addClass("container");
            $(".footer_nav_children_p").css("display", "block");
            $(".footer_nav_children").unbind("click");
    
        } else {
            $("nav").removeClass("position-fixed");
            $("main").css("transform", "none");
            $("footer").css("transform", "none");
            $("#accueil_sect4").removeClass("container");
    
            //à partir breakpoint 992, d-none sur les paragraphes du footer et toogle au click
            $(".footer_nav_children_p").css("display", "none");
            $(".footer_nav_children").bind("click", footerEventResponsive);
        }
    }

    responsive();

    $(window).on("resize", function() {
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