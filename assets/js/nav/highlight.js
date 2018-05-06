const highlight = (function() {
    let sections = document.querySelectorAll('.section'),
        navItems = document.querySelectorAll('.nav__link'),
        highlightNavArray = [],
        activeSection;

    class highlightNav {
        constructor(item, data) {
            this.item = item,
            this.data = data
        }
    }

    for (let i = 0; i < navItems.length; i++) {
        let navItem = navItems[i],
            navItemData = navItem.getAttribute("href").replace('#', '');
        
        let highlightNavItem = new highlightNav(navItem, navItemData);
        highlightNavArray.push(highlightNavItem);
    }

    window.addEventListener('scroll', () => {
        for (let i = 0; i < sections.length; i++) {
            let section = sections[i],
                sectionData = section.id,
                bounding  = section.getBoundingClientRect();

            if(bounding.top <= 0) {
                activeSection = section;
            }            
        }
        
        if(activeSection) {
            let activeSectionData = activeSection.id;

            for (let i = 0; i < highlightNavArray.length; i++) {
                const element = highlightNavArray[i];
                
                if (element.data == activeSectionData) {
                    highlightNavArray.forEach(item => {
                        item.item.classList.remove('nav__link--is-active');
                    });
                    element.item.classList.add('nav__link--is-active')
                }
            }
        }
    })   

})();