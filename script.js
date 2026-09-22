// =========================================================
// SAMA YOGA
// Funciones de la web
// =========================================================


// ---------------------------------------------------------
// Año actual en el pie de página
// ---------------------------------------------------------

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// ---------------------------------------------------------
// Menú móvil
// ---------------------------------------------------------

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {

  menuToggle.addEventListener("click", () => {

    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

  });

  // Cerrar el menú al pulsar una opción
  mainNav.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });
}


// ---------------------------------------------------------
// Animaciones al hacer scroll
// ---------------------------------------------------------

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });

} else {

  // Compatibilidad con navegadores antiguos
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });

}


// ---------------------------------------------------------
// WhatsApp
// ---------------------------------------------------------
//
// IMPORTANTE:
// Aquí pondremos tu número de WhatsApp cuando quieras.
// No lo he inventado ni puesto todavía.
//
// Formato:
// España: 346XXXXXXXX
//
// Ejemplo:
// const WHATSAPP_NUMBER = "34612345678";
// ---------------------------------------------------------

const WHATSAPP_NUMBER = "";

const whatsappMessage =
  "Hola, me gustaría recibir información sobre las clases de Sama Yoga.";

function setupWhatsApp() {

  if (!WHATSAPP_NUMBER) {
    return;
  }

  const whatsappUrl =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(whatsappMessage);

  const heroButton =
    document.getElementById("whatsappHero");

  const contactButton =
    document.getElementById("whatsappContact");

  if (heroButton) {
    heroButton.href = whatsappUrl;
    heroButton.target = "_blank";
    heroButton.rel = "noopener noreferrer";
  }

  if (contactButton) {
    contactButton.href = whatsappUrl;
    contactButton.target = "_blank";
    contactButton.rel = "noopener noreferrer";
  }
}

setupWhatsApp();
