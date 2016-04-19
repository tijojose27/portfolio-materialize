$(function () {
    // MAIN SITE FADING 

    $('body').css('opacity', '0').fadeTo(3000, 1, 'swing');

    //JAVASCRIPT HACK TO LESSEN SCREEN JUMPING in mobile devices
    var bg = jQuery("#cover");
    jQuery(window).resize("resizeBackground");
    function resizeBackground() {
        bg.height(jQuery(window).height() + 60);
    }
    resizeBackground();

    //TRANSITION IN MAIN SECTION  --not implementing cuz cant get it to work--
    /*
    setTimeout(function () {
        $('#cover').chocolate({
            images: ['../Images/Background/cuttree.jpg', '../Images/Background/kitchen.jpg', '../Images/Background/tree_alter.jpg'
                , '../Images/Background/walkway.jpg', '../Images/Background/bath.jpg'],
            interval: 4000,
            speed: 2000
        });
    },5000);
    */

    //ACTIVATING SLIDER IN NAVBAR
    $(".button-collapse").sideNav();

});
