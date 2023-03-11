// Images
import primary_image_of_slider from '../../assets/images/primary_image_of_slider.jpg';
import secondary_image_of_slider from '../../assets/images/secondary_image_of_slider.jpg';
import tertiary_image_of_slider from '../../assets/images/tertiary_image_of_slider.jpg';
import quaternary_image_of_slider from '../../assets/images/quaternary_image_of_slider.jpg';

// Types
type HTMLElementTyped = HTMLElement | null;

const buttonOfSlider: HTMLElementTyped = document.querySelector('.slider_button');
const imgOfSlider: HTMLImageElement | null = document.querySelector('.slider__img');

const storeSlider = {
    number: 0,
    images: [
        primary_image_of_slider,
        secondary_image_of_slider,
        tertiary_image_of_slider,
        quaternary_image_of_slider,
    ],
};

export const handleButtonOfSlider = () => {
    storeSlider.number += 1;
    if (storeSlider.number > storeSlider.images.length - 1) {
        storeSlider.number = 0;
    }

    if (imgOfSlider) {
        imgOfSlider.src = storeSlider.images[ storeSlider.number ];
    }

    console.log(storeSlider.number);
};

buttonOfSlider?.addEventListener('click', handleButtonOfSlider);
