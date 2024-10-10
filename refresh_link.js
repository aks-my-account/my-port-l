

//============================== Get all the navbar links and refresh =======================================//


// Get all the navbar links
const navbarLinks = document.querySelectorAll('.navbar a');

// Function to check if the current hash matches the target section
function isSameSection(target) {
    return window.location.hash === target;
}

// Loop through each link and add a click event listener
navbarLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Get the href attribute (the target section or URL)
        const target = this.getAttribute('href');
        
        // If it's an internal link (starts with '#')
        if (target.startsWith('#')) {
            // Prevent the default behavior of the anchor tag
            event.preventDefault();
            
            // Check if we're already at the target section
            if (isSameSection(target)) {
                // If we are on the same section, just reload the page
                window.location.reload();
            } else {
                // If we're on a different section, navigate to the target section
                window.location.hash = target;
            }
        } else {
            // For external links, simply redirect
            window.location.href = target;
        }
    });
});

