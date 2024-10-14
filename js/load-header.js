/*eslint-env es6*/

$(document).ready(function() {
    // Function to dynamically load the header
    function loadHeader() {
        const pathToHeader = window.location.pathname === '/index.html' ? 'html/header.html' : 'header.html';

        $("#header-placeholder").load(pathToHeader, function() {
            applyCustomCursor();
            checkScreenSize();
            toggleMobileMenu();

            // Set the active class after the header is loaded
            const currentUrl = window.location.pathname;
            console.log('Current URL:', currentUrl);
            setActiveClass(currentUrl);
        });
    }

    // Load the header with dynamic pathing
    loadHeader();

    // Function to apply the custom cursor
    function applyCustomCursor() {
        const isInSubfolder = window.location.pathname.includes('/html/');
        const cursorPath = isInSubfolder ? '../img/cursor/cursor_glove.png' : 'img/cursor/cursor_glove.png';
        
        $('a, .dropdown-toggle, .hamburger-menu').hover(
            function() {
                $(this).css('cursor', `url(${cursorPath}), auto`);
            }, 
            function() {
                $(this).css('cursor', 'auto'); // Reset to default
            }
        );

        $('body').hover(
            function() {
                $(this).css('cursor', `url(${cursorPath}), auto`);
            }, 
            function() {
                $(this).css('cursor', 'auto'); // Reset to default
            }
        );
    }

    // Function to toggle mobile menu
    function toggleMobileMenu() {
        const navList = $('#nav-list');
        const hamburgerMenu = $('.hamburger-menu');

        hamburgerMenu.on('click', function () {
            $(this).toggleClass('active'); // Toggle hamburger menu animation
            navList.toggleClass('active'); // Toggle mobile navigation visibility
            $('.navigation').toggleClass('active'); // Additional mobile nav toggle
        });
    }

    // Function to adjust behavior based on screen width
    function checkScreenSize() {
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        const navList = $('#nav-list');

        if (isMobile) {
            // Show hamburger, hide desktop menu
            $('.hamburger-menu').show();
            navList.removeClass('active'); // Ensure desktop menu isn't shown
        } else {
            // Hide hamburger, show desktop menu
            $('.hamburger-menu').hide();
            navList.addClass('active'); // Make sure desktop menu is visible
            $('.navigation').removeClass('active'); // Ensure mobile-specific classes are removed
        }
    }

    // Recheck screen size when the window is resized
    $(window).on('resize', checkScreenSize);
});
