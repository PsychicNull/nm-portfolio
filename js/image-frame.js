/*eslint-env es6*/

$(document).ready(function() {
    let loadingImage = false; // Track loading state
    let currentImage = null; // Track the current image being displayed

    $('.project-link').hover(function() {
        const imageSrc = $(this).data('image-src');

        // If an image is currently loading, return early
        if (loadingImage || currentImage === imageSrc) return;

        // Set loading state to true
        loadingImage = true;

        // Create a new Image object to load the new image
        const img = new Image();
        img.src = imageSrc;

        img.onload = function() {
            // Fade out the current image, then update the source and fade in
            $('#image-display').stop(true, true).fadeOut(300, function() {
                $(this).attr('src', imageSrc).fadeIn(300, function() {
                    loadingImage = false; // Reset loading state
                    currentImage = imageSrc; // Update current image
                });
            });
        };

        img.onerror = function() {
            console.error('Image failed to load:', imageSrc);
            // Optionally, revert to a placeholder image on error
            $('#image-display').stop(true, true).fadeOut(200, function() {
                $(this).attr('src', 'placeholder.jpg').fadeIn(300, function() {
                    loadingImage = false; // Reset loading state
                });
            });
        };
    }, function() {
        // On hover out, fade out the image
        $('#image-display').stop(true, true).fadeOut(200, function() {
            $(this).attr('src', ''); // Clear the image source after fading out
            loadingImage = false; // Reset loading state
            currentImage = null; // Reset current image
        });
    });
});