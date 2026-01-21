var swiperSection2 = null;

function initSwiper() {
    if (window.innerWidth <= 769) {
        if (!swiperSection2) {
            swiperSection2 = new Swiper(".swiperSection2");
        }
    } else {
        if (swiperSection2) {
            swiperSection2.destroy(true, true);
            swiperSection2 = null;
        }
    }
}
initSwiper();
window.addEventListener('resize', initSwiper);
