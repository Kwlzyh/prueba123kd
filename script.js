const botones = document.querySelectorAll(".menu__boton");
const vistas = document.querySelectorAll(".vista");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const idVistaElegida = boton.dataset.vista;

    botones.forEach((b) => b.classList.remove("activo"));
    boton.classList.add("activo");

    vistas.forEach((vista) => {
      if (vista.id === idVistaElegida) {
        vista.classList.add("vista--activa");
      } else {
        vista.classList.remove("vista--activa");
      }
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

const contenedorCorazones = document.getElementById("fondo-corazones");
const emojisCorazon = ["💗", "💖", "💕", "🩷"];
const CANTIDAD_CORAZONES = 18;

for (let i = 0; i < CANTIDAD_CORAZONES; i++) {
  const corazon = document.createElement("span");
  corazon.className = "corazon-flotante";
  corazon.textContent =
    emojisCorazon[Math.floor(Math.random() * emojisCorazon.length)];

  corazon.style.left = `${Math.random() * 100}%`;

  const duracion = 8 + Math.random() * 10;
  const retraso = Math.random() * 12;
  corazon.style.animationDuration = `${duracion}s`;
  corazon.style.animationDelay = `${retraso}s`;

  const escala = 0.7 + Math.random() * 0.8;
  corazon.style.fontSize = `${1.2 * escala}rem`;

  contenedorCorazones.appendChild(corazon);
}