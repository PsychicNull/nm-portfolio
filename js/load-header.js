/*eslint-env es6*/

$(document).ready(function() {
    // Function to dynamically load the header
    function loadHeader() {
        const pathToHeader = window.location.pathname === '/index.html' ? 'html/header.html' : 'header.html';

        // Load header dynamically
        $("#header-placeholder").load(pathToHeader, function() {
            applyCustomCursor(); // Apply custom cursor after header is loaded
            checkScreenSize(); // Adjust the layout based on the screen size
            toggleMobileMenu(); // Ensure mobile menu works after loading

            // Set the active class after the header is loaded
            const currentUrl = window.location.pathname;
            console.log('Current URL:', currentUrl);
            setActiveClass(currentUrl); // Set active class for the current page
        });
    }

    // Load the header with dynamic pathing
    loadHeader();

    // Function to apply the custom cursor
    function applyCustomCursor() {
        const isInSubfolder = window.location.pathname.includes('/html/');
        const cursorPath = isInSubfolder ? '../img/cursor/cursor_glove.png' : 'img/cursor/cursor_glove.png';
        
        // Apply custom cursor when hovering over specified elements
        $('a, .dropdown-toggle, .hamburger-menu').hover(
            function() {
                $(this).css('cursor', `url(${cursorPath}), auto`);
            }, 
            function() {
                $(this).css('cursor', 'auto');
            }
        );

        $('body').hover(
            function() {
                $(this).css('cursor', `url(${cursorPath}), auto`);
            }, 
            function() {
                $(this).css('cursor', 'auto');
            }
        );
    }

    // Function to toggle mobile menu
    function toggleMobileMenu() {
        const navList = $('#nav-list');
        const hamburgerMenu = $('.hamburger-menu');
        const navigationMobile = $('.navigation-mobile');
        
        // Toggle mobile menu on hamburger click
        hamburgerMenu.on('click', function () {
            $(this).toggleClass('active'); // Toggle hamburger menu animation
            navigationMobile.toggleClass('active'); // Toggle mobile nav visibility
            navList.toggleClass('active'); // Toggle mobile menu items visibility
        });
    }

    // Function to adjust behavior based on screen width
    function checkScreenSize() {
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        const navList = $('#nav-list');
        const navigationMobile = $('.navigation-mobile');
        
        if (isMobile) {
            // On mobile: show hamburger, hide desktop menu
            $('.hamburger-menu').show();
            navList.removeClass('active'); // Hide desktop menu
            navigationMobile.removeClass('active'); // Hide mobile menu by default
        } else {
            // On desktop: hide hamburger, show desktop menu
            $('.hamburger-menu').hide();
            navList.addClass('active'); // Show desktop menu
            navigationMobile.removeClass('active'); // Hide mobile menu
        }
    }

    // Recheck screen size when the window is resized
    $(window).on('resize', checkScreenSize);

});
