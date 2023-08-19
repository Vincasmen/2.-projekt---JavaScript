const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-bars");

menuIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("fa-xmark");
  menuList.style.display =
    menuList.style.display === "block" ? "none" : "block";
});
