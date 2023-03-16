"use_strict"

let burgerTrigger = document.querySelector('[data-burger-open]'), 
    burgerMenu = document.querySelector('.burger_menu'),
    burgerClose = document.querySelector([data-burger-close]);
    
burgerTrigger.addEventListener('click', () => {
    burgerMenu.classList.toggle('show');
    document.body.style.overflow = 'hidden';
});

burgerClose.addEventListener('click', () => {
    burgerMenu.classList.toggle('show');
    document.body.style.overflow = '';
});