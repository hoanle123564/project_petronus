// Section 1 Hero Slider
var swiperSection1 = new Swiper(".swiper-section-1", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoHeight: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 800,
});

var swiperSection2 = null;
var swiperSection7 = null;

function initSwiper() {
  // Section 2 Swiper
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
window.addEventListener("resize", initSwiper);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // Màn hình >= 576px: 2 items
    576: {
      slidesPerView: 2,
    },
    // Màn hình >= 992px: 4 items
    992: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".swiperSection7", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

// Section 10 Testimonial Swiper
var swiperSection10 = new Swiper(".swiperSection10", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".section-10 .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // >= 768px: 1 slide (mobile)
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // >= 990px: 2 slides (tablet)
    990: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    // >= 1200px: 3 slides (desktop)
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Section 6 Project Swiper (Mobile only)
var projectSwiper = new Swiper(".project-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
});
