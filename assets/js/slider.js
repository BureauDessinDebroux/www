import {carousel, stopCarousel} from './carousel.js';

let slides = document.querySelectorAll('.slider__panel'),
    images_set = document.querySelectorAll('.images__set'),
    current_slide = 0,
    previous_slide = (slides.length - 1),
    BUTTON_NEXT = document.querySelector('.slider__controls--next'),
    BUTTON_PREVIOUS = document.querySelector('.slider__controls--previous');



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

    let data_project = slides[current_slide].dataset.project;

    for (let index = 0; index < images_set.length; index++) {
        if (images_set[index].dataset.project == data_project) {
            let previous_images_set = (index - 1 + images_set.length) % images_set.length;

            images_set[previous_images_set].className = 'images__set';
            images_set[index].className = 'images__set images__set--is-active';
            
            carousel(images_set[previous_images_set], false);
            carousel(images_set[index], true);
        }
    }
}

// EVENTS
BUTTON_NEXT.addEventListener('click', () => {
    nextSlide()
    i = 0;
})
BUTTON_PREVIOUS.addEventListener('click', () => {
    previousSlide()
    i = 0;
})