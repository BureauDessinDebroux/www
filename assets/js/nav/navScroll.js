import { scrollIt } from "./smoothScroll";

const smoothTrigger = function(target) {
    for (let i = 0; i < target.length; i++) {
        const element = target[i];
        
        element.addEventListener('click', () => {
            let target = element.getAttribute("href");
                target = document.querySelector(target);

            scrollIt (
                target,
                300,
                'easeOutQuad'
            );
        });
    }
}

const smoothTarget = (function() {
    let NAV_LINKS       = document.querySelectorAll('.nav__link'),
        NAV_BRAND       = document.querySelector('.nav__brand'),
        MOBILE_LINKS    = document.querySelectorAll('header .cta__item > a'),
        TRIGGERS        = [];

    for (let i = 0; i < NAV_LINKS.length; i++) {
        TRIGGERS.push(NAV_LINKS[i]);
    }
    
    for (let i = 0; i < MOBILE_LINKS.length; i++) {
        TRIGGERS.push(MOBILE_LINKS[i]);
    }

    TRIGGERS.push(NAV_BRAND);
    smoothTrigger(TRIGGERS);
})();



/*
* ====================================================
* PROGRESS SCROLL
* ====================================================
*/

const scrollProgress = function() {

    let progressIndicator   = document.querySelector('.progress'),
        length              = progressIndicator.getTotalLength(),
        height              = document.querySelector('body').clientHeight,
        i                   = 0;

    document.addEventListener('scroll', () => {
        let starter = (height - window.innerHeight) / (height - window.innerHeight) * 100,
            value = pageYOffset / (height - window.innerHeight) * 100;

        progressIndicator.style.strokeDashoffset = starter - value;

        console.log(height, window.innerHeight)
    })

}

scrollProgress();