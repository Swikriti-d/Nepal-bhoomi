// ===================== HAMBURGER MENU =====================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');

    if (mobileMenu.classList.contains('open')) {
        mobileMenu.style.display = 'block';
    } else {
        setTimeout(() => {
            mobileMenu.style.display = 'none';
        }, 350); // matches CSS transition duration
    }
});