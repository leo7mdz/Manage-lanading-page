const menuItem = document.querySelector(".item-menu"),
  menu = document.querySelector(".menu");

document.addEventListener("click", (e) => {
  if (e.target === menuItem) {
    menu.classList.toggle("menu-is-active");
  }
});
window.addEventListener("resize", (e) => {
  menu.classList.remove("menu-is-active");
});

window.addEventListener("scroll", (e) => {
  if (window.scrollY) {
    menu.classList.remove("menu-is-active");
  }
});

/*swiper*/

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  //autoplay
  autoplay: {
    delay: 3000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  /*  scrollbar: {
    el: ".swiper-scrollbar",
  }, */

  slidesPerView: 1,
  spaceBetween: 10,

  breakpoints: {
    620: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

/* end swiper */

/*form  */
