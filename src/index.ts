// Images
import './assets/images/photo_master.png';
import './assets/images/map.png';
import './assets/images/successful_request.png';

// Functions
import './elements/burgerMenu/index';

// Components
import './sections/first';
import './components/header';
import './components/slider';
import './sections/third';
import './sections/fifth';
import { changeHeightFirstSection } from './sections/first';
import { changeValueNavSelectedLanguage } from './components/nav';

// Utils
import {
    allURL,
    changeLanguageOnPage,
    checkCountryAndChangeURL,
    changeURL,
    ukraine,
    defaultURL,
    ls,
} from './utils';
import { makeCurrentLanguageActive } from './languages';

// Styles
import './main.css';

const start = () => {
    const buttonsForChangingLanguage = document.querySelectorAll<HTMLButtonElement>('.button_change_language');

    const pathPathname = window.location.pathname.replace(/\//g, '');

    const countryFromLocalStorage = ls.get();

    if (!allURL.includes(pathPathname)) {
        history.pushState(null, '', `/${defaultURL}`);
        location.reload();
    }

    if (buttonsForChangingLanguage) {
        buttonsForChangingLanguage.forEach((button) => {
            button.addEventListener('click', (event) => {
                const target: any = event.target;
                const value = target.value;
                ls.set(`${value}`);

                makeCurrentLanguageActive();

                changeURL(value); // if value === ua >>> reload page
                if (value === ukraine) {
                    return;
                }

                changeLanguageOnPage();
                changeValueNavSelectedLanguage();

                changeHeightFirstSection();
            });
        });
    }

    if (countryFromLocalStorage !== null && countryFromLocalStorage === ukraine) {
        console.log('if localStore && localStore === ua');
        history.pushState(null, '', `/${defaultURL}`);

        return;
    }

    if (countryFromLocalStorage !== null && allURL.includes(countryFromLocalStorage)) { // allURL = '' ru en
        console.log('if localStore && localStore === "" || ru || en');
        makeCurrentLanguageActive();

        changeURL(countryFromLocalStorage);
        changeLanguageOnPage();
        changeValueNavSelectedLanguage();

        changeHeightFirstSection();

        return;
    }

    if (pathPathname === defaultURL) {
        console.log('if URL === "" ');
        checkCountryAndChangeURL();
    } else {
        console.log('} else {');

        makeCurrentLanguageActive();

        changeURL(pathPathname);
        changeLanguageOnPage();
        changeValueNavSelectedLanguage();

        changeHeightFirstSection();
    }
};

start();
