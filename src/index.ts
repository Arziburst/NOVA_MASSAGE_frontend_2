// Images
import './assets/images/photo_master.png';
import './assets/images/map.png';
import './assets/images/successful_request.png';

// Elements
import { burgerMenu } from './elements/burgerMenu/index';

// Components
import { header } from './components/header';
import { anchors } from './components/anchor';
import { slider } from './components/slider';
import { changeValueNavSelectedLanguage } from './components/nav';

// Sections
import { first, changeHeightFirstSection } from './sections/first';
import { third } from './sections/third';
import { fifth } from './sections/fifth';

// Utils
import {
    allURL,
    changeLanguageOnPage,
    checkCountryAndChangeURL,
    changeURL,
    ukraine,
    defaultURL,
    ls,
    setViewportProperty,
} from './utils';

// Styles
import './main.css';

export const makeCurrentLanguageActive = () => {
    const buttonsForChangingLanguage = document.querySelectorAll<HTMLButtonElement>('.button_change_language');
    const countryFromLocalStorage = ls.get();
    const pathPathname = window.location.pathname.replace(/\//g, '');

    const getValueLanguage = () => {
        if (typeof countryFromLocalStorage === 'string') {
            return countryFromLocalStorage;
        }
        if (pathPathname === '') {
            return ukraine;
        }

        return pathPathname;
    };

    const buttonsWithCurrentLanguage = document.querySelectorAll<HTMLButtonElement>(`.button_change_language[value="${getValueLanguage()}"]`);

    if (buttonsWithCurrentLanguage) {
        buttonsForChangingLanguage.forEach((button) => {
            button.classList.remove('active');
        });

        buttonsWithCurrentLanguage.forEach((button) => {
            button.classList.add('active');
        });
    }
};

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

window.addEventListener('resize', setViewportProperty(document.documentElement));

start();

burgerMenu();
header();
anchors();

first();
slider();
third();
fifth();
