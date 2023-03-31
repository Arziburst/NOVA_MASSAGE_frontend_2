// Types
type HTMLElementTyped = HTMLElement | null;

const header: HTMLElementTyped = document.querySelector('.header');
const firstSection: HTMLElementTyped = document.querySelector('.first_section');
const firstSectionCard: HTMLElementTyped = document.querySelector('.first_section__card');

let turnOver: boolean | null = null;

export const changeHeightFirstSection = () => {
    if (!(header
        && firstSection
        && firstSectionCard)
    ) {
        return;
    }

    const mql: MediaQueryList = window.matchMedia('(orientation: portrait)');

    firstSection.style.minHeight = `calc(var(--vh, 100vh) - ${header.clientHeight}px)`;

    if (turnOver !== mql.matches) {
        turnOver = mql.matches;

        if (mql.matches === false && window.innerHeight < 350) { // landscape.innerHeight && window < 350px
            firstSectionCard.style.height =  `calc(var(--vh, 100vh) - ${header.clientHeight - 20}px)`;
        } else if (mql.matches === false && window.innerHeight < 640) { // landscape.innerHeight && window < 640px
            firstSectionCard.style.height =  'calc(var(--vh, 100vh) - var(--height_header) - 20px)';
            firstSection.style.height =  'auto';
        } else if (mql.matches === true && window.innerWidth < 1280) { // portrait && window.innerWidth < 1280
            firstSectionCard.style.height =  'auto';
        }
    }
};

export const first = () => {
    changeHeightFirstSection();
    window.addEventListener('resize', changeHeightFirstSection);
};

