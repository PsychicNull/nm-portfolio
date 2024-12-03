/*eslint-env es6*/

/* dropdown menu.js for Nyeema Morgan */

$(document).ready(function() {
    // Function to apply the dropdown state
    function applyDropdownState(dropdownId, isOpen) {
        var $dropdownToggle = $('#' + dropdownId);
        var $dropdownContent = $dropdownToggle.next('.dropdown-content');

        if (isOpen) {
            $dropdownContent.slideDown();
            $dropdownToggle.addClass('dropdown-active');
        } else {
            $dropdownContent.slideUp();
            $dropdownToggle.removeClass('dropdown-active');
        }
    }

    // Function to close all dropdowns
    function closeAllDropdowns(exceptId) {
        $('.dropdown-toggle').each(function() {
            var dropdownId = $(this).attr('id');
            if (dropdownId !== exceptId) {
                applyDropdownState(dropdownId, false);
            }
        });
    }

    // Dropdown toggle click event
    $('.dropdown-toggle').click(function(event) {
        event.stopPropagation(); // Prevents the event from bubbling up the DOM tree

        var dropdownId = $(this).attr('id'); // Ensure each dropdown-toggle has a unique ID
        var isOpen = !$(this).hasClass('dropdown-active');

        // Close all dropdowns except the current one
        closeAllDropdowns(dropdownId);

        // Apply the new state only to the selected dropdown
        applyDropdownState(dropdownId, isOpen);
    });

    // Prevent dropdowns from triggering when clicking inside a dropdown content
    $('.dropdown-content').click(function(event) {
        event.stopPropagation();
    });

    // Function to get the current page's related dropdown ID
    function getCurrentPageDropdownId() {
        var currentPath = window.location.pathname;
        var currentSegments = currentPath.split('/').filter(Boolean);
        var currentFileName = currentSegments.pop(); // Get the last segment (filename)

        var currentPageId = '';
        $('.dropdown-content a').each(function() {
            var linkHref = $(this).attr('href');
            var linkSegments = linkHref.split('/').filter(Boolean);
            var linkFileName = linkSegments.pop(); // Get the last segment (filename)

            if (currentFileName === linkFileName) {
                currentPageId = $(this).closest('.dropdown-content').prev('.dropdown-toggle').attr('id');
                return false; // Break the loop
            }
        });

        return currentPageId;
    }

    // Function to open the dropdown related to the current page
    function openCurrentPageDropdown() {
        var currentPageId = getCurrentPageDropdownId();
        if (currentPageId) {
            applyDropdownState(currentPageId, true);
        }
    }

    // On page load, open the dropdown related to the current page
    openCurrentPageDropdown();
});
