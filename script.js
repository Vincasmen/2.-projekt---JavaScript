const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-bars");
const scrollBtn = document.createElement("button");
const header = document.querySelector("#header");
const nav = document.querySelector("#nav");
const list = document.querySelectorAll("a");
const fName = document.querySelector("#fname");
const lName = document.querySelector("#lname");
const pass1 = document.querySelector("#passw1");
const pass2 = document.querySelector("#passw2");
const submitBtn = document.querySelector("#submitBtn");
const slider = document.querySelector(".checkbox");
const aboutSection = document.querySelector(".about__section");
const aboutSectionWrapper = document.querySelector(".about__section__wrapper2");
const formSection = document.querySelector(".section__form");
const formDiv = document.querySelector(".div__form");

/* ---------- DARK/LIGHT MODE ------------ */

const menuLoop = () => {
  for (let i = 0; i < list.length; i++) {
    list[i].classList.toggle("light");
  }
};

slider.addEventListener("change", () => {
  header.classList.toggle("light");
  nav.classList.toggle("light");
  aboutSection.classList.toggle("light");
  aboutSectionWrapper.classList.toggle("light-neumorphism");
  formSection.classList.toggle("light");
  formDiv.classList.toggle("light-neumorphism");
  fName.classList.toggle("light-neumorphism-form");
  pass1.classList.toggle("light-neumorphism-form");
  pass2.classList.toggle("light-neumorphism-form");
  submitBtn.classList.toggle("light-neumorphism");
  menuLoop();
});

/* ---------- NAV BAR COLOR TRANSITION ------------ */

window.addEventListener("scroll", () => {
  if (window.scrollY > 100 && slider.unchecked)
    (header.style.background = "rgb(21, 21, 21, 0.80)"),
      (nav.style.background = "rgb(21, 21, 21, 0.80)");
  else
    (header.style.background = "rgb(21, 21, 21)"),
      (nav.style.background = "rgb(21, 21, 21)");
});

menuIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("fa-xmark");
  menuList.style.display =
    menuList.style.display === "block" ? "none" : "block";
});

/* ---------- SCROLL TO TOP BUTTON ------------ */

const scrollTop = function () {
  scrollBtn.innerHTML = "&uarr;";
  scrollBtn.setAttribute("id", "scroll-btn");
  document.body.appendChild(scrollBtn);
};
const scrollBtnDisplay = function () {
  window.scrollY > window.innerHeight
    ? scrollBtn.classList.add("show")
    : scrollBtn.classList.remove("show");
};
window.addEventListener("scroll", scrollBtnDisplay);
const scrollWindow = function () {
  if (window.scrollY != 0) {
    setTimeout(function () {
      window.scrollTo(0, window.scrollY - 50);
      scrollWindow();
    }, 10);
  }
};
scrollBtn.addEventListener("click", scrollWindow);
scrollTop();

/* ---------------------- Swiper ---------------------- */

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
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* -------------------- FORM ---------------------- */

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");
  // fName.value;
  // lName.value;
  // pass1.value;
  // pass2.value;

  /* !--------------- NEED TO FIXT THE PASS CHECK -------------- */

  const ffName = fName.value;
  if (typeof ffName !== "string") {
    window.alert("Please re-enter your name");
    // we use strict validation ( !== ) because it's a good practice.
  } else if (pass1 !== pass2) {
    window.alert("Passwords do not match!");
  }
  console.log(typeof fName.value);
});
