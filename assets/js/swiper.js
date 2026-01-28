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

// Section 2 Hero Slider
var swiperSection2 = new Swiper("#swiperSection2 .swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 800,
  breakpoints: {
    // Màn hình >= 576px: 2 items
    375: {
      slidesPerView: 1.5,
    },
    576: {
      slidesPerView: 2,
    },
    // Màn hình >= 992px: 4 items
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: 'row',
      },
      spaceBetween: 0,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});

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
    // >= 576px: 1 slide (mobile)
    576: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // >= 768px: 2 slides (tablet)
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    // >= 1200px: 3 slides (desktop)
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// Section 6 Project Swiper (Mobile only)
var projectSwiper = new Swiper(".project-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
});

// Blog Section Swiper
var swiperBlog = new Swiper(".swiperBlog", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  breakpoints: {
    // >= 992px: 2 columns, 3 rows
    992: {
      slidesPerView: 2,
      spaceBetween: 24,
      grid: {
        rows: 3,
        fill: 'row',
      },
    },
    // >= 1200px: 3 columns, 2 rows
    1200: {
      slidesPerView: 3,
      spaceBetween: 24,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
  },
});
