// ── Hamburger Menu ──
document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener("click", function () {

        hamburger.classList.toggle("open");
        mobileMenu.classList.toggle("open");

    });

});

// Search Tabs Active Toggle
document.querySelectorAll('.search-tabs .nav-link').forEach(tab => {
    tab.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelectorAll('.search-tabs .nav-link').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});

// ── Reusable Swiper Init ──
function initSwiper(id, slides = 4) {

    if (typeof Swiper === "undefined") return;

    const element = document.querySelector(id);
    if (!element) return;

    new Swiper(id, {
        slidesPerView: slides,
        spaceBetween: 12,
        loop: false,
        centeredSlides: false,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },

        navigation: {
            prevEl: id + ' .swiper-button-prev',
            nextEl: id + ' .swiper-button-next',
        },

        breakpoints: {
            0:   { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: slides }
        }
    });
}


// ── Initialize Swipers ──
initSwiper('#saleSwiper');
initSwiper('#rentSwiper');
initSwiper('#newListingSwiper');
initSwiper('#freeListingSwiper');
initSwiper('#testimonialSwiper');