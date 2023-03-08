import { HTMLElementTyped } from './types';

const header: HTMLElementTyped = document.querySelector('.header');
const photoMasterOfFirstSection: HTMLElementTyped = document.querySelector('.first_section__card');
const firstSectionWrapper: HTMLElementTyped = document.querySelector('.first_section_wrapper');
const firstSection: HTMLElementTyped = document.querySelector('.first_section');
const mql: MediaQueryList = window.matchMedia('(orientation: portrait)');

let turnOver: boolean | null = null;

export const changeHeightFirstSection = () => {
    if (
        header
        && firstSection
        && firstSectionWrapper
        && photoMasterOfFirstSection
        && turnOver !== mql.matches
    ) {
        // firstSection.style.minHeight =  `${window.innerHeight - header.clientHeight}px`;

        if (mql.matches === false && window.innerHeight < 350) {
            // alert('innerHeight < 350');
            photoMasterOfFirstSection.style.height =  `calc(100vh - ${window.innerHeight - header.clientHeight - 20}px)`;
        } else if (mql.matches === false && window.innerHeight < 640) {
            // alert('innerHeight < 640');
            photoMasterOfFirstSection.style.height =  'calc(100vh - var(--height_header) - 20px)';
            firstSection.style.minHeight =  'auto';
        } else {
            // alert('else');
            photoMasterOfFirstSection.style.height =  'auto';
            firstSectionWrapper.style.gap = '0px !important';
        }

        firstSection.style.minHeight =  `${window.innerHeight - header.clientHeight}px`;

        turnOver = mql.matches;
    }
};

window.addEventListener('load', changeHeightFirstSection);
window.addEventListener('resize', changeHeightFirstSection);
