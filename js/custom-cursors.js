/*eslint-env es6*/

$(document).ready(function() {
    $('.vertical-swiper .swiper-button-prev').hover(
        function() { // On mouse enter
            $(this).css('cursor', 'url(../img/cursor/cursor_glove_left_32_01.png) 10 10, auto');
        }, 
        function() { // On mouse leave
            $(this).css('cursor', 'auto'); // Reset cursor
        }
    );

    $('.vertical-swiper .swiper-button-next').hover(
        function() { // On mouse enter
            $(this).css('cursor', 'url(../img/cursor/cursor_glove_right_32_01.png) 10 10, auto');
        }, 
        function() { // On mouse leave
            $(this).css('cursor', 'auto'); // Reset cursor
        }
    );
    
    $('.horizontal-swiper .swiper-button-prev').hover(
        function() { // On mouse enter
            $(this).css('cursor', 'url(../img/cursor/cursor_glove_left_32_01.png) 10 10, auto');
        }, 
        function() { // On mouse leave
            $(this).css('cursor', 'auto'); // Reset cursor
        }
    );

    $('.horizontal-swiper .swiper-button-next').hover(
        function() { // On mouse enter
            $(this).css('cursor', 'url(../img/cursor/cursor_glove_right_32_01.png) 10 10, auto');
        }, 
        function() { // On mouse leave
            $(this).css('cursor', 'auto'); // Reset cursor
        }
    );
    
    $('.side-tab').hover(
        function() { // On mouse enter
            $(this).css('cursor', 'url(img/cursor/cursor_glove.png), auto');
        }, 
        function() { // On mouse leave
            $(this).css('cursor', 'auto'); // Reset cursor
        }
    );

    // Apply custom cursor for links and specific elements
    $('a, .dropdown-toggle, .hamburger-menu').hover(
        function() { // On mouse enter
            $(this).css('cursor', 'url(img/cursor/cursor_glove.png) 10 10, auto');
        }, 
        function() { // On mouse leave
            $(this).css('cursor', 'auto'); // Reset cursor
        }
    );

    // Optional: Apply custom cursor for the entire body only when no other element is hovered
    $('body').hover(
        function() { // On mouse enter
            $(this).css('cursor', 'url(img/cursor/cursor_glove.png) 10 10, auto');
        }, 
        function() { // On mouse leave
            $(this).css('cursor', 'auto'); // Reset cursor
        }
    );
});
