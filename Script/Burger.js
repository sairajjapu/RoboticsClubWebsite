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