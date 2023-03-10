// Types
type HTMLElementTyped = HTMLElement | null;

const header: HTMLElementTyped = document.querySelector('.header');
const photoMasterOfFirstSection: HTMLElementTyped = document.querySelector('.first_section__card');
const firstSectionWrapper: HTMLElementTyped = document.querySelector('.first_section_wrapper');
const firstSection: HTMLElementTyped = document.querySelector('.first_section');

let turnOver: boolean | null = null;

export const changeHeightFirstSection = () => {
    const mql: MediaQueryList = window.matchMedia('(orientation: portrait)');

    const windowInnerHeight =  window.innerHeight;
    const windowInnerWidth = window.innerWidth;
    if (
        header
        && firstSection
        && firstSectionWrapper
        && photoMasterOfFirstSection
        && turnOver !== mql.matches
    ) {
        firstSection.style.minHeight =  `${windowInnerHeight - header.clientHeight}px`;

        turnOver = mql.matches;

        if (mql.matches === false && windowInnerHeight < 350) {
            photoMasterOfFirstSection.style.height =  `calc(100vh - ${windowInnerHeight - header.clientHeight - 20}px)`;
        } else if (mql.matches === false && windowInnerHeight < 640) {
            photoMasterOfFirstSection.style.height =  'calc(100vh - var(--height_header) - 20px)';
            firstSection.style.minHeight =  'auto';
        } else if (mql.matches === true && windowInnerWidth < 1280) {
            photoMasterOfFirstSection.style.height =  'auto';
        }
    }
};
window.addEventListener('load', changeHeightFirstSection);
window.addEventListener('resize', changeHeightFirstSection);

