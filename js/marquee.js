/*eslint-env es6*/

$(document).ready(function () {
    // Clone the marquee content for smooth infinite effect
    $('.marquee__content').each(function () {
        $(this).clone().appendTo('.marquee');
    });

    // Set animation duration dynamically based on content width
    $('.marquee__content').each(function () {
        var marqueeWidth = $(this).outerWidth();
        var animationDuration = (marqueeWidth / 100) * 10; // Adjust speed multiplier as necessary
        $(this).css('animation-duration', animationDuration + 's');
    });

    // Pause and resume animation on hover
    $('footer').hover(
        function () {
            $(this).find('.marquee__content').css('animation-play-state', 'paused');
        },
        function () {
            $(this).find('.marquee__content').css('animation-play-state', 'running');
        }
    );
});



// $(document).ready(function() {
//     // Clone the marquee content for smooth infinite effect
//     $('.marquee__content').each(function() {
//         $(this).clone().appendTo('.marquee');
//     });

//     // Set the animation duration based on the content width
//     var marqueeWidth = $('.marquee__content').outerWidth();
//     var animationDuration = (marqueeWidth / 100) * 10; // Adjust speed multiplier as necessary

//     $('.marquee__content').css('animationDuration', animationDuration + 's');
// });