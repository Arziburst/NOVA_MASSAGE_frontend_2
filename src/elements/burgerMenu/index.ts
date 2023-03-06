const header = document.querySelector('.header');
const navDropdown = document.querySelector('.burger_menu__dropdown');
const burgerMenuId = document.querySelector('#burger_menu');
const burgerMenuIcon = document.querySelector('#burger_menu__icon');

export const burgerMenu = () => {
    if (!(
        header
        && burgerMenuId
        && burgerMenuIcon
        && navDropdown
    )) {
        return;
    }

    burgerMenuId.addEventListener('click', () => {
        burgerMenuIcon.classList.toggle('burger_menu__icon--close');
        navDropdown.classList.toggle('burger_menu__dropdown--open');
    });
};


burgerMenu();
