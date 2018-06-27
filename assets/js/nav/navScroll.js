import jump from 'jump.js';

const smoothScroll = (function() {

    let triggers = document.querySelectorAll('.nav__link'),
        link = {};

    for (let i = 0; i < triggers.length; i++) {
        const element = triggers[i];
        element.addEventListener('click', (e) => {
            let target = '#' + element.href.substring(element.href.indexOf("#") + 1);
            console.log(target);
            jump(target)
        })
    }

})();


// import { scrollIt } from "./smoothScroll";

// const smoothTrigger = function(target) {
//     for (let i = 0; i < target.length; i++) {
//         const element = target[i];
        
//         element.addEventListener('click', () => {
//             let target = element.getAttribute("href");
//                 target = document.querySelector(target);

//             scrollIt (
//                 target,
//                 300,
//                 'easeOutQuad'
//             );
//         });
//     }
// }

// const smoothTarget = (function() {
//     let NAV_LINKS       = document.querySelectorAll('.nav__link'),
//         NAV_BRAND       = document.querySelector('.nav__brand'),
//         MOBILE_LINKS    = document.querySelectorAll('header .cta__item > a'),
//         TRIGGERS        = [];

//     for (let i = 0; i < NAV_LINKS.length; i++) {
//         TRIGGERS.push(NAV_LINKS[i]);
//     }
    
//     for (let i = 0; i < MOBILE_LINKS.length; i++) {
//         TRIGGERS.push(MOBILE_LINKS[i]);
//     }

//     TRIGGERS.push(NAV_BRAND);
//     smoothTrigger(TRIGGERS);
// })();
