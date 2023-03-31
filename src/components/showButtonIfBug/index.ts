// Constants
import { heightLandscape, heightPortrait } from '../../init/constants';

export const showButtonIfBug = (orientationIsPortrait: boolean) => {
    const documentClientHeight = document.documentElement.clientHeight;
    const screenAvailHeight = screen.availHeight;

    const blockShowButtonIfBug = document.querySelector('.show_button_if_bug');

    if (!blockShowButtonIfBug) {
        return;
    }

    const valueHeightPortrait = localStorage.getItem(heightPortrait);
    const valueHeightLandscape = localStorage.getItem(heightLandscape);


    if (documentClientHeight > screenAvailHeight) {
        if (orientationIsPortrait && valueHeightPortrait) {
            window.innerHeight = Number(valueHeightPortrait);

            return;
        } else if (!orientationIsPortrait && valueHeightLandscape) {
            window.innerHeight = Number(valueHeightLandscape);

            return;
        }
        blockShowButtonIfBug.classList.remove('hidden');

        return;
    }

    blockShowButtonIfBug.classList.add('hidden');
};
