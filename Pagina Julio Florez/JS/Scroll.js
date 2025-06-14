let lastScrollTop = 0;
const navbar = document.getElementById("nav");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll hacia abajo -> esconder navbar
    navbar.style.top = "-100px";
  } else {
    // Scroll hacia arriba -> mostrar navbar
    navbar.style.top = "1px";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});