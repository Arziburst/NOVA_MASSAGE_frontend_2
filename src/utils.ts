import { changeValueNavSelectedLanguage } from './components/nav';
import { languagesForBlocks, makeCurrentLanguageActive } from './languages';

import { changeHeightFirstSection } from './sections/first';

export const defaultURL = '';
export const ukraine = 'ua';

export const allURL = [ defaultURL, 'ru', 'en' ];

export const languages = [ ukraine, 'ru', 'en' ];

export const countriesSNG = [ 'Russia', 'Armenia', 'Azerbaijan', 'Belarus', 'Kazakhstan', 'Kyrgyzstan', 'Moldova', 'Tajikistan', 'Uzbekistan' ];

export const ls = {
    set: (value: string) => localStorage.setItem('isVisited', value),
    get: (value: string = 'isVisited') => localStorage.getItem(value),
};

export const changeLanguageOnPage = () => {
    const pathPathname = window.location.pathname.replace(/\//g, '');
    const tagHTML = document.querySelector('html');

    if (tagHTML) {
        tagHTML.lang = pathPathname === '' ? 'uk' : pathPathname;
    }

    if (pathPathname === defaultURL) {
        location.reload();

        return;
    }

    makeCurrentLanguageActive();

    for (const keyLangArrBlockScreen in languagesForBlocks) {
        if (Object.prototype.hasOwnProperty.call(languagesForBlocks, keyLangArrBlockScreen)) {
            const blockScreen = languagesForBlocks[ keyLangArrBlockScreen ];
            for (const keyBlockScreen in blockScreen) {
                if (Object.prototype.hasOwnProperty.call(blockScreen, keyBlockScreen)) {
                    const elements = document.querySelectorAll<any>('.lng_' + keyLangArrBlockScreen + '_' + keyBlockScreen);
                    elements.forEach((element) => {
                        if (!element) {
                            return;
                        }

                        if (element.tagName === 'IMG') {
                            element.alt = languagesForBlocks[ keyLangArrBlockScreen ][ keyBlockScreen ][ pathPathname ];

                            return;
                        }

                        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                            element.placeholder
                        = languagesForBlocks[ keyLangArrBlockScreen ][ keyBlockScreen ][ pathPathname ];

                            return;
                        }

                        if (pathPathname && allURL.includes(pathPathname)) {
                            element.textContent
                        = languagesForBlocks[ keyLangArrBlockScreen ][ keyBlockScreen ][ pathPathname ];
                        }
                    });
                }
            }
        }
    }
};

export const checkCountryAndChangeURL = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const geo = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

            fetch(geo).then((res) => res.json())
                .then((data) => {
                    const yourCountryName: string = data.countryName;
                    console.log('fetch.then => yourCountryName:', yourCountryName);

                    if (!(typeof yourCountryName === 'string')) {
                        return;
                    }

                    if (yourCountryName === 'Ukraine') {
                        history.pushState(null, '', `/${defaultURL}`);
                        // selectChangeLang.value = ukraine;
                        changeValueNavSelectedLanguage();

                        return;
                    }

                    if (yourCountryName !== 'Ukraine' && !countriesSNG.includes(yourCountryName)) {
                        history.pushState(null, '', '/en');
                        // selectChangeLang.value = 'en';
                        changeValueNavSelectedLanguage();
                        changeLanguageOnPage();
                        changeHeightFirstSection();

                        return;
                    }

                    if (countriesSNG.includes(yourCountryName)) {
                        history.pushState(null, '', '/ru');
                        // selectChangeLang.value = 'ru';
                        changeValueNavSelectedLanguage();
                        changeLanguageOnPage();
                        changeHeightFirstSection();

                        return;
                    }

                    history.pushState(null, '', `/${defaultURL}`);
                    // selectChangeLang.value = ukraine;
                    changeValueNavSelectedLanguage();
                });
        });
    }
};

export const changeURL = (value: string) => {
    if (value === ukraine) {
        history.pushState(null, '', `/${defaultURL}`);
        location.reload();

        return;
    }
    history.pushState(null, '', `/${value}`);
};