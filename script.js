// ---- Hamburger Menu ----
document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    const backdrop = document.getElementById("backdrop");

    if (!hamburger || !mobileMenu || !backdrop) return;

    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("open");
        mobileMenu.classList.toggle("open");
        backdrop.classList.toggle("open");
        document.body.classList.toggle("menu-open");
    });
});

// ---- Search Tabs Active Toggle ----
document.querySelectorAll('.search-tabs .nav-link').forEach(tab => {
    tab.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelectorAll('.search-tabs .nav-link').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});
// ---- Hero Swiper ----
if (document.querySelector('#heroSwiper')) {
    new Swiper('#heroSwiper', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        navigation: {
            prevEl: '#heroSwiper .swiper-button-prev',
            nextEl: '#heroSwiper .swiper-button-next',
        },
        pagination: {
            el: '#heroSwiper .swiper-pagination',
            clickable: true,
        },
    });
}
// ---- Reusable Swiper Init ----
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

// ---- Initialize Swipers ----
initSwiper('#saleSwiper');
initSwiper('#rentSwiper');
initSwiper('#newListingSwiper');
initSwiper('#freeListingSwiper');
initSwiper('#testimonialSwiper');
initSwiper('#relatedSwiper');

// ---- Gallery Swiper (Detail Page) ----
const galleryThumbsEl = document.querySelector('.gallery-thumbs');
const galleryMainEl = document.querySelector('.gallery-main');

if (galleryThumbsEl && galleryMainEl) {
    const galleryThumbs = new Swiper('.gallery-thumbs', {
        slidesPerView: 4,
        spaceBetween: 8,
        watchSlidesProgress: true,
    });

    const galleryMain = new Swiper('.gallery-main', {
        spaceBetween: 10,
        loop: true,                        // ← enable looping
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        thumbs: {
            swiper: galleryThumbs,
        },
    });
}

// ---- Section Toggle (Detail Page) ----
function toggleSection(toggleEl) {
    const section = toggleEl.closest('.detail-section');
    const body = section.querySelector('.section-body');
    const icon = toggleEl.querySelector('.toggle-icon');
    const isOpen = body.style.display !== 'none';

    body.style.display = isOpen ? 'none' : 'block';
    icon.classList.toggle('rotated', isOpen);
}

// ---- Floor Toggle (Detail Page) ----
function toggleFloor(toggleEl) {
    const floorList = toggleEl.closest('.floor-list');
    const floorBody = floorList.querySelector('.floor-body');
    const floorIcon = toggleEl.querySelector('.floor-toggle-icon');
    const isOpen = floorBody.style.display !== 'none';

    floorBody.style.display = isOpen ? 'none' : 'block';
    floorIcon.classList.toggle('rotated', isOpen);
}