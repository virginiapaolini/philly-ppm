document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('hamburger-menu');
    const menu = document.getElementById('mega-menù');

    if (btn && menu) {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();

            // Toggle della classe custom per mostrare/nascondere
            menu.classList.toggle('is-active');

            // Aggiorna l'attributo aria per l'accessibilità
            const isOpen = menu.classList.contains('is-active');
            btn.setAttribute('aria-expanded', isOpen);

            console.log("Stato menu aperto:", isOpen);
        });

        // Chiudi il menu se clicchi ovunque fuori
        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !btn.contains(e.target)) {
                menu.classList.remove('is-active');
                btn.setAttribute('aria-expanded', 'false');
            }
        });
    } else {
        console.error("Errore: ID 'hamburger-menu' o 'mega-menù' non trovati!");
    }
});