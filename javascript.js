
    document.addEventListener('DOMContentLoaded', function() {
    // 1. Gestione Data Odierna
    const dateEl = document.getElementById('current-date');
    if(dateEl) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.innerText = new Date().toLocaleDateString('en-US', options);
}

    // toggle Mega Menu
    const menuBtn = document.getElementById('hamburger-btn');
    const megaMenu = document.getElementById('mega-menu');

    if(menuBtn && megaMenu) {
    menuBtn.addEventListener('click', function() {
    megaMenu.classList.toggle('d-none');
    // Effetto semplice rotazione hamburger
    this.classList.toggle('active');
});
}

    // chiudi menu cliccando fuori
    window.addEventListener('click', function(e) {
    if (!menuBtn.contains(e.target) && !megaMenu.contains(e.target)) {
    megaMenu.classList.add('d-none');
}
});
});