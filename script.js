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
