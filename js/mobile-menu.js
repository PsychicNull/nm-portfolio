/*eslint-env es6*/

/* mobile-menu.js for Nyeema Morgan */

$(document).ready(function() {
    // Toggle mobile menu
    $('.hamburger-menu').on('click touchstart', function(e) {
        e.preventDefault(); // Prevent default action (useful if it's an anchor tag)
        $(this).toggleClass('active'); // Toggle the 'active' class for the hamburger menu
        $('.navigation').toggleClass('active'); // Toggle the 'active' class for the sidebar
        $('#nav-list').toggleClass('active'); // Toggle the 'active' class for the sidebar

    });
});
