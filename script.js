const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-bars");
const scrollBtn = document.createElement("button");
const header = document.querySelector("#header");
const nav = document.querySelector("#nav");
const list = document.querySelectorAll("a");
const fName = document.querySelector("#fname");
const pass1 = document.querySelector("#passw1");
const pass2 = document.querySelector("#passw2");
const submitBtn = document.querySelector("#submitBtn");
const slider = document.querySelector(".checkbox");
const aboutSection = document.querySelector(".about__section");
const aboutSectionWrapper = document.querySelector(".about__section__wrapper2");
const formSection = document.querySelector(".section__form");
const formDiv = document.querySelector(".div__form");
const footerSection = document.querySelector(".section__footer");
const footerHeart = document.querySelector(".footer_heart");
const passEye = document.querySelectorAll("#passEye");
const inputAlert = document.querySelector(".input-alert");
const paragraphAlert = document.createElement("p");

/* ---------- DARK/LIGHT MODE ------------ */

const menuLoop = () => {
  for (let i = 0; i < list.length; i++) {
    list[i].classList.toggle("light");
  }
};

slider.addEventListener("change", () => {
  hamburgerIcon.classList.toggle("light");

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
  footerSection.classList.toggle("light-neumorphism");
  footerHeart.classList.toggle("light-footer_heart");
  menuLoop();
});

/* ---------- NAV BAR COLOR TRANSITION ------------ */

window.addEventListener("scroll", () => {
  if (window.scrollY > 100)
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

document.addEventListener("click", (e) => {
  if (!hamburgerIcon.contains(e.target) && !menuList.contains(e.target)) {
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
  }
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
for (let i = 0; i < passEye.length; i++) {
  passEye[i].addEventListener("click", () => {
    passEye[i].classList.toggle("fa-eye");
    pass1.toggleAttribute("type");
    console.log("clicked");
  });
}
const alertMessage = () => {
  if (fName.value.trim() === "") {
    inputAlert.classList.remove("input-alert");
    paragraphAlert.classList.add("alert-paragraph");
    paragraphAlert.textContent = "Fillout your nickname";
    inputAlert.append(paragraphAlert);
    console.log("Empty");
  }
  fName.addEventListener("keyup", () => {
    if (fName.value.trim() !== "") {
      inputAlert.classList.add("input-alert");
    }
  });
};

pass2.addEventListener("keyup", () => {
  pass1.value === pass2.value && pass1.value !== ""
    ? (pass2.style.outline = "2px solid green")
    : (pass2.style.outline = "2px solid white");
});

const clearInput = () => {
  fName.value = "";
  pass1.value = "";
  pass2.value = "";
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  alertMessage();
  clearInput();
});
