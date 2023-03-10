// Types
type HTMLElementTyped = HTMLElement | null;

const header: HTMLElementTyped = document.querySelector('.header');
const buttonBurgerMenuIcon: HTMLElementTyped = document.querySelector('#burger_menu__icon');

export const handleButtonBurgerMenu = () => {
    if (!(buttonBurgerMenuIcon && header)) {
        return;
    }

    if (!buttonBurgerMenuIcon.classList.contains('burger_menu__icon--close')) {
        header.classList.add('header--fixed');
    } else {
        header.classList.remove('header--fixed');
    }

    console.log('text');
};

buttonBurgerMenuIcon?.addEventListener('click', handleButtonBurgerMenu);

// window.addEventListener('scroll', () => {
//     let posTop = window.pageYOffset;
//     console.log('window.addEventListener => posTop:', posTop);
// });
window.addEventListener('scroll', () => {
    if (header && !header.classList.contains('header--fixed')) {
        let posTop = window.pageYOffset;
        console.log('window.addEventListener => posTop:', posTop);
        if (posTop > 200) {
            header.classList.add('header--fixed');
        }
        // setTimeout(() => {
        //     header.classList.add('header--fixed');
        // }, 1000);
    }
});
