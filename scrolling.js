// Add this JavaScript to your project

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select all nav bar links within the .nav container
    const navLinks = document.querySelectorAll('.nav a');
  
    // Add click event listeners to each link
    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default anchor behavior
  
        // Get the target section's ID from the href attribute
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          // Scroll smoothly to the target element
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });
  });
  