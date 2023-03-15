// Images
import primary_image_of_slider from '../../assets/images/primary_image_of_slider.jpg';
import secondary_image_of_slider from '../../assets/images/secondary_image_of_slider.jpg';
import tertiary_image_of_slider from '../../assets/images/tertiary_image_of_slider.jpg';
import quaternary_image_of_slider from '../../assets/images/quaternary_image_of_slider.jpg';

// Types
type HTMLElementTyped = HTMLElement | null;

const sliderCard: HTMLElementTyped = document.querySelector('.slider_card');

const buttonOfSlider: HTMLButtonElement | null = document.querySelector('.slider_button');
const secondImgOfSlider: HTMLImageElement | null = document.querySelector('.slider__second_img');
const imgOfSlider: HTMLImageElement | null = document.querySelector('.slider__first_img');

const currentSlide: HTMLElementTyped = document.querySelector('#current_slide');
const slideLength: HTMLElementTyped = document.querySelector('#slide_length');

const viewSlide: HTMLElementTyped = document.querySelector('#view_slide');
const viewSlideImg: HTMLImageElement | null = document.querySelector('.view_slide__img');


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

const overwriteNewSlideLengthForButtonSlider = () => {
    if (slideLength) {
        slideLength.innerHTML = imagesLength < 9 ? `0${imagesLength}` : `${imagesLength}`;
    }
};

overwriteNewSlideLengthForButtonSlider();

export const handleButtonOfSlider = () => {
    if (imgOfSlider && secondImgOfSlider && buttonOfSlider && sliderCard && !sliderCard.classList.contains('slider_card--animation')) {
        buttonOfSlider.disabled = true;

        storeSlider.number += 1;
        if (storeSlider.number > storeSlider.images.length - 1) {
            storeSlider.number = 0;
        }

        secondImgOfSlider.style.backgroundImage = `url("${storeSlider.images[ storeSlider.number ]}")`;

        sliderCard.classList.add('slider_card--animation');
        imgOfSlider.classList.add('slider__first_img--animation');
    }
};

imgOfSlider?.addEventListener('click', () => {
    if (viewSlide && viewSlideImg) {
        viewSlide.style.display = 'flex';
        viewSlideImg.src = imgOfSlider.src;
    }
});

viewSlide?.addEventListener('click', () => {
    if (viewSlide) {
        viewSlide.style.display = 'none';
    }
});

buttonOfSlider?.addEventListener('click', handleButtonOfSlider);

sliderCard?.addEventListener('animationend', () => {
    if (imgOfSlider && currentSlide && slideLength && buttonOfSlider) {
        imgOfSlider.src = storeSlider.images[ storeSlider.number ];

        currentSlide.innerHTML = storeSlider.number < 9 ? `0${storeSlider.number + 1}` : `${storeSlider.number + 1}`;

        overwriteNewSlideLengthForButtonSlider();

        imgOfSlider.classList.remove('slider__first_img--animation');
        sliderCard.classList.remove('slider_card--animation');

        buttonOfSlider.disabled = false;
    }
});
