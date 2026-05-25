const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navMenu = document.querySelector(".nav-menu");          // <-- the menu container

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

// Close menu when X is clicked (always close, never toggle)
menuCloseButton.addEventListener("click", () => {
  document.body.classList.remove("show-mobile-menu");
});

// Close menu when clicking anywhere outside the menu
document.addEventListener("click", (event) => {
  // Only do something if the menu is currently open
  if (!document.body.classList.contains("show-mobile-menu")) return;

  // If the click is inside the menu itself, or on the open button – ignore it
  if (navMenu.contains(event.target) || menuOpenButton.contains(event.target)) return;

  // Otherwise, the click was outside → close the menu
  document.body.classList.remove("show-mobile-menu");
});

// Swiper initialisation
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});