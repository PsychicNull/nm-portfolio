/*eslint-env es6*/

/* lightbox.js Nyeema Morgan */

$(document).ready(function() {
    let touchStartY = 0;
    let touchEndY = 0;

    // Function to detect a tap action
    function isTapAction() {
        return Math.abs(touchStartY - touchEndY) < 10; // Threshold for detecting a tap vs scroll
    }

    // Combined handler for opening lightbox
    function openLightbox() {
        var src = $(this).attr('src');
        $('#lightbox-image').attr('src', src);
        $('#lightbox').fadeIn();
        $('body').css('overflow', 'hidden');
    }

    // Handle touch start
    $('.lightbox-trigger').on('touchstart', function(e) {
        touchStartY = e.originalEvent.touches[0].clientY;
    });

    // Handle touch end
    $('.lightbox-trigger').on('touchend', function(e) {
        touchEndY = e.originalEvent.changedTouches[0].clientY;

        if (isTapAction()) {
            openLightbox.call(this); // Call the openLightbox function
        }
    });

    // Open lightbox on image click for non-touch devices
    $('.lightbox-trigger').on('click', function(e) {
        // To prevent triggering both click and touchend on touch devices
        if (!('ontouchstart' in window)) {
            openLightbox.call(this);
        }
    });

    // Close lightbox when 'X' is clicked/tapped
    $('#close-lightbox').on('click touchstart', function(e) {
        e.preventDefault();
        $('#lightbox').fadeOut();
        $('body').css('overflow', '');
    });

    // Close lightbox by clicking anywhere outside the image
    $('#lightbox').on('click', function(e) {
        if (e.target.id !== 'lightbox-image') {
            $(this).fadeOut();
            $('body').css('overflow', '');
        }
    });


});