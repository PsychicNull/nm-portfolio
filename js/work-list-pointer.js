/*eslint-env es6*/

// Function to move the pointer
function movePointerToElement(element) {
    // Get the top position of the hovered element
    const elementRect = element.getBoundingClientRect();
    
    // Calculate new top position for the pointer
    const newTop = window.scrollY + elementRect.top + (elementRect.height / 2) - 20; 

    // Move the pointer to the new top position
    const pointer = document.querySelector('.pointer');
    pointer.style.top = `${newTop}px`;
}

// Add hover event listeners to dropdown-toggle and project-link
document.querySelectorAll('.dropdown-toggle, .project-link').forEach(item => {
    item.addEventListener('mouseenter', function() {
        movePointerToElement(this);
    });
});

