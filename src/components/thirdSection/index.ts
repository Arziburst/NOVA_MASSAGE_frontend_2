// Types
type HTMLElementTyped = HTMLElement | null;

const thirdSectionWrapper: HTMLElementTyped = document.querySelector('.third_section_wrapper');

const thirdSectionFirstBlock: HTMLElementTyped = document.querySelector('.third_section_first_block');
const thirdSectionSecondBlock: HTMLElementTyped = document.querySelector('.third_section_second_block');

// todo make orientation like first section  !!!!!!!!

export const variable = () => {
    if (thirdSectionWrapper && thirdSectionFirstBlock && thirdSectionSecondBlock) {
        const thirdSectionWrapperHeight = thirdSectionWrapper.clientHeight;
        console.log('variable => thirdSectionWrapperHeight:', thirdSectionWrapperHeight);

        thirdSectionFirstBlock.style.height = (thirdSectionWrapperHeight / 2) + thirdSectionFirstBlock.clientHeight + 'px';
        thirdSectionSecondBlock.style.height = (thirdSectionWrapperHeight / 2) + thirdSectionSecondBlock.clientHeight + 'px';
    }
};

window.addEventListener('DOMContentLoaded', variable);
