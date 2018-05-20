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
    })

}

var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

if(!isSafari && !isFirefox) {
    scrollProgress();    
}