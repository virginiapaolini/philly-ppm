document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('hamburger-menu');
    const menu = document.getElementById('mega-menù');
    const header = document.getElementById('app-bar'); // Recuperiamo l'header

    if (btn && menu) {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            menu.classList.toggle('is-active');

            const isOpen = menu.classList.contains('is-active');
            btn.setAttribute('aria-expanded', isOpen);

            // CORREZIONE: Se il menu è aperto, forziamo l'header a essere visibile
            // e non tagliare nulla verso il basso
            if (isOpen) {
                header.style.overflow = "visible";
                header.style.zIndex = "20000";
            }
        });

        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !btn.contains(e.target)) {
                menu.classList.remove('is-active');
                btn.setAttribute('aria-expanded', 'false');
            }
        });
    }
});