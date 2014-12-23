/*!
 * Project Name: microp-samsung-mobile-microsite
 * Author: Bang
 */
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 680) {
            $(".scrollToTop").fadeIn();
            $(".product-slider").css("position", "fixed");
        } else {
            $(".scrollToTop").fadeOut();
            $(".product-slider").css("position", "relative");
        }
    });
    $(".scrollToTop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});