import { mobilecheck, getPosition } from './helpers.js';

const mobileHeaderHeight = function() {
    let header = document.querySelector('header'),
        mobile = mobilecheck(),
        height = window.innerHeight;

    if(!header) return;

    if(mobile === true) {
        header.style.height = height + 'px';
    }
}

mobileHeaderHeight();

const stickyHeader = function() {
    let nav                 = document.querySelector('.nav'),
        navPositionY        = getPosition(nav).y,
        navWidth            = nav.clientWidth,
        header              = document.querySelector('.header'),
        previous            = window.scrollY;

    window.addEventListener('scroll', () => {

        if(window.scrollY > previous) {
            if (scrollY >= navPositionY) {         
                header.style.paddingBottom = nav.clientHeight + 'px';
                nav.style.width = navWidth + 'px';
                nav.classList.add('nav--is-fixed');
            }
        } else {
            if (scrollY <= navPositionY) {            
                header.style.paddingBottom = 0 + 'px';
                nav.classList.remove('nav--is-fixed');
            }
        }

        previous = window.scrollY;
    })
}

stickyHeader();