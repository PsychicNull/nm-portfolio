/* eslint-env es6 */

/* highlight-current-page.js for Nyeema Morgan */

$(document).ready(function() {
    // Get the current URL and normalize it
    var currentUrl = window.location.pathname.replace(/\/$/, ''); // Remove trailing slash

    // Define the mapping of normalized URLs to the navigation items
    var navItems = {
        '/index.html': '#nav-list li:eq(0) a', // Works page (index.html)
        '/html/context.html': '#nav-list li:eq(1) a', // Context page
        // Add more paths if needed
    };

    // Function to set the active class
    window.setActiveClass = function(url) {  // Make it a global function
        url = url.replace(/\/$/, ''); // Remove trailing slash if present
        for (var page in navItems) {
            var link = $(navItems[page]);
            if (url === page) {
                link.addClass('active'); // Highlight active link
            } else {
                link.removeClass('active'); // Remove active class from others
            }
        }
    };

    // Set the active class on load
    setActiveClass(currentUrl);
    
    // Handle click event on nav links
    $('#nav-list a').on('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        var href = $(this).attr('href').replace(/\/$/, ''); // Normalize href by removing trailing slash
        
        // Update the active class
        setActiveClass(href); // Update active class on click

        // Optional: Add a short delay before navigation
        setTimeout(function() {
            window.location.href = href; // Navigate to the link
        }, 100); // Adjust timing as needed
    });
});




// $(document).ready(function() {
//     // Get the current URL
//     var currentUrl = window.location.pathname;

//     // Define the mapping of normalized URLs to the navigation items
//     var navItems = {
//         '/index.html': '#nav-list li:eq(0) a', // Works page (index.html)
//         '/html/context.html': '#nav-list li:eq(1) a', // Context page
//         // '/html/about.html': '#nav-list li:eq(2) a', // About page
//     };

//     // Function to set the active class
//     window.setActiveClass = function(url) {  // Make it a global function
//         url = url.replace(/\/$/, ''); // Remove trailing slash if present
//         for (var page in navItems) {
//             var link = $(navItems[page]);
//             if (url === page) {
//                 link.addClass('active'); // Highlight active link
//                 // link.css('background-size', '100% 100%'); // Ensure background grows
//             } else {
//                 link.removeClass('active'); // Remove active class from others
//             }
//         }
//     };

//     // Set the active class on load
//     setActiveClass(currentUrl);
    
//     // Handle click event on nav links
//     $('#nav-list a').on('click', function(event) {
//         var href = $(this).attr('href');
//         setActiveClass(href); // Update active class on click

//         // Optional: Add a short delay before navigation
//         setTimeout(function() {
//             window.location.href = href; // Navigate to the link
//         }, 100); // Adjust timing as needed
//     });
// });
