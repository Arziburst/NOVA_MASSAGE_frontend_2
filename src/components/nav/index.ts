// Utils
import { ukraine } from '../../utils';

export const changeValueNavSelectedLanguage = () => {
    const block = document.querySelector('.nav_select__active_value');

    const pathPathname = window.location.pathname.replace(/\//g, '');

    if (!block) {
        return;
    }

    const value = (pathPathname === '' ? ukraine : pathPathname).toUpperCase();
    console.log('changeValueNavSelectedLanguage => value:', value);

    block.innerHTML = value;
};
