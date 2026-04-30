document.addEventListener('DOMContentLoaded', function() {
    // selectors elementi
    const menuDesktopBtn = document.getElementById('menu-toggle-desktop');
    const menuMobileBtn = document.getElementById('menu-toggle-mobile');
    const searchDesktopBtn = document.getElementById('search-toggle-desktop');
    const searchMobileBtn = document.getElementById('search-toggle-mobile');

    const megaMenu = document.getElementById('mega-menu');
    const searchDropdown = document.getElementById('search-dropdown');

    function toggleMenu() {
        // Chiudiamo la search bar se è aperta
        searchDropdown.classList.remove('is-open');
        // Alterniamo il menu
        megaMenu.classList.toggle('is-visible');
    }

    function toggleSearch() {
        // chiudiamo il menu se è aperto
        megaMenu.classList.remove('is-visible');
        // alterniamo la search
        searchDropdown.classList.toggle('is-open');

        // focus automatico sull'input quando si apre
        if(searchDropdown.classList.contains('is-open')) {
            setTimeout(() => document.getElementById('search').focus(), 300);
        }
    }

    if(menuDesktopBtn) menuDesktopBtn.addEventListener('click', toggleMenu);
    if(menuMobileBtn) menuMobileBtn.addEventListener('click', toggleMenu);

    if(searchDesktopBtn) searchDesktopBtn.addEventListener('click', toggleSearch);
    if(searchMobileBtn) searchMobileBtn.addEventListener('click', toggleSearch);

    // chiudi tutto se clicchi fuori dal menù!
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = megaMenu.contains(event.target);
        const isClickOnMenuBtn = menuDesktopBtn.contains(event.target) || menuMobileBtn.contains(event.target);
        const isClickInsideSearch = searchDropdown.contains(event.target);
        const isClickOnSearchBtn = searchDesktopBtn.contains(event.target) || searchMobileBtn.contains(event.target);

        if (!isClickInsideMenu && !isClickOnMenuBtn && !isClickInsideSearch && !isClickOnSearchBtn) {
            megaMenu.classList.remove('is-visible');
            searchDropdown.classList.remove('is-open');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('mobile-search-btn');
    const searchContainer = document.getElementById('search-dropdown-container');
    const menuBtn = document.getElementById('mobile-menu-btn');

    // --- FUNZIONALITÀ RICERCA ---
    searchBtn.addEventListener('click', function() {
        // Controlliamo se è già aperto (altezza > 0)
        if (searchContainer.style.height === '0px' || searchContainer.style.height === '') {
            searchContainer.style.height = '110px'; // Altezza necessaria per mostrare l'input
            searchBtn.classList.add('active');
        } else {
            searchContainer.style.height = '0px';
            searchBtn.classList.remove('active');
        }
    });

    // --- FUNZIONALITÀ MENU ---
    menuBtn.addEventListener('click', function() {
        // Toggle di una classe 'open' per animare le tre linee (hamburger)
        this.classList.toggle('open');

        // Qui dovresti aggiungere la logica per mostrare il menu vero e proprio
        // Esempio: document.getElementById('main-menu-overlay').classList.toggle('visible');
        console.log("Menu cliccato!");
    });

    // Chiudi la ricerca se si clicca fuori
    document.addEventListener('click', function(event) {
        if (!searchContainer.contains(event.target) && !searchBtn.contains(event.target)) {
            searchContainer.style.height = '0px';
        }
    });
});