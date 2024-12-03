/*eslint-env es6*/

/* mobile-menu.js for Nyeema Morgan */

$(document).ready(function() {
    // Toggle mobile menu on click or touch
    $('.hamburger-menu').on('click touchstart', function(e) {
        e.preventDefault(); // Prevent default action (useful if it's an anchor tag)
        $(this).toggleClass('active'); // Toggle the 'active' class for the hamburger menu

        // Toggle mobile navigation visibility
        $('.navigation-mobile').toggleClass('active');  
        $('#nav-list-mobile').toggleClass('active'); 
    });

    // Sync hamburger state with window resizing
    $(window).on('resize', function() {
        const isMobile = window.matchMedia('(max-width: 768px)').matches;

        // If resizing happens on mobile and the menu is open, close it
        if (isMobile && $('.navigation-mobile').hasClass('active')) {
            $('.hamburger-menu').removeClass('active'); // Reset hamburger menu icon
            $('.navigation-mobile').removeClass('active'); // Hide mobile navigation
            $('#nav-list-mobile').removeClass('active'); // Hide nav list
        }
    });
});


// $(document).ready(function() {
//     // Toggle mobile menu
//     $('.hamburger-menu').on('click touchstart', function(e) {
//         e.preventDefault(); // Prevent default action (useful if it's an anchor tag)
//         $(this).toggleClass('active'); // Toggle the 'active' class for the hamburger menu

//         // Toggle mobile navigation visibility
//         $('.navigation-mobile').toggleClass('active');  
//         $('#nav-list-mobile').toggleClass('active'); 
//     });
// });
