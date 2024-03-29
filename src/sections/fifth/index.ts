// Map
import { watcherClickMap } from './map';

// Types
import { CollectAllValuesOfFormTypes, InputsOfForm } from './types';

// Tools
import { getTimeDifference, isFormBlockedHandler, toggleHTMLElementsDisabledState } from './utils';
import { WHEN_REQUEST_WAS_SENT } from '../../init/constants';

const form = document.querySelector<HTMLFormElement>('#form');

const inputWrappers = form?.querySelectorAll('.input_wrapper');

const inputs = document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea');
const buttonSubmit = document.querySelector<HTMLButtonElement>('#button_submit');

const spinner = document.querySelector<HTMLSpanElement>('#spinner_form');

const successMessageBlock = document.querySelector<HTMLDivElement>('.form_area');
const formAreaTime = document.querySelector<HTMLSpanElement>('#form_area__time');

let isRequestFetching = false;
let isBlockTogglerActive = isFormBlockedHandler();

const collectAllValuesOfForm = async ({ inputs, spinner, buttonSubmit }: CollectAllValuesOfFormTypes) => {
    const InputsOfFormData = Array.from(inputs).reduce<InputsOfForm>(
        (acc, inputElement: HTMLInputElement | HTMLTextAreaElement) => {
            if (!inputElement.name) {
                return acc;
            }

            return {
                ...acc,
                [ inputElement.name ]: inputElement.value,
            };
        }, {},
    );

    try {
        isRequestFetching = true;
        toggleHTMLElementsDisabledState({ isFormBlocked: true, inputs, buttonSubmit });
        spinner.classList.remove('hidden');

        const response = await fetch(`${process.env.API_URL}/contactUs`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(InputsOfFormData),
        });

        if (response.status !== 200) {
            throw new Error('makeRequestToContactUs failed');
        }

        if (inputWrappers) {
            inputWrappers.forEach((inputWrapper) => {
                const inputHTMLElement = inputWrapper.querySelector<HTMLInputElement>('.input__input');
                const textareaHTMLElement = inputWrapper.querySelector<HTMLTextAreaElement>('.input__textarea');

                const buttonForClearingInput = inputWrapper.querySelector('.input_button');

                const input = inputHTMLElement || textareaHTMLElement;
                if (!(input && buttonForClearingInput)) {
                    return;
                }

                input.value = '';
                buttonForClearingInput.classList.add('hidden');
            });
        }

        localStorage.setItem(WHEN_REQUEST_WAS_SENT, `${Date.now()}`);
    } catch (error) {
        console.log(error);
    } finally {
        spinner.classList.add('hidden');
        isRequestFetching = false;
    }
};

const checkIsTimeSubmitRequestOfForm = () => {
    const isFormBlocked = isFormBlockedHandler();
    if (!(buttonSubmit && successMessageBlock && formAreaTime)) {
        return;
    }

    if (isFormBlocked && isBlockTogglerActive) {
        toggleHTMLElementsDisabledState({ isFormBlocked, inputs, buttonSubmit });
        successMessageBlock.classList.remove('hidden');
        isBlockTogglerActive = false;
    }

    if (isFormBlocked) {
        formAreaTime.innerHTML = getTimeDifference();
    }

    if (!isFormBlocked && !isBlockTogglerActive) {
        toggleHTMLElementsDisabledState({ isFormBlocked, inputs, buttonSubmit });
        successMessageBlock.classList.add('hidden');
        isBlockTogglerActive = true;
    }
};

export const fifth = () => {
    checkIsTimeSubmitRequestOfForm();
    watcherClickMap();

    setInterval(() => {
        if (!isRequestFetching) {
            checkIsTimeSubmitRequestOfForm();
        }
    }, 1000);

    if (form && inputWrappers && spinner && buttonSubmit) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            collectAllValuesOfForm({ inputs, spinner, buttonSubmit });
        });
        inputWrappers.forEach((inputWrapper) => {
            const inputHTMLElement = inputWrapper.querySelector<HTMLInputElement>('.input__input');
            const textareaHTMLElement = inputWrapper.querySelector<HTMLTextAreaElement>('.input__textarea');

            const buttonForClearingInput = inputWrapper.querySelector('.input_button');

            const input = inputHTMLElement || textareaHTMLElement;
            if (!(input && buttonForClearingInput)) {
                return;
            }

            buttonForClearingInput.addEventListener('click', (event) => {
                event.preventDefault();
                input.value = '';
                buttonForClearingInput.classList.add('hidden');
                input.focus();
            });

            input.addEventListener('input', (event: any) => {
                const value = event.target.value;

                if (value.length > 0) {
                    buttonForClearingInput.classList.remove('hidden');
                } else {
                    buttonForClearingInput.classList.add('hidden');
                }
            });
        });
    }
};
