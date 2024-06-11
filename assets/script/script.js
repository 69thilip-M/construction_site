/* search */
let search_bar = document.querySelector(".search_bar");

document.querySelector("#search").onclick = () => {
  search_bar.classList.toggle("active");
  login.classList.remove("active");
  navbar.classList.remove("active");
};

/* login */
let login = document.querySelector(".login-form");

document.querySelector("#login").onclick = () => {
  login.classList.toggle("active");
  search_bar.classList.remove("active");
  navbar.classList.remove("active");
};
/* menu */
let navbar = document.querySelector(".navbar");
document.querySelector("#menu").onclick = () => {
  navbar.classList.toggle("active");
  search_bar.classList.remove("active");
  login.classList.remove("active");
};

window.onscroll = () => {
  login.classList.remove("active");
  search_bar.classList.remove("active");
  navbar.classList.remove("active");
};
/* hero section */
var swiper = new Swiper(".home-slider", {
  autoplay: {
    delay: 5000,
    disableOnInteractions: false,
  },
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
