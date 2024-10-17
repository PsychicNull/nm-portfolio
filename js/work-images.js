/*eslint-env es6*/

$(document).ready(function() {
    // Preload images on page load
    var imageSources = []; // Array to hold the image URLs
    $('.project-link').each(function() {
        var imageSrc = $(this).data('image-src');
        if (imageSrc) {
            imageSources.push(imageSrc); // Push the image source into the array
        }
    });

    // Preload images
    function preloadImages(sources) {
        $(sources).each(function() {
            var img = new Image(); // Create a new Image object
            img.src = this; // Set the source to preload the image
        });
    }

    preloadImages(imageSources); // Call the preload function

    // Function to handle hover on project links
    $('.project-link').on('mouseenter', function() {
        var imageSrc = $(this).data('image-src'); // Get the image source from data attribute
        var imageEye = $('.image-eye');           // Target the image container

        // Check if an img tag already exists, if not, create one
        if (imageEye.find('img').length === 0) {
            imageEye.append('<img src="" alt="Project Image">'); // Add an img element if missing
        }

        // Set the new image source directly as it's already preloaded
        imageEye.find('img').attr('src', imageSrc);

        // Add the visible class to trigger the animation
        imageEye.addClass('visible');
    });

    // Clear image when the mouse leaves the project link
    $('.project-link').on('mouseleave', function() {
        var imageEye = $('.image-eye');
        imageEye.find('img').attr('src', ''); // Clear the image when no project is hovered

        // Remove the visible class to reset the animation
        imageEye.removeClass('visible');
    });
});








/*$(document).ready(function() {
    $(".project-link").hover(function(e) {
        e.preventDefault();

        // Create the image-circle
        const imageCircle = $('<div class="image-circle"></div>');

        // Set a random position within the image frame
        const frame = $('.image-frame');
        const frameWidth = frame.width();
        const frameHeight = frame.height();

        const x = Math.random() * (frameWidth - 150); // Adjust for 150px diameter
        const y = Math.random() * (frameHeight - 150); // Adjust for 150px diameter

        // Set the background image to the one from data-image-src
        const imageSrc = $(this).data('image-src');
        console.log("Image source (relative path): ", imageSrc); // Check the image source

        imageCircle.css({
            left: x + 'px',
            top: y + 'px',
            backgroundImage: `url("${imageSrc}")`, // Ensure proper URL formatting
            backgroundSize: 'cover', // Ensure the image covers the circle
            backgroundPosition: 'center', // Center the background image
            position: 'absolute', // Ensure it's positioned correctly within the frame
            borderRadius: '50%', // Make it a circle
            zIndex: 10, // Ensure it appears above other content
            display: 'block'
        });
        
        console.log("CSS applied: ", imageCircle.css("background-image")); // Log the applied background image

        frame.append(imageCircle);

        // Fade out the circle after 25 seconds
        setTimeout(function() {
            imageCircle.fadeOut(400, function() {
                $(this).remove(); // Remove it from the DOM after fading out
            });
        }, 5000);
    }, function() {
        // Prevent creating circles on mouse leave
    });
});*/


/*$(document).ready(function() {
    $(".project-link").hover(function(e) {
        e.preventDefault();

        // Get the image source from data-image-src
        const imageSrc = $(this).data('image-src');
        console.log("image source: ", imageSrc);

        // Preload the image
        const img = new Image();
        img.src = imageSrc;

        // Once the image is fully loaded, execute the animation
        img.onload = function() {
            // Create the image-eye container
            const imageEye = $('<div class="image-eye"></div>');

            // Create a separate div for the background image
            const backgroundDiv = $('<div class="background-image"></div>');
            backgroundDiv.css({
                backgroundImage: `url("${imageSrc}")`, // Set the preloaded image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
                //borderRadius: '50%' // Make it round
            });

            // Set a random position for the eye within the image frame
            const frame = $('.image-frame');
            const frameWidth = frame.width();
            const frameHeight = frame.height();
            const circleSize = 150; // Assuming each circle is 150x150px

            // Generate random x and y positions within the frame bounds
            const x = Math.random() * (frameWidth - circleSize);
            const y = Math.random() * (frameHeight - circleSize);

            // Set the initial state for the image-eye
            imageEye.css({
                left: x + 'px',
                top: y + 'px',
                width: '0',
                height: '0', // Start as a small point
                position: 'absolute',
                display: 'block',
                overflow: 'hidden', // Ensures the background stays within the eye
                //borderRadius: '50%', // Round shape
                transition: 'width 0.15s ease, height 0.3s ease, top 0.3s ease'
            });

            // Append the background image div to the eye
            imageEye.append(backgroundDiv);

            // Append the image-eye to the image frame
            frame.append(imageEye);

            // Trigger the opening line animation (width expansion)
            setTimeout(() => {
                imageEye.css({ width: '150px', height: '2px' }); // Expand to full width and thin height
            }, 10);

            // Trigger the vertical eye-opening animation after the line is fully drawn
            setTimeout(() => {
                imageEye.css({
                    height: '75px', // Open vertically (like an eye)
                    top: (y - 36.5) + 'px' // Adjust top to center the eye shape
                });
            }, 150); // Delay for horizontal line expansion

            // Automatically close and remove the eye after 5 seconds
            setTimeout(function() {
                // Eye-closing (reverse): First collapse the height
                imageEye.css({
                    height: '2px', // Shrink to a line vertically
                    top: (y + 36.5) + 'px' // Re-adjust the top for collapsing
                });

                // Shrink width (horizontal) after height is fully collapsed
                setTimeout(() => {
                    imageEye.css({ width: '0', height: '0' }); // Collapse to a point
                }, 300); // Wait for height to shrink

                // Remove the eye from the DOM after animation
                setTimeout(() => {
                    imageEye.remove();
                }, 400); // Wait for both animations to complete
            }, 10000); // 5-second delay before closing
        };
    }, function() {
        // Prevent any additional action on hover-out
    });
});*/

