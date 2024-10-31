/*eslint-env es6*/

$(document).ready(function() {
    // Preload images
    var imageSources = [];
    $('.tab-work-title').each(function() {
        var imageSrc = $(this).data('image-src');
        if (imageSrc) {
            imageSources.push(imageSrc);
        }
    });

    // Function to preload images
    function preloadImages(sources) {
        $(sources).each(function() {
            var img = new Image();
            img.src = this;
        });
    }
    preloadImages(imageSources);

    // Fade to specific image from the default image
    function fadeToSpecificImage(imageSrc) {
        // Immediately set the default image and show it
        $('.gallery-image').attr('src', 'img/Works/00-default-image.png')
            .css('border-color', '#adadad').stop(true, true).fadeIn(0);

        // Change to the specific image immediately and then fade it in
        $('.gallery-image').attr('src', imageSrc).css('border-color', 'black')
            .stop(true, true).fadeIn(500); // Fade in with the specific image
    }

    // Click event handler for tabs
    $('#tab-list li').on('click', function(e) { // Change to listen on the li
        e.preventDefault(); // Prevent default behavior

        const index = $(this).index(); // Get the index of the clicked tab
        $('.tab-body').hide(); // Hide all tab bodies
        $('.tab-body').eq(index).show(); // Show the clicked tab's body

        // Get the specific image from the first title in the new tab
        const specificImageSrc = $('.tab-body').eq(index).find('.tab-work-title').first().data('image-src');

        // Fade to the specific image
        fadeToSpecificImage(specificImageSrc);
    });

    // Optionally, initialize the first tab on page load
    // $('#tab-list li').first().trigger('click'); // Load the first tab and image
});








// $(document).ready(function() {
//     // Preload images
//     var imageSources = [];
//     $('.tab-work-title').each(function() {
//         var imageSrc = $(this).data('image-src'); // Use data attribute directly
//         if (imageSrc) {
//             imageSources.push(imageSrc);
//         }
//     });

//     // Function to preload images
//     function preloadImages(sources) {
//         $(sources).each(function() {
//             var img = new Image();
//             img.src = this;
//         });
//     }
//     preloadImages(imageSources);

//     let hoverTimeout;

//     function showHoverImage(imageSrc) {
//         clearTimeout(hoverTimeout); // Cancel any pending fade-out
//         $('.gallery-image').css({ opacity: 0 }); // Start fade-out effect

//         // Switch image source after fade-out and fade back in
//         setTimeout(function() {
//             $('.gallery-image').attr('src', imageSrc).css({
//                 opacity: 1,
//                 borderColor: 'black'
//             }); // Fade in with new image source
//         }, 300); // Delay to ensure smooth fade-in after switching
//     }

//     function revertToDefaultImage() {
//         clearTimeout(hoverTimeout); // Clear any existing hover timeout
//         $('.gallery-image').stop(true, true).css('opacity', 0); // Immediately stop any animations and fade out

//         setTimeout(function() {
//             $('.gallery-image').attr('src', 'img/Works/00-default-image.png').css({
//                 opacity: 1,
//                 borderColor: '#adadad'
//             });
//         }, 300); // Switch to default image with smooth fade-in
//     }

//     // Hover event handlers for the tab-work-wrapper
//     $('.tab-work-wrapper').on('mouseenter', function() {
//         var imageSrc = $(this).find('.tab-work-title').data('image-src'); // Use the first title's image src
//         showHoverImage(imageSrc);
//     });

//     $('.tab-work-wrapper').on('mouseleave', function() {
//         revertToDefaultImage();
//     });

//     // Click event handler for tabs
//     $('#tab-list a').on('click', function(e) {
//         e.preventDefault(); // Prevent default anchor click behavior

//         // Immediately reset to default image when switching tabs
//         revertToDefaultImage();

//         // Add logic to show the corresponding tab content if needed
//         // You may need to hide/show the respective tab-body elements here
//         // Example:
//         const index = $(this).parent().index(); // Get index of the clicked tab
//         $('.tab-body').hide(); // Hide all tab bodies
//         $('.tab-body').eq(index).show(); // Show the clicked tab's body
//     });
// });


// $(document).ready(function() {
//     // Preload images
//     var imageSources = [];
//     $('.tab-work-title a').each(function() {
//         var imageSrc = $(this).closest('.tab-work-title').data('image-src');
//         if (imageSrc) {
//             imageSources.push(imageSrc);
//         }
//     });

//     // Function to preload images
//     function preloadImages(sources) {
//         $(sources).each(function() {
//             var img = new Image();
//             img.src = this;
//         });
//     }
//     preloadImages(imageSources);

//     // Update image on hover
//     $('.tab-work-title a').on('mouseenter', function() {
//         var imageSrc = $(this).closest('.tab-work-title').data('image-src');

//         // Fade out the current image
//         $('.gallery-image').css('opacity', 0); // Start fading out

//         // Change the image source after fade-out
//         setTimeout(function() {
//             $('.gallery-image').attr('src', imageSrc); // Set new image source
//             $('.gallery-image').css('opacity', 1); // Fade in the new image
//             $('.gallery-image').css('border-color', 'black'); // Change image border color
//         }, 300); // Match this timeout to your fade-out duration
//     });

//     // Fade out on mouseleave
//     $('.tab-work-title a').on('mouseleave', function() {
//         // Fade out the image
//         $('.gallery-image').css('opacity', 0); // Start fading out

//         // Reset to the default image after fade-out
//         setTimeout(function() {
//             $('.gallery-image').attr('src', 'img/Works/00-default-image.png'); // Reset to default image
//             $('.gallery-image').css('opacity', 1); // Ensure default image is visible immediately
//             $('.gallery-image').css('border-color', '#adadad'); // Revert border color
//         }, 300); // Ensure this timeout matches the fade-out duration
//     });
// });


// $(document).ready(function() {
//     // Preload images on page load
//     var imageSources = []; // Array to hold the image URLs
//     $('.project-link').each(function() {
//         var imageSrc = $(this).data('image-src');
//         if (imageSrc) {
//             imageSources.push(imageSrc); // Push the image source into the array
//         }
//     });

//     // Preload images
//     function preloadImages(sources) {
//         $(sources).each(function() {
//             var img = new Image(); // Create a new Image object
//             img.src = this; // Set the source to preload the image
//         });
//     }

//     preloadImages(imageSources); // Call the preload function

//     // Function to handle hover on project links
//     $('.project-link').on('mouseenter', function() {
//         var imageSrc = $(this).data('image-src'); // Get the image source from data attribute
//         var imageEye = $('.image-eye');           // Target the image container

//         // Check if an img tag already exists, if not, create one
//         if (imageEye.find('img').length === 0) {
//             imageEye.append('<img src="" alt="Project Image">'); // Add an img element if missing
//         }

//         // Set the new image source directly as it's already preloaded
//         imageEye.find('img').attr('src', imageSrc);

//         // Add the visible class to trigger the animation
//         imageEye.addClass('visible');
//     });

//     // Clear image when the mouse leaves the project link
//     $('.project-link').on('mouseleave', function() {
//         var imageEye = $('.image-eye');
//         imageEye.find('img').attr('src', ''); // Clear the image when no project is hovered

//         // Remove the visible class to reset the animation
//         imageEye.removeClass('visible');
//     });
// });


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

