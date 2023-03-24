import { storeHeader } from '../header';

let timer: null | any = null;

const addEventListenerFunction = () => {
    if (timer !== null) {
        clearTimeout(timer);
    }
    timer = setTimeout(function() {
        storeHeader.isScrollAnchor = false;
        window.removeEventListener('scroll', addEventListenerFunction);
    }, 100);
};

export const anchor = () => {
    const anchors = document.querySelectorAll('.anchor');
    const header = document.querySelector<HTMLElement>('.header');

    if (header && anchors) {
        anchors.forEach((anchor) => {
            anchor.addEventListener('click', () => {
                storeHeader.isScrollAnchor = true;
                header.classList.add('header--scroll_anchor');

                window.addEventListener('scroll', addEventListenerFunction, false);
            });
        });
    }
};

anchor();
