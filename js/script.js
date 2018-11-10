$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 150) {
            $('.navbar').addClass('solid');
            $('.fa-bars').addClass('toggler-black');
        } 
        else {
            $('.navbar').removeClass('solid');
            $('.fa-bars').removeClass('toggler-black');
        }
    });
});

// Smooth Scroll
let anchorlinks = document.querySelectorAll('a[href^="#"]')
 
for (let item of anchorlinks) { 
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}

var typed2 = new Typed('#typed-text', {
    strings: ['A WEB DEVELOPER', 'A TECNOLOGY ENTHUSIAST', 'A COFFEE ADDICT', 'A BOARDGAMES LOVER'],
    typeSpeed: 110,
    cursorChar: "_",
    fadeOut: true,
    loop: true
  });