// === CONFIG ===
// Reemplazá estos datos por los reales
const WHATSAPP_NUMBER = "523921595505"; // Ej: 54911... (Argentina) o 1... (USA). Sin + ni espacios.
const DEFAULT_MESSAGE = "Hola!. Quiero cotizar alquiler de maquinaria con Remimacc.";

// Helpers
const encode = (s) => encodeURIComponent(s.trim());
const waLink = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encode(text)}`;

// Elements to set WA links
const waIds = [
  "whatsappHero",
  "whatsappServices",
  "whatsappAside",
  "whatsappFloat",
  "whatsappText"
];

function setAllWhatsAppLinks(message = DEFAULT_MESSAGE) {
  const link = waLink(message);
  waIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = link;
  });
}

setAllWhatsAppLinks();

// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav
const navToggle = document.getElementById("navToggle");
const navList = document.getElementById("navList");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    const open = navList.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // close menu after click
  navList.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      navList.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Quote form -> WhatsApp
const quoteForm = document.getElementById("quoteForm");
if (quoteForm) {
  quoteForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(quoteForm);
    const name = data.get("name");
    const equipment = data.get("equipment");
    const duration = data.get("duration");
    const location = data.get("location");

    const msg =
`Hola! Soy ${name}.
Quiero cotizar con Remimacc.

• Equipo/Servicio: ${equipment}
• Duración: ${duration}
• Zona/Obra: ${location}

¿Me confirmás disponibilidad y precio?`;

    window.open(waLink(msg), "_blank", "noopener");
  });
}

// Contact form -> WhatsApp
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(contactForm);
    const name = data.get("name");
    const message = data.get("message");

    const msg =
`Hola! Soy ${name}.
${message}

(Remimacc)`;

    window.open(waLink(msg), "_blank", "noopener");
  });
}