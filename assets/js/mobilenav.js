const width = (function() {
    window.addEventListener('resize', function(event){
        console.log(window.innerWidth);
    });

})();

const mobileNavEvent = (function() {
    let trigger = document.querySelector('.nav__trigger'),
        nav     = document.querySelector('.nav'),
        html    = document.querySelector('html'),
        navLinks = document.querySelectorAll('.nav__link'),
        breakpoint = window.matchMedia( "(max-width: 1024px)" );
    
    if(breakpoint.matches) {
        // MOBILE NAV TRIGGER
        trigger.addEventListener('click', (event) => {
            mobileNavAction();
        })
        for (let i = 0; i < navLinks.length; i++) {
            const element = navLinks[i];
            element.addEventListener('click', (event) => {
                mobileNavAction();
            })
        }

        // MOBILE NAV OPENING & CLOSING ACTION
        const mobileNavAction = function() {     
            trigger.classList.contains('hamburger__wrapper--is-active') ? trigger.classList.remove('hamburger__wrapper--is-active') : trigger.classList.add('hamburger__wrapper--is-active');
            nav.classList.contains('nav--is-visible') ? nav.classList.remove('nav--is-visible') : nav.classList.add('nav--is-visible');
            html.classList.contains('no-scroll') ? html.classList.remove('no-scroll') : html.classList.add('no-scroll');
        }
    }
})();