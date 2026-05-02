document.addEventListener('click', function(event) {
    const menuBtn = event.target.closest('#menu-toggle-desktop, #menu-toggle-mobile, #menu-toggle-sticky');
    if (menuBtn) {
        event.preventDefault();
        // seleziona i due mega menu
        const m1 = document.getElementById('mega-menu');
        const m2 = document.getElementById('mega-menu2');

        // se clicchi il tasto della sticky nav
        if (menuBtn.id === 'menu-toggle-sticky') {
            m1.classList.remove('is-visible'); // Chiudi l'altro
            m2.classList.toggle('is-visible'); // Apri questo
        } else {
            m2.classList.remove('is-visible'); // Chiudi l'altro
            m1.classList.toggle('is-visible'); // Apri questo
        }

        // chiudo le search quando apri il menu
        document.getElementById('search-dropdown').classList.remove('is-open');
        document.getElementById('search-dropdown2').classList.remove('is-open');
        return; // Esci dalla funzione
    }

    const searchBtn = event.target.closest('#search-toggle-desktop, #search-toggle-mobile, #search-toggle-sticky');

    if (searchBtn) {
        event.preventDefault();
        const s1 = document.getElementById('search-dropdown');
        const s2 = document.getElementById('search-dropdown2');

        if (searchBtn.id === 'search-toggle-sticky') {
            s1.classList.remove('is-open');
            s2.classList.toggle('is-open');
        } else {
            s2.classList.remove('is-open');
            s1.classList.toggle('is-open');
        }

        // Chiudi i menu quando apri la search
        document.getElementById('mega-menu').classList.remove('is-visible');
        document.getElementById('mega-menu2').classList.remove('is-visible');
        return;
    }

    if (!event.target.closest('#mega-menu, #mega-menu2, #search-dropdown, #search-dropdown2')) {
        document.getElementById('mega-menu').classList.remove('is-visible');
        document.getElementById('mega-menu2').classList.remove('is-visible');
        document.getElementById('search-dropdown').classList.remove('is-open');
        document.getElementById('search-dropdown2').classList.remove('is-open');
    }
});

// nav !!!
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