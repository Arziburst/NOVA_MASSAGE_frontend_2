import { languagesBlockMapConfirm } from '../../languages';

const getLangConfirm = () => {
    const selectChangeLang = document.querySelector<HTMLSelectElement>('#change_lang');
    if (!selectChangeLang) {
        return;
    }
    const valueS = selectChangeLang.value;

    if (valueS === 'ru') {
        return languagesBlockMapConfirm.ru;
    }
    if (valueS === 'en') {
        return languagesBlockMapConfirm.en;
    }

    return languagesBlockMapConfirm.ua;
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

