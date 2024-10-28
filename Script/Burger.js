document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');

    burger.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
    burger.addEventListener('click',() =>{
      menu.classList.toggle('close');
    });
});
document.querySelectorAll('.dropdown-toggle').forEach((dropdown) => {
  dropdown.addEventListener('click', (e) => {
    e.preventDefault();

    // Close any other open dropdowns
    document.querySelectorAll('.dropdown').forEach((item) => {
      if (item !== dropdown.parentElement) {
        item.classList.remove('show');
      }
    });

    // Toggle the 'show' class for the clicked dropdown
    dropdown.parentElement.classList.toggle('show');
  });
});
