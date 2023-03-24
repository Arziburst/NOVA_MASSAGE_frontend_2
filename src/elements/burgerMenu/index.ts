const navDropdown = document.querySelector('.burger_menu__dropdown');
const burgerMenuId = document.querySelector('#burger_menu');
const burgerMenuIcon = document.querySelector('#burger_menu__icon');

const navText = document.querySelectorAll('.nav__text');

export const burgerMenu = () => {
    if (!(
        burgerMenuId
        && burgerMenuIcon
        && navDropdown
    )) {
        return;
    }

    burgerMenuId.addEventListener('click', () => {
        burgerMenuIcon.classList.toggle('burger_menu__icon--close');
        navDropdown.classList.toggle('burger_menu__dropdown--open');
    });

    navText.forEach((link) => {
        link.addEventListener('click', () => {
            if (burgerMenuIcon && navDropdown) {
                burgerMenuIcon.classList.remove('burger_menu__icon--close');
                navDropdown.classList.remove('burger_menu__dropdown--open');
            }
        });
    });
};
