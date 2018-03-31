    const mobileNavTrigger = (function() {
        let trigger = document.querySelector('.nav__trigger'),
            nav     = document.querySelector('.nav'),
            body    = document.querySelector('body'),
            html    = document.querySelector('html');
        
        trigger.addEventListener('click', function(event) {
            event.preventDefault();
            
            trigger.classList.contains('hamburger__wrapper--is-active') ? trigger.classList.remove('hamburger__wrapper--is-active') : trigger.classList.add('hamburger__wrapper--is-active');
            nav.classList.contains('nav--is-visible') ? nav.classList.remove('nav--is-visible') : nav.classList.add('nav--is-visible');
            body.classList.contains('no-scroll') ? body.classList.remove('no-scroll') : body.classList.add('no-scroll');
            html.classList.contains('no-scroll') ? html.classList.remove('no-scroll') : html.classList.add('no-scroll');
        })
    })();