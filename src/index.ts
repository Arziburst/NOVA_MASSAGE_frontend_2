// Images
import './assets/images/photo_master.png';
import './assets/images/map.png';
import './assets/images/successful_request.png';

// Functions
import './elements/burgerMenu/index';

// Components
import './sections/first';
import './components/header';
import './components/anchor';
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

// Styles
import './main.css';

const start = () => {
    const buttonsForChangingLanguage = document.querySelectorAll<HTMLButtonElement>('.button_change_language');
    const navSelect = document.querySelector<HTMLDetailsElement>('.nav_select');

    const navDropdown = document.querySelector('.burger_menu__dropdown');
    const burgerMenuIcon = document.querySelector('#burger_menu__icon');


    const pathPathname = window.location.pathname.replace(/\//g, '');

    const countryFromLocalStorage = ls.get();

    if (!allURL.includes(pathPathname)) {
        history.pushState(null, '', `/${defaultURL}`);
        location.reload();
    }

    if (buttonsForChangingLanguage && navSelect && burgerMenuIcon && navDropdown) {
        buttonsForChangingLanguage.forEach((button) => {
            button.addEventListener('click', (event) => {
                navSelect.open = false;

                burgerMenuIcon.classList.remove('burger_menu__icon--close');
                navDropdown.classList.remove('burger_menu__dropdown--open');

                const target: any = event.target;
                const value = target.value;
                ls.set(`${value}`);


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
        history.pushState(null, '', `/${defaultURL}`);

        return;
    }

    if (countryFromLocalStorage !== null && allURL.includes(countryFromLocalStorage)) { // allURL = '' ru en
        changeURL(countryFromLocalStorage);
        changeLanguageOnPage();
        changeValueNavSelectedLanguage();

        changeHeightFirstSection();

        return;
    }

    if (pathPathname === defaultURL) {
        checkCountryAndChangeURL();
    } else {
        changeURL(pathPathname);
        changeLanguageOnPage();
        changeValueNavSelectedLanguage();

        changeHeightFirstSection();
    }
};

start();
