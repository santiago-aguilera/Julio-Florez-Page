document.getElementById("buscador").addEventListener("keyup", function () {
  const texto = this.value.toLowerCase();
  const libros = document.querySelectorAll(".libro");

  libros.forEach(libro => {
    const titulo = libro.querySelector("h3").textContent.toLowerCase();
    libro.style.display = titulo.includes(texto) ? "block" : "none";
  });
});