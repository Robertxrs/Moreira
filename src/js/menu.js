const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.header-menu');
const closeMenu = document.querySelector('.close-menu');

// Abrir menu
hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

// Fechar menu
closeMenu.addEventListener('click', () => {
  menu.classList.remove('active');
});


