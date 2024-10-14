/*eslint-env es6*/

$(document).ready(function() {
    // Clone the marquee content for smooth infinite effect
    $('.marquee__content').each(function() {
        $(this).clone().appendTo('.marquee');
    });

    // Set the animation duration based on the content width
    var marqueeWidth = $('.marquee__content').outerWidth();
    var animationDuration = (marqueeWidth / 100) * 10; // Adjust speed multiplier as necessary

    $('.marquee__content').css('animationDuration', animationDuration + 's');
});