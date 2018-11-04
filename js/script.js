$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 170) {
            $('.navbar').addClass('solid');
            $('.fa-bars').addClass('toggler-black');
        } 
        else {
            $('.navbar').removeClass('solid');
            $('.fa-bars').removeClass('toggler-black');
        }
    });
});

var typed2 = new Typed('#typed-text', {
    strings: ['A WEB DEVELOPER', 'A TECNOLOGY ENTHUSIAST', 'A COFFEE ADDICT', 'A BOARDGAMES LOVER'],
    typeSpeed: 110,
    cursorChar: "_",
    fadeOut: true,
    loop: true
  });