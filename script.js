document.getElementById("menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav ul").classList.toggle("active");
});

// Animación de entrada suave al hacer scroll
window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".servicio, .galeria img, form");
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});
