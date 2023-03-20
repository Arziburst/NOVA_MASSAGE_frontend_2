// Types
type HTMLElementTyped = HTMLElement | null;

const header: HTMLElementTyped = document.querySelector('.header');
const buttonBurgerMenuIcon: HTMLElementTyped = document.querySelector('#burger_menu__icon');
const navDropdown = document.querySelector('.burger_menu__dropdown');


export const handleButtonBurgerMenu = () => {
    if (!(buttonBurgerMenuIcon && header)) {
        return;
    }

    if (!buttonBurgerMenuIcon.classList.contains('burger_menu__icon--close')) {
        header.classList.add('header--fixed');
    } else {
        header.classList.remove('header--fixed');
    }
};

buttonBurgerMenuIcon?.addEventListener('click', handleButtonBurgerMenu);

window.addEventListener('scroll', () => {
    if (header && navDropdown) {
        let posTop = window.pageYOffset;

        if (navDropdown.classList.contains('burger_menu__dropdown--open')) {
            header.classList.add('header--fixed');

            return;
        }

        if (!header.classList.contains('header--fixed') && posTop > 200) {
            header.classList.add('header--fixed');

            return;
        }
        if (posTop < 1) {
            header.classList.remove('header--fixed');
        }
    }
});
