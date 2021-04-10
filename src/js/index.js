const menuButton = document.getElementById('menu-button');

menuButton.addEventListener('click', () => {
    document.querySelector('.header__menu-ppal').classList.toggle('header__menu-ppal--active')
});
