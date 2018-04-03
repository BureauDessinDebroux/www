(function dropdown() {
    let triggers = document.querySelectorAll('.dropdown');

    for (let i = 0; i < triggers.length; i++) {
        let content         = triggers[i].querySelector('.dropdown__content'),
            content_height  = content.clientHeight,
            open;

        content.style.height = 0;

        triggers[i].addEventListener('click', () => {
            if (triggers[i].classList.contains('dropdown--is-open')) {
                open = true;
            } else {
                open = false;
            }

            triggers.forEach(element => {
                element.classList.remove('dropdown--is-open');
                element.querySelector('.dropdown__content').style.height = 0;
            });

            open == true ? triggers[i].classList.remove('dropdown--is-open') : triggers[i].classList.add('dropdown--is-open');

            if (content.clientHeight > 0) {
                content.style.height = 0 + 'px';
            } else {
                content.style.height = content_height + 'px';
            }
        });
    }
})();


(function sidebarDropdown() {
    let trigger = document.querySelectorAll('.tab'),
        target  = document.querySelectorAll('.services__details'),
        tab     = document.querySelector('.services__tab');

    for (let i = 0; i < trigger.length; i++) {
        
        trigger[i].addEventListener('mouseover', () => {

            trigger.forEach(element => {
                element.classList.remove('tab--is-active');
            });
        
            trigger[i].classList.add('tab--is-active');
            let data    = trigger[i].dataset.service,
                top     = trigger[i].dataset.top;

            for (let i = 0; i < target.length; i++) {
                target[i].classList.remove('services__details--is-active');

                if(target[i].dataset.service == data) {
                    target[i].classList.add('services__details--is-active');
                }
            }

            tab.style.transform = 'translateY(' + top + 'rem)';
        })
    }
})();