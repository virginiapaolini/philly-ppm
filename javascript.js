document.addEventListener('click', function(event) {
    const allBtns = document.querySelectorAll(
        '#menu-toggle-desktop, #menu-toggle-mobile, #menu-toggle-sticky, ' +
        '#search-toggle-desktop, #search-toggle-mobile, #search-toggle-sticky'
    );

    const menuBtn = event.target.closest('#menu-toggle-desktop, #menu-toggle-mobile, #menu-toggle-sticky');

    if (menuBtn) {
        event.preventDefault();
        const m1 = document.getElementById('mega-menu');
        const m2 = document.getElementById('mega-menu2');
        const s1 = document.getElementById('search-dropdown');
        const s2 = document.getElementById('search-dropdown2');

        const targetMenu = (menuBtn.id === 'menu-toggle-sticky') ? m2 : m1;
        const isOpening = !targetMenu.classList.contains('is-visible');

        allBtns.forEach(b => b.classList.remove('is-active'));
        s1.classList.remove('is-open');
        s2.classList.remove('is-open');

        if (menuBtn.id === 'menu-toggle-sticky') {
            m1.classList.remove('is-visible');
            m2.classList.toggle('is-visible');
        } else {
            m2.classList.remove('is-visible');
            m1.classList.toggle('is-visible');
        }
        if (isOpening) menuBtn.classList.add('is-active');

        return;
    }
    const searchBtn = event.target.closest('#search-toggle-desktop, #search-toggle-mobile, #search-toggle-sticky');
    if (searchBtn) {
        event.preventDefault();
        const s1 = document.getElementById('search-dropdown');
        const s2 = document.getElementById('search-dropdown2');
        const m1 = document.getElementById('mega-menu');
        const m2 = document.getElementById('mega-menu2');

        const targetSearch = (searchBtn.id === 'search-toggle-sticky') ? s2 : s1;
        const isOpening = !targetSearch.classList.contains('is-open');

        allBtns.forEach(b => b.classList.remove('is-active'));
        m1.classList.remove('is-visible');
        m2.classList.remove('is-visible');

        if (searchBtn.id === 'search-toggle-sticky') {
            s1.classList.remove('is-open');
            s2.classList.toggle('is-open');
        } else {
            s2.classList.remove('is-open');
            s1.classList.toggle('is-open');
        }

        // Se abbiamo aperto la search, aggiungiamo il triangolino
        if (isOpening) searchBtn.classList.add('is-active');

        return;
    }

    if (!event.target.closest('#mega-menu, #mega-menu2, #search-dropdown, #search-dropdown2')) {
        document.getElementById('mega-menu').classList.remove('is-visible');
        document.getElementById('mega-menu2').classList.remove('is-visible');
        document.getElementById('search-dropdown').classList.remove('is-open');
        document.getElementById('search-dropdown2').classList.remove('is-open');

        // levo il triangolino da tutti i bottoni
        allBtns.forEach(b => b.classList.remove('is-active'));
    }
});

// sticky nav !!!!
window.addEventListener('scroll', function() {
    const secondNav = document.querySelector('nav.fixed-top');
    if (secondNav) {
        if (window.scrollY > 200) {
            secondNav.classList.add('is-sticky');
        } else {
            secondNav.classList.remove('is-sticky');
        }
    }
});