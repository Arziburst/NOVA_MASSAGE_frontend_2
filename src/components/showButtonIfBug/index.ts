export const showButtonIfBug = () => {
    const documentClientHeight = document.documentElement.clientHeight;
    const screenAvailHeight = screen.availHeight;

    const blockShowButtonIfBug = document.querySelector('.show_button_if_bug');
    if (!blockShowButtonIfBug) {
        return;
    }

    if (documentClientHeight > screenAvailHeight) {
        blockShowButtonIfBug.classList.remove('hidden');

        return;
    }

    blockShowButtonIfBug.classList.add('hidden');
};
