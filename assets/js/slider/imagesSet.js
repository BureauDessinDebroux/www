export function imagesSlider() {
    let active_project          = document.querySelector('.slider__panel--is-active'),
        active_project_dataset  = active_project.dataset.project,
        active_project_images;

    let all_images_set  = document.querySelectorAll('.images__set');

    for (let i = 0; i < all_images_set.length; i++) {
        let element = all_images_set[i];
        element.classList.remove('images__set--is-active');

        if(element.dataset.project == active_project_dataset) {
            element.classList.add('images__set--is-active');
            active_project_images = element;
        }
    }

    console.log(active_project_images);

    let slides          = active_project_images.querySelectorAll('img'),
        slides__wrapper = document.querySelector('.images__load'),
        current_slide   = 0,
        playing         = true,
        previous_slide  = (slides.length -1),
        BUTTON_NEXT     = document.querySelector('.images__controls--next'),
        BUTTON_PREVIOUS = document.querySelector('.images__controls--previous'),
        LOADER          = document.querySelector('.images__loader');

    // SINGLE
    function pauseSlideshow()   { playing = false; }
    function playSlideshow()    { playing = true; }
    function nextSlide()        { goToSlide(current_slide + 1); }
    function previousSlide()    { goToSlide(current_slide - 1); }

    // CHANGER
    function goToSlide(n) {
        slides[current_slide].className   = 'images__panel';
        slides[previous_slide].className  = 'images__panel';
        
        current_slide                     = (n + slides.length) % slides.length;
        previous_slide                    = (n - 1 + slides.length) % slides.length;
        
        slides[current_slide].className   += ' images__panel--is-active';
        slides[previous_slide].className  += ' images__panel--is-transitionning';
    }


    // REQUEST ANIMATION FRAME
    let i = 0,
        sliderLooperRequest,
        timing = 500;
    
    function sliderLooper() {
        if (i < timing) {  
            LOADER.style.width = ((slides__wrapper.clientWidth / timing) * i) + 'px';
            i++;
        } else {
            i = 0;
            nextSlide();
        }
        
        sliderLooperRequest = requestAnimationFrame(sliderLooper);
    }

    sliderLooperRequest = requestAnimationFrame(sliderLooper);




    // EVENTS
    BUTTON_NEXT.addEventListener('click', () => {
        nextSlide()
        i = 0;
    })
    BUTTON_PREVIOUS.addEventListener('click', () => {
        previousSlide()
        i = 0;
    })
};