// Types
type HTMLElementTyped = HTMLElement | null;

const headerBlock: HTMLElementTyped = document.querySelector('.header');
const buttonBurgerMenuIcon: HTMLElementTyped = document.querySelector('#burger_menu__icon');
const navDropdown = document.querySelector('.burger_menu__dropdown');

export const storeHeader = {
    isScrollAnchor: false,
};

export const header = () => {
    const handleButtonBurgerMenu = () => {
        if (!(buttonBurgerMenuIcon && headerBlock)) {
            return;
        }

        if (!buttonBurgerMenuIcon.classList.contains('burger_menu__icon--close')) {
            headerBlock.classList.add('header--fixed');
        } else {
            headerBlock.classList.remove('header--fixed');
        }
    };

    buttonBurgerMenuIcon?.addEventListener('click', handleButtonBurgerMenu);

    window.addEventListener('scroll', () => {
        if (headerBlock && navDropdown) {
            let posTop = window.pageYOffset;
            const numberScroll = 200;

            if (navDropdown.classList.contains('burger_menu__dropdown--open')) {
                headerBlock.classList.add('header--fixed');

                return;
            }

            if (posTop > numberScroll && storeHeader.isScrollAnchor === false) {
                headerBlock.classList.remove('header--scroll_anchor');
            }

            if (!headerBlock.classList.contains('header--fixed') && posTop > numberScroll && storeHeader.isScrollAnchor === false) {
                headerBlock.classList.add('header--fixed');

                return;
            }
            if (posTop < 1) {
                headerBlock.classList.remove('header--fixed');
            }
        }
    });
};
