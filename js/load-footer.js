/*eslint-env es6*/

$(document).ready(function() {
    // Function to dynamically load the footer
    function loadFooter() {
        // Determine the path to the footer file based on the current page location
        const pathToFooter = window.location.pathname === '/index.html' ? 'html/footer.html' : 'work-footer.html';

        // Load footer dynamically
        $("#footer-placeholder").load(pathToFooter, function() {
            setPreviousPageLink(); // Dynamically set the "Previous Page" link after footer loads
            applyCustomCursor(); // Apply custom cursor after footer is loaded
        });
    }

    // Function to dynamically set the "Previous Page" link
    function setPreviousPageLink() {
        const referrer = document.referrer;
        const fallbackLink = '/'; // Fallback to home page if there's no referrer
        $(".previous-page a").attr("href", referrer || fallbackLink);
    }

    // Function to apply the custom cursor
    function applyCustomCursor() {
        const isInSubfolder = window.location.pathname.includes('/html/');
        const cursorPath = isInSubfolder ? '../img/cursor/cursor_glove.png' : 'img/cursor/cursor_glove.png';
        
        // Apply custom cursor when hovering over specified elements
        $('a, .previous-page').hover(
            function() {
                $(this).css('cursor', `url(${cursorPath}), auto`);
            }, 
            function() {
                $(this).css('cursor', 'auto');
            }
        );
    }

    // Load the footer with dynamic pathing
    loadFooter();
    
    // Apply custom cursor for existing elements (in case footer is not loaded yet)
    applyCustomCursor();
});

