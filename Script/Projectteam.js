
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.card, .project-card, .team-card,.Footer,.heroElements'); // Select elements to observe
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); 
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