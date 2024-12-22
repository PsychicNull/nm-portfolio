/*eslint-env es6*/

$(document).ready(function() {
    // Preload images
    var imageSources = [];
    $('.tab-work-title').each(function() {
        var imageSrc = $(this).data('image-src');
        if (imageSrc) {
            imageSources.push(imageSrc);
        }
    });

    // Function to preload images
    function preloadImages(sources) {
        $(sources).each(function() {
            var img = new Image();
            img.src = this;
        });
    }
    preloadImages(imageSources);

    // Fade to specific image from the default image
    function fadeToSpecificImage(imageSrc) {
        $('.gallery-image').attr('src', 'img/Works/00-default-image.png')
            .css('border-color', '#adadad').stop(true, true).fadeIn(0);

        $('.gallery-image').attr('src', imageSrc).css('border-color', 'black')
            .stop(true, true).fadeIn(500);
    }

    // Show a specific tab and update the image
    function showTab(index) {
        $('.tab-body').hide().eq(index).fadeIn().css('display', 'grid');
        const specificImageSrc = $('.tab-body').eq(index).find('.tab-work-title').first().data('image-src');
        fadeToSpecificImage(specificImageSrc);

        // Remove active class from all tabs and links, then add to clicked tab and its link
        $('#tab-list li').removeClass('active');
        $('#tab-list li a').removeClass('active');
        
        // Add active class to the current tab
        $('#tab-list li').eq(index).addClass('active');
        $('#tab-list li').eq(index).find('a').addClass('active');
    }

    // Check sessionStorage for last active tab on page load
    const lastActiveTab = sessionStorage.getItem('activeTabIndex');
    if (lastActiveTab !== null) {
        showTab(parseInt(lastActiveTab)); // Show the last active tab
    } else {
        // Initialize the first tab on page load if no active tab is set
        showTab(0);
        sessionStorage.setItem('activeTabIndex', 0); // Set the first tab as active on first visit
    }

    // Click event handler for tabs
    $('#tab-list li').on('click', function(e) {
        e.preventDefault();
        const index = $(this).index();
        showTab(index);
        sessionStorage.setItem('activeTabIndex', index); // Save the active tab index
    });

    // Check text overflow in tabs and mark overflowed ones
    function checkTextOverflow() {
        $('#tab-list li').each(function() {
            const $tab = $(this);
            const $link = $tab.find('a');
            const textWidth = $link.outerWidth();
            const tabWidth = $tab.width();

            if (textWidth > tabWidth) {
                $tab.addClass('has-overflow');
            } else {
                $tab.removeClass('has-overflow');
            }
        });
    }

    // Run the overflow check on page load and window resize
    checkTextOverflow();
    $(window).on('resize', checkTextOverflow);

    // Show the tab-banner for overflowed tabs on hover
    $('#tab-list li').hover(
        function() {
            const $tab = $(this);
            const $banner = $('.tab-banner');

            if ($tab.hasClass('has-overflow')) {
                const tabOffset = $tab.position();
                $banner.text($tab.find('a').text())
                    .css({ top: tabOffset.top + $tab.outerHeight(), left: tabOffset.left + 8 });

                if (!$banner.is(':visible')) {
                    clearTimeout($tab.data('hoverTimeout'));
                    const hoverTimeout = setTimeout(() => {
                        $banner.stop(true, true).fadeIn(200);
                    }, 300);
                    $tab.data('hoverTimeout', hoverTimeout);
                }
            }
        },
        function() {
            const $tab = $(this);
            const $banner = $('.tab-banner');
            clearTimeout($tab.data('hoverTimeout'));
            $banner.stop(true, true).hide();
        }
    );
});




// $(document).ready(function() {
//     // Preload images
//     var imageSources = [];
//     $('.tab-work-title').each(function() {
//         var imageSrc = $(this).data('image-src');
//         if (imageSrc) {
//             imageSources.push(imageSrc);
//         }
//     });

//     // Function to preload images
//     function preloadImages(sources) {
//         $(sources).each(function() {
//             var img = new Image();
//             img.src = this;
//         });
//     }
//     preloadImages(imageSources);

//     // Fade to specific image from the default image
//     function fadeToSpecificImage(imageSrc) {
//         $('.gallery-image').attr('src', 'img/Works/00-default-image.png')
//             .css('border-color', '#adadad').stop(true, true).fadeIn(0);

//         $('.gallery-image').attr('src', imageSrc).css('border-color', 'black')
//             .stop(true, true).fadeIn(500);
//     }

//     // Show a specific tab and update the image
//     function showTab(index) {
//         $('.tab-body').hide().eq(index).fadeIn().css('display', 'grid');
//         const specificImageSrc = $('.tab-body').eq(index).find('.tab-work-title').first().data('image-src');
//         fadeToSpecificImage(specificImageSrc);

//         // Remove active class from all tabs and links, then add to clicked tab and its link
//         $('#tab-list li').removeClass('active');
//         $('#tab-list li a').removeClass('active');
        
//         // Add active class to the current tab
//         $('#tab-list li').eq(index).addClass('active');
//         $('#tab-list li').eq(index).find('a').addClass('active');
//     }

//     // Check localStorage for last active tab on page load
//     const lastActiveTab = localStorage.getItem('activeTabIndex');
//     if (lastActiveTab !== null) {
//         showTab(parseInt(lastActiveTab)); // Show the last active tab
//     } else {
//         // Optionally, initialize the first tab on page load
//         $('#tab-list li').first().trigger('click');
//     }

//     // Click event handler for tabs
//     $('#tab-list li').on('click', function(e) {
//         e.preventDefault();
//         const index = $(this).index();
//         showTab(index);
//         localStorage.setItem('activeTabIndex', index); // Save the active tab index
//     });

//     // Check text overflow in tabs and mark overflowed ones
//     function checkTextOverflow() {
//         $('#tab-list li').each(function() {
//             const $tab = $(this);
//             const $link = $tab.find('a');
//             const textWidth = $link.outerWidth();
//             const tabWidth = $tab.width();

//             if (textWidth > tabWidth) {
//                 $tab.addClass('has-overflow');
//             } else {
//                 $tab.removeClass('has-overflow');
//             }
//         });
//     }

//     // Run the overflow check on page load and window resize
//     checkTextOverflow();
//     $(window).on('resize', checkTextOverflow);

//     // Show the tab-banner for overflowed tabs on hover
//     $('#tab-list li').hover(
//         function() {
//             const $tab = $(this);
//             const $banner = $('.tab-banner');

//             if ($tab.hasClass('has-overflow')) {
//                 const tabOffset = $tab.position();
//                 $banner.text($tab.find('a').text())
//                     .css({ top: tabOffset.top + $tab.outerHeight(), left: tabOffset.left + 8 });

//                 if (!$banner.is(':visible')) {
//                     clearTimeout($tab.data('hoverTimeout'));
//                     const hoverTimeout = setTimeout(() => {
//                         $banner.stop(true, true).fadeIn(200);
//                     }, 300);
//                     $tab.data('hoverTimeout', hoverTimeout);
//                 }
//             }
//         },
//         function() {
//             const $tab = $(this);
//             const $banner = $('.tab-banner');
//             clearTimeout($tab.data('hoverTimeout'));
//             $banner.stop(true, true).hide();
//         }
//     );
// });