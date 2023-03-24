import { languagesBlockMapConfirm } from '../../languages';
import { ls } from '../../utils';

// Types
type PathPathname = '' | 'ru' | 'en'

const getLangConfirm = () => {
    const currentLanguage = ls.get();
    const pathPathname = window.location.pathname.replace(/\//g, '') as PathPathname;

    if (currentLanguage === 'ua') {
        return languagesBlockMapConfirm.ua;
    }
    if (currentLanguage === 'ru') {
        return languagesBlockMapConfirm.ru;
    }
    if (currentLanguage === 'en') {
        return languagesBlockMapConfirm.en;
    }

    return pathPathname === '' ? languagesBlockMapConfirm.ua : languagesBlockMapConfirm[ `${pathPathname}` ];
};

export const watcherClickMap = () => {
    const map = document.querySelector<HTMLButtonElement>('.contact_locate_map');

    if (!map) {
        return;
    }

    map.addEventListener('click', () => {
        // eslint-disable-next-line no-alert
        const result: boolean = confirm(getLangConfirm());

        if (result) {
            window.open('https://www.google.com/maps/search/?api=1&query=50.39837929264725,30.634371072554035', '_blank');
        }
    });
};

