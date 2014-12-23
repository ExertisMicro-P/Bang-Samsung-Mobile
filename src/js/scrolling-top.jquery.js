$(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 680) {
            $('.scrollToTop').fadeIn();
            $('.product-slider').css("position", "fixed");
        } else {
            $('.scrollToTop').fadeOut();
              $('.product-slider').css("position", "relative");
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});
