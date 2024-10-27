document.addEventListener('DOMContentLoaded', () => {
    const contactContainer = document.querySelector('.about-container');
    contactContainer.classList.add('visible'); // Show the contact container on load
});
document.addEventListener('DOMContentLoaded', () => {
  const footerContainer = document.querySelector('footer');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        footerContainer.classList.add('visible'); // Add the visible class when in view
        observer.unobserve(footerContainer); // Stop observing once it's visible
      }
    });
  }, {
    threshold: 0.2 // Trigger when 20% of the element is visible
  });

  observer.observe(footerContainer);
});