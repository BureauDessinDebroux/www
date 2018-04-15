(function dropdown() {
    let triggers = document.querySelectorAll('.dropdown > h4'),
        parents  = [];

    for (let i = 0; i < triggers.length; i++) {
        let content         = triggers[i].parentNode.childNodes[3],
            content_height  = content.clientHeight,
            parent          = triggers[i].parentNode,
            open;

        parents.push(parent);
        

        content.style.height = 0;

        triggers[i].addEventListener('click', () => {
            if (parent.classList.contains('dropdown--is-open')) {
                open = true;
            } else {
                open = false;
            }

            parents.forEach(element => {
                element.classList.remove('dropdown--is-open');
                element.querySelector('.dropdown__content').style.height = 0;
            });

            open == true ? parent.classList.remove('dropdown--is-open') : parent.classList.add('dropdown--is-open');

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

            for (let i = 0; i < trigger.length; i++) {
                const element = trigger[i]; 
                element.classList.remove('tab--is-active');
            }
        
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