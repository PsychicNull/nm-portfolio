/*eslint-env es6*/

$(document).ready(function () {
    // Function to check text overflow in tabs and mark overflowed ones
    function checkTextOverflow() {
        $('#tab-list li').each(function () {
            const $tab = $(this);
            const $link = $tab.find('a');
            const textWidth = $link.outerWidth();
            const tabWidth = $tab.width();

            if (textWidth > tabWidth) {
                $tab.addClass('has-overflow'); // Add class to mark overflowed tabs
            } else {
                $tab.removeClass('has-overflow');
            }
        });
    }

    // Run the overflow check on page load and window resize
    checkTextOverflow();
    $(window).on('resize', checkTextOverflow);

    // Show the first tab and its content by default
    $('.tab-body').hide(); // Hide all tab content areas initially
    $('.tab-body').first().show(); // Show the first tab's content
    $('#tab-list li a').first().addClass('active'); // Mark the first tab as active
    $('#tab-list li').first().addClass('active'); // Mark the first tab as active

    // Make the entire tab clickable by triggering click on nested <a> when <li> is clicked
    $('#tab-list li').on('click', function(event) {
        event.preventDefault();

        const $tab = $(this); // Store the clicked tab
        const $link = $tab.find('a'); // Get the link within the clicked tab
        const index = $tab.index(); // Get the index of the clicked tab

        // Hide all tab content and show the relevant content by index
        $('.tab-body').hide();
        $('.tab-body').eq(index).fadeIn().css('display', 'grid'); // Show the selected tab content

        // Remove active class from all tabs and links, then add to clicked tab and its link
        $('#tab-list li').removeClass('active');
        $('#tab-list li a').removeClass('active');

        $tab.addClass('active'); // Add active class to the clicked tab (li)
        $link.addClass('active'); // Add active class to the link within the clicked tab
    });

    // Show the tab-banner for overflowed tabs on hover
    $('#tab-list li').hover(
        function () {
            const $tab = $(this);
            const $banner = $('.tab-banner'); // Select the single tab-banner outside

            if ($tab.hasClass('has-overflow')) {
                const tabOffset = $tab.position(); // Use .position() for local offset within the parent

                // Set banner text and position
                $banner.text($tab.find('a').text())
                    .css({
                        top: tabOffset.top + $tab.outerHeight(), // Directly below the tab
                        left: tabOffset.left + 8 // Align exactly to the left of the tab
                    });

                // Check if the banner is already visible
                if (!$banner.is(':visible')) {
                    // Set a delay before fading in the banner
                    clearTimeout($tab.data('hoverTimeout')); // Clear any existing timeout
                    const hoverTimeout = setTimeout(() => {
                        $banner.stop(true, true).fadeIn(200); // Smoothly fade in the banner
                    }, 300); // Adjust the delay here (in milliseconds)

                    // Store the timeout ID in the tab element
                    $tab.data('hoverTimeout', hoverTimeout);
                }
            }
        },
        function () {
            const $tab = $(this);
            const $banner = $('.tab-banner');

            // Clear any existing timeout
            clearTimeout($tab.data('hoverTimeout')); 

            // Immediately hide the banner without fading out if moving to another tab
            $banner.stop(true, true).hide(); 
        }
    );

});

