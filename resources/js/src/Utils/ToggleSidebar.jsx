export function toggleSidebar() {
    let toggle = document.querySelector('.sidebar-toggle');

    if (toggle) {
        toggle.addEventListener('click', e => {
            let brand_sm = document.querySelector('.navbar-brand .brand-sm');
            let brand_bg = document.querySelector('.navbar-brand .brand-big');
            if (toggle.classList.contains('active')) {
                toggle.classList.remove('active');
                brand_sm.classList.remove('visible');
                brand_bg.classList.add('visible')

            } else {
                toggle.classList.add('active');
                brand_sm.classList.add('visible');
                brand_bg.classList.remove('visible')
            }
            if (toggle.firstChild.classList.contains('fa-long-arrow-right')) {
                toggle.firstChild.classList.remove('fa-long-arrow-right')
                toggle.firstChild.classList.add('fa-long-arrow-left')
            } else {
                toggle.firstChild.classList.add('fa-long-arrow-right')
                toggle.firstChild.classList.remove('fa-long-arrow-left')
            }
            let shrinked = document.querySelector('#sidebar');
            if (shrinked.classList.contains('shrinked')) {
                shrinked.classList.remove('shrinked')
            } else {
                shrinked.classList.add('shrinked')
            }
            let content = document.querySelector('.page-content');
            if (content.classList.contains('active')) {
                content.classList.remove('active')
            } else {
                content.classList.add('active')
            }
        })
    }
}