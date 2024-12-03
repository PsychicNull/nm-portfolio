/*eslint-env es6*/

$(document).ready(function() {
    $('.side-tab-arrow').on('click', function() {
        $('.side-tab').toggleClass('active'); // Toggle the 'active' class for the sliding effect
    });
});