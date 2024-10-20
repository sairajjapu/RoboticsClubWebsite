document.addEventListener('DOMContentLoaded', () => {
    const contactContainer = document.querySelector('.gallery');
    const footer = document.querySelector('footer');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add the visible class when in view
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    }, {
      threshold: 0.2 // Trigger when 20% of the element is visible
    });
    // Observe both the contact container and footer
    observer.observe(contactContainer);
    observer.observe(footer);
  });