// Images
import primary_image_of_slider from '../../assets/images/primary_image_of_slider.jpg';
import secondary_image_of_slider from '../../assets/images/secondary_image_of_slider.jpg';
import tertiary_image_of_slider from '../../assets/images/tertiary_image_of_slider.jpg';
import quaternary_image_of_slider from '../../assets/images/quaternary_image_of_slider.jpg';

// Types
type HTMLElementTyped = HTMLElement | null;

const buttonOfSlider: HTMLElementTyped = document.querySelector('.slider_button');
const imgOfSlider: HTMLImageElement | null = document.querySelector('.slider__img');

const currentSlide: HTMLElementTyped = document.querySelector('#current_slide');
const slideLength: HTMLElementTyped = document.querySelector('#slide_length');

const viewSlide: HTMLElementTyped = document.querySelector('#view_slide');


const storeSlider = {
    number: 0,
    images: [
        primary_image_of_slider,
        secondary_image_of_slider,
        tertiary_image_of_slider,
        quaternary_image_of_slider,
    ],
};

const imagesLength = storeSlider.images.length;

const overwriteNewSlideLength = () => {
    if (slideLength) {
        slideLength.innerHTML = imagesLength < 9 ? `0${imagesLength}` : `${imagesLength}`;
    }
};

overwriteNewSlideLength();

const onClickSlide = () => {
    const windowInnerHeight =  window.innerHeight;
};

export const handleButtonOfSlider = () => {
    storeSlider.number += 1;
    if (storeSlider.number > storeSlider.images.length - 1) {
        storeSlider.number = 0;
    }

    if (imgOfSlider && currentSlide && slideLength) {
        imgOfSlider.src = storeSlider.images[ storeSlider.number ];
        currentSlide.innerHTML = storeSlider.number < 9 ? `0${storeSlider.number + 1}` : `${storeSlider.number + 1}`;
        overwriteNewSlideLength();
    }

    console.log(storeSlider.number);
};

imgOfSlider?.addEventListener('click', () => {
    if (viewSlide) {
        viewSlide.style.display = 'flex';
    }
});

viewSlide?.addEventListener('click', () => {
    if (viewSlide) {
        viewSlide.style.display = 'none';
    }
});

buttonOfSlider?.addEventListener('click', handleButtonOfSlider);
