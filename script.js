const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-bars");
const scrollBtn = document.createElement("button");
const header = document.querySelector("#header");
const nav = document.querySelector("#nav");
const fName = document.querySelector("#fname");
const pass1 = document.querySelector("#passw1");
const pass2 = document.querySelector("#passw2");
const inputs = document.querySelectorAll(".input");
const submitBtn = document.querySelector("#submitBtn");
const slider = document.querySelector(".checkbox");
const aboutSection = document.querySelector(".about__section");
const formSection = document.querySelector(".section__form");
const gallerySection = document.querySelector(".section__gallery");
const heroSection = document.querySelector(".hero__section");
const passEye1 = document.querySelector("#passEye1");
const passEye2 = document.querySelector("#passEye2");
const passWord = document.querySelectorAll(".password-div");
const inputAlert = document.querySelector(".input-alert");
const inputAlertPassword = document.querySelector(".input-alert-password");
const paragraphAlertNickname = document.createElement("p");
const paragraphAlertPassword = document.createElement("p");
const modalDiv = document.querySelector(".modal-div");
const modalParagraph = document.createElement("p");
const xBtn = document.querySelector(".fa-times");
const body = document.querySelector("body");
/* ---------- DARK/LIGHT MODE ------------ */

slider.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  header.classList.toggle("dark_header");
  nav.classList.toggle("dark_header");
  paragraphAlertPassword.classList.toggle("dark_alert");
  paragraphAlertNickname.classList.toggle("dark_alert");
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
/* ---------- NAV BAR WHEN CLICK ANYWHERE ELSE, MENU WILL CLOSE ------------ */

document.addEventListener("click", (e) => {
  if (!hamburgerIcon.contains(e.target) && !menuList.contains(e.target)) {
    hamburgerIcon.classList.remove("fa-xmark");

    menuList.style.display = "none";
  }
});

/* ---------- SCROLL TO TOP BUTTON ------------ */

const scrollTimeout = () => {
  setTimeout(() => {
    formSection.classList.add("snap");
    gallerySection.classList.add("snap");
    aboutSection.classList.add("snap");
    heroSection.classList.add("snap");
  }, 500);
};

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
      window.scrollTo(0, window.scrollY - 100);
      scrollWindow();
    }, 10);
    formSection.classList.remove("snap");
    gallerySection.classList.remove("snap");
    aboutSection.classList.remove("snap");
    heroSection.classList.remove("snap");

    scrollTimeout();
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

passEye1.addEventListener("click", () => {
  passEye1.classList.toggle("fa-eye");
  const type = pass1.getAttribute("type") === "password" ? "text" : "password";
  pass1.setAttribute("type", type);
});
passEye2.addEventListener("click", () => {
  passEye2.classList.toggle("fa-eye");
  const type2 = pass2.getAttribute("type") === "password" ? "text" : "password";
  pass2.setAttribute("type", type2);
});

const alertMessageNickname = () => {
  if (fName.value.trim() === "") {
    inputAlert.classList.remove("input-alert");
    paragraphAlertNickname.classList.add("alert-paragraph");
    paragraphAlertNickname.textContent = "Fillout your nickname";
    inputAlert.append(paragraphAlertNickname);
  }
  fName.addEventListener("keyup", () => {
    if (fName.value.trim() !== "") {
      inputAlert.classList.add("input-alert");
    }
  });
};

// CHECKING IF PASSWORD FIELD IS EMPTY

const alertMessagePassword = () => {
  if (pass1.value.trim() === "" || pass2.value.trim() === "") {
    inputAlertPassword.classList.remove("input-alert-password");
    paragraphAlertPassword.classList.add("alert-paragraph-password");
    paragraphAlertPassword.textContent = "Fillout your password";
    inputAlertPassword.append(paragraphAlertPassword);
  }

  pass1.addEventListener("keyup", () => {
    if (pass1.value.trim() !== "") {
      inputAlertPassword.classList.add("input-alert-password");
    }
  });
  pass2.addEventListener("keyup", () => {
    if (pass2.value.trim() !== "") {
      inputAlertPassword.classList.add("input-alert-password");
    }
  });
};

// CHECKING IF PASSWORD INPUTS ARE MATCHING

const checkPassword = () => {
  pass2.value === pass1.value
    ? (pass2.style.border = "2px solid green")
    : (pass2.style.border = "2px solid red");
};

pass2.addEventListener("keyup", () => {
  if (pass2.value.trim() !== "") {
    checkPassword();
  }

  pass1.addEventListener("keyup", checkPassword());
});
pass1.addEventListener("keyup", () => {
  if (pass1.value.trim() !== "") {
    checkPassword();
  }

  pass2.addEventListener("keyup", checkPassword());
});

const clearStyles = () => {
  if (pass2.classList.contains("light-neumorphism-form")) {
    pass2.style.border = "1px solid black";
  } else if (!pass2.classList.contains("light-neumorphism-form")) {
    pass2.style.border = "1px solid white";
  }
  pass2.removeAttribute("style");
};

const clearInput = () => {
  fName.value = "";
  pass1.value = "";
  pass2.value = "";
  clearStyles();
};

const divTimeout = () => {
  setTimeout(() => {
    modalDiv.style.display = "none";
  }, 3000);
};

const modalName = () => {
  if (fName.value.trim() === "") {
  } else if (pass1.value.trim() === "") {
  } else if (pass2.value.trim() === "") {
  } else {
    modalParagraph.textContent = "Welcome " + fName.value;
    modalDiv.append(modalParagraph);
    modalParagraph.classList.add("modal-paragraph");
    modalDiv.style.display = "block";
    xBtn.addEventListener("click", () => {
      modalDiv.style.display = "none";
    });
    divTimeout();
  }
};
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modalName(e);
  alertMessageNickname();
  alertMessagePassword();
  clearInput();
});
