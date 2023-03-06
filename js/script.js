'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const humburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.nav-list'),
          navItem = document.querySelectorAll('.nav-item');
          
    function openAndCloseMenu() {
        if (humburger.classList.contains('hamburger-active')) {
            humburger.classList.remove('hamburger-active');
            menu.classList.remove('nav-list-active');
        } else {
            humburger.classList.add('hamburger-active');
            menu.classList.add('nav-list-active');
        }
    }

    humburger.addEventListener('click', openAndCloseMenu)

    navItem.forEach(item => {
        item.addEventListener('click', openAndCloseMenu)
    });
}); 