document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.card,.hero, .project-card, .team-card,.Footer,.heroElements,.gallery-item'); // Select elements to observe
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add the 'visible' class when the element is in view
          observer.unobserve(entry.target); // Stop observing once the element is visible
        }
      });
    }, {
      threshold: 0.2 // Trigger when 20% of the element is visible
    });
    
    elements.forEach(element => {
      observer.observe(element); // Observe each element
    });
  });
// Script for preloader and main content transition
window.addEventListener('load', function() {
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0'; // Fade out the preloader

    setTimeout(() => {
      preloader.style.display = 'none'; // Completely hide the preloader
      
      // Show other sections like projects, footer, etc.
      document.querySelectorAll('.projects, .Faculty, .Footer').forEach(el => {
        el.style.display = 'block';
        el.style.opacity = '1'; // Fade in the main content
      });
    }, 800); // Delay to match preloader fade-out
  }, 700); // Show logo for 2 seconds
});
