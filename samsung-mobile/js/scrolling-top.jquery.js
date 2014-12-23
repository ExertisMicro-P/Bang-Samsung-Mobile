/*!
 * Project Name: microp-samsung-mobile-microsite
 * Author: Bang
 */
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1e3) {
            $(".scrollToTop").fadeIn();
        } else {
            $(".scrollToTop").fadeOut();
        }
    });
    $(".scrollToTop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});