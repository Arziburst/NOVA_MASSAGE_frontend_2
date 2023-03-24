// Types
type HTMLElementTyped = HTMLElement | null;

const thirdSectionWrapper: HTMLElementTyped = document.querySelector('.third_section_wrapper');

const thirdSectionFirstBlock: HTMLElementTyped = document.querySelector('.third_section_first_block');
const thirdSectionSecondBlock: HTMLElementTyped = document.querySelector('.third_section_second_block');
const mql: MediaQueryList = window.matchMedia('(orientation: portrait)');

let turnOver: boolean | null = null;

const changeHightParallax = () => {
    if (
        thirdSectionWrapper
        && thirdSectionFirstBlock
        && thirdSectionSecondBlock
        && turnOver !== mql.matches
    ) {
        turnOver = mql.matches;

        thirdSectionFirstBlock.style.height = 'auto';
        thirdSectionSecondBlock.style.height = 'auto';

        const thirdSectionWrapperHeight = thirdSectionWrapper.clientHeight;

        thirdSectionFirstBlock.style.height = (thirdSectionWrapperHeight / 2) + thirdSectionFirstBlock.clientHeight + 'px';
        thirdSectionSecondBlock.style.height = (thirdSectionWrapperHeight / 2) + thirdSectionSecondBlock.clientHeight + 'px';
    }
};

export const third = () => {
    window.addEventListener('DOMContentLoaded', changeHightParallax);
    window.addEventListener('resize', changeHightParallax);
};

