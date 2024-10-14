/*eslint-env es6*/

/* highlight-current-page.js for Nyeema Morgan */

$(document).ready(function() {
    // Get the current URL
    var currentUrl = window.location.pathname;

    // Log the current URL for debugging
    console.log('Current URL:', currentUrl);

    // Define the mapping of normalized URLs to the navigation items
    var navItems = {
        '/index.html': '#nav-list li:eq(0) a', // Works page (index.html)
        '/html/context.html': '#nav-list li:eq(1) a', // Context page
        '/html/about.html': '#nav-list li:eq(2) a', // About page
    };

    // Function to set the active class
    window.setActiveClass = function(url) {  // Make it a global function
        console.log('Setting active class for:', url); // Debugging line
        url = url.replace(/\/$/, ''); // Remove trailing slash if present
        for (var page in navItems) {
            var link = $(navItems[page]);
            console.log('Comparing with:', page); // Debugging line to see what you're comparing against
            if (url === page) {
                console.log('Highlighting:', navItems[page]); // Debugging line
                link.addClass('active'); // Highlight active link
                link.css('background-size', '100% 100%'); // Ensure background grows
            } else {
                link.removeClass('active'); // Remove active class from others
            }
        }
    };

    // Set the active class on load
    setActiveClass(currentUrl);
    
    // Handle click event on nav links
    $('#nav-list a').on('click', function(event) {
        var href = $(this).attr('href');
        setActiveClass(href); // Update active class on click

        // Optional: Add a short delay before navigation
        setTimeout(function() {
            window.location.href = href; // Navigate to the link
        }, 100); // Adjust timing as needed
    });
});
