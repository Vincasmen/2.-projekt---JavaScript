const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-bars");

menuIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("fa-xmark");
  menuList.style.display =
    menuList.style.display === "block" ? "none" : "block";
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  breakpoints: {
    // when window width is >= 320px
    1024: {
      spaceBetween: 10,
    },
    1440: {
      spaceBetween: 40,
    },
    2560: {
      spaceBetween: 100,
    },
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
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
