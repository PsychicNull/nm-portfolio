/*eslint-env es6*/

$(document).ready(function() {
    // Show the About tab by default
    $('.tab-body-03').css('display', 'grid'); // Show the Discourse content
    $('.tab-body-01').css('display', 'none'); // Hide the Exhibitions content
    $('.tab-body-02').css('display', 'none'); // Hide the Discourse content
    $('#tab-list li:eq(0) a').addClass('active'); // Mark Exhibitions as active

    // Handle click event for the About tab
    $('#tab-list li:eq(0) a').on('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        $('.tab-body-03').fadeIn().css('display', 'grid'); // Show Exhibitions content
        $('.tab-body-01').fadeOut().css('display', 'none'); // Hide Exhibitions content
        $('.tab-body-02').fadeOut().css('display', 'none'); // Hide Discourse content
        $('#tab-list li a').removeClass('active'); // Remove active class from all tabs
        $(this).addClass('active'); // Add active class to the clicked tab
    });

    // Handle click event for the Exhibitions tab
    $('#tab-list li:eq(1) a').on('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        $('.tab-body-01').fadeIn().css('display', 'grid'); // Show Exhibitions content
        $('.tab-body-02').fadeOut().css('display', 'none'); // Hide Discourse content
        $('.tab-body-03').fadeOut().css('display', 'none'); // Hide About content
        $('#tab-list li a').removeClass('active'); // Remove active class from all tabs
        $(this).addClass('active'); // Add active class to the clicked tab
    });

    // Handle click event for the Discourse tab
    $('#tab-list li:eq(2) a').on('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        $('.tab-body-01').fadeOut().css('display', 'none'); // Hide Exhibitions content
        $('.tab-body-02').fadeIn().css('display', 'grid'); // Show Discourse content
        $('.tab-body-03').fadeOut().css('display', 'none'); // Hide About content
        $('#tab-list li a').removeClass('active'); // Remove active class from all tabs
        $(this).addClass('active'); // Add active class to the clicked tab
    });
});


