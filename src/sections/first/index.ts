import { getValueFromCssVariables } from '../../utils';

// Types
type HTMLElementTyped = HTMLElement | null;

const header: HTMLElementTyped = document.querySelector('.header');
const firstSection: HTMLElementTyped = document.querySelector('.first_section');
const firstSectionWrapper: HTMLElementTyped = document.querySelector('.first_section_wrapper');
const firstSectionCard: HTMLElementTyped = document.querySelector('.first_section__card');


const firstSectionTitleDecorative: HTMLElementTyped = document.querySelector('.first_section_title_decorative');
const firstSectionTitle: HTMLElementTyped = document.querySelector('.first_section__title');
const firstSectionText: HTMLElementTyped = document.querySelector('.first_section__text');
const firstSectionButton: HTMLElementTyped = document.querySelector('.first_section_button');


let turnOver: boolean | null = null;

export const changeHeightFirstSection = () => {
    if (!(header
        && firstSection
        && firstSectionWrapper
        && firstSectionCard
        && firstSectionTitleDecorative
        && firstSectionTitle
        && firstSectionText
        && firstSectionButton)
    ) {
        return;
    }

    const mql: MediaQueryList = window.matchMedia('(orientation: portrait)');

    firstSection.style.minHeight = `calc(var(--vh, 100vh) - ${header.clientHeight}px)`;

    if (turnOver !== mql.matches) {
        turnOver = mql.matches;

        if (mql.matches === false && window.innerHeight < 350) { // landscape
            firstSectionCard.style.height =  `calc(var(--vh, 100vh) - ${header.clientHeight + 20}px)`;
        } else if (mql.matches === false && window.innerHeight < 640) { // landscape
            firstSectionCard.style.height =  `calc(var(--vh, 100vh) -  ${header.clientHeight + 40}px)`;
        } else if (mql.matches === true && window.innerWidth < 1280) { // portrait
            // firstSectionCard.style.height =  'auto';
        }

        if (mql.matches === true && window.innerWidth < 1280) {
            // header.clientHeight
            const allHeightsWithoutFirstSectionCard = firstSectionTitleDecorative.clientHeight
            + firstSectionTitle.clientHeight + firstSectionText.clientHeight + firstSectionButton.clientHeight;
            console.log(`allHeightsWithoutFirstSectionCard >>> ${ allHeightsWithoutFirstSectionCard }`);

            setTimeout(() => { // todo ???
                const vh = getValueFromCssVariables('vh');
                console.log(`vh >>> ${ vh }`);

                const rightHeightFirstSection = vh - header.clientHeight;

                if (firstSection.clientHeight > rightHeightFirstSection) {
                    console.log('ifffffffffffffffffffffffff');
                    const rightHeightFirstSectionCard = rightHeightFirstSection - allHeightsWithoutFirstSectionCard;
                    // firstSectionCard.style.height = (rightHeightFirstSectionCard - 100) + 'px';
                    const numberGaps = Number(getComputedStyle(firstSectionWrapper).getPropertyValue('gap')
                        .replace('px', ''));
                    const numberPaddingBottom = Number(getComputedStyle(firstSection).getPropertyValue('padding-bottom')
                        .replace('px', ''));
                    console.log('setTimeout => numberPaddingBottom:', numberPaddingBottom);

                    firstSectionCard.style.height = ((rightHeightFirstSectionCard - ((firstSectionWrapper.childElementCount - 1) * (numberGaps + numberPaddingBottom))) * 0.27) + 'px';
                    // console.log((firstSectionWrapper.childElementCount - 1) * );
                }
            }, 0);
        }
    }
};

export const first = () => {
    changeHeightFirstSection();
    window.addEventListener('resize', changeHeightFirstSection);
};

