// ── Hamburger Menu ──
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    const backdrop = document.getElementById("menuBackdrop");

    if (!hamburger || !mobileMenu) return;

    const toggle = (force) => {
        const open = force ?? !mobileMenu.classList.contains("open");
        [hamburger, mobileMenu, backdrop].forEach(el => el?.classList.toggle("open", open));
        document.body.style.overflow = open ? "hidden" : "";
    };

    hamburger.addEventListener("click", () => toggle());
    backdrop.addEventListener("click", () => toggle(false));
    mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => toggle(false)));
});

// ── Reusable Swiper Init ──
function initSwiper(id, slides = 4) {
    if (typeof Swiper === "undefined") return;

    const el = document.querySelector(id);
    if (!el) return;

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
            prevEl: el.querySelector('.swiper-button-prev'), // ✅ Fixed
            nextEl: el.querySelector('.swiper-button-next'), // ✅ Fixed
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