/*
 * The Body Works — booking links and small UI behaviour.
 *
 * BOOKING LINKS: every "Book" button on the site carries data-book="<key>".
 * Put the real booking URL for each key below and every matching button
 * picks it up. Leave a value empty ("") and the button falls back to
 * DEFAULT_BOOKING_URL. Only https:// links (and mailto:/tel:) are accepted;
 * anything else is ignored so a typo can't turn a button into a script link.
 */
const DEFAULT_BOOKING_URL = "";

const BOOKING_LINKS = {
  // Massages
  "relaxing-massage": "",
  "deep-tissue-massage": "",
  "pregnancy-massage": "",
  "lymphatic-drainage": "",
  "reiki": "",
  "express-massage": "",
  "hair-play": "",
  // Rituals
  "signature-rituals": "",
  "relax-restore-ritual": "",
  "deep-muscle-recovery": "",
  "mother-to-be-ritual": "",
  "massage-glow-ritual": "",
  "mind-body-balance": "",
  // Enhancements
  "head-massage": "",
  "foot-massage": "",
  "gua-sha-facial": "",
  // Wellness plans
  "plan-massage": "",
  "plan-lymphatic": "",
  "plan-pregnancy": "",
  // Other
  "gift": "",
  "contact": "",
  "instagram": "",
};

function safeUrl(value) {
  if (typeof value !== "string" || value.trim() === "") return null;
  try {
    const url = new URL(value.trim());
    return ["https:", "mailto:", "tel:"].includes(url.protocol) ? url.href : null;
  } catch {
    return null;
  }
}

document.querySelectorAll("[data-book]").forEach((el) => {
  const key = el.getAttribute("data-book");
  const href =
    safeUrl(Object.prototype.hasOwnProperty.call(BOOKING_LINKS, key) ? BOOKING_LINKS[key] : "") ||
    safeUrl(DEFAULT_BOOKING_URL);
  if (href) {
    el.href = href;
    if (href.startsWith("https:")) {
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    }
  }
});

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}
