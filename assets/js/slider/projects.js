import { imagesSlider } from './imagesSet.js';

const projectSlider = (function() {
    let slides = document.querySelectorAll('.slider__panel'),
        images_set = document.querySelectorAll('.images__set'),
        current_slide = 0,
        previous_slide = (slides.length - 1),
        BUTTON_NEXT = document.querySelector('.slider__controls--next'),
        BUTTON_PREVIOUS = document.querySelector('.slider__controls--previous');

        imagesSlider();

    // SINGLE
    function nextSlide() { goToSlide(current_slide + 1); }
    function previousSlide() { goToSlide(current_slide - 1); }

    // CHANGER
    function goToSlide(n) {
        slides[current_slide].className = 'slider__panel';
        slides[previous_slide].className = 'slider__panel';

        current_slide = (n + slides.length) % slides.length;
        previous_slide = (n - 1 + slides.length) % slides.length;

        slides[current_slide].className += ' slider__panel--is-active';
        slides[previous_slide].className += ' slider__panel--is-transitionning';
    }

    // EVENTS
    BUTTON_NEXT.addEventListener('click', () => {
        nextSlide();
        imagesSlider();
        let i = 0;
    })
    BUTTON_PREVIOUS.addEventListener('click', () => {
        previousSlide();
        imagesSlider();
        let i = 0;
    })
})();