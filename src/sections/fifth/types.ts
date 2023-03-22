export type InputsOfForm = {
    name?: string;
    phone?: string;
    question?: string;
}

export type CollectAllValuesOfFormTypes = {
    inputs: NodeListOf<HTMLInputElement | HTMLTextAreaElement>; // eslint-disable-line no-undef
    spinner: HTMLSpanElement;
    buttonSubmit: HTMLButtonElement;
}

export type HTMLElementsDisabledStateTypes = {
    inputs: NodeListOf<HTMLInputElement | HTMLTextAreaElement>; // eslint-disable-line no-undef
    buttonSubmit: HTMLButtonElement;
    isFormBlocked: boolean
}
