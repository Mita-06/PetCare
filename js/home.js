/**
 * PetCare - Home Page JavaScript
 */

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    },
    { threshold: 0.1 },
  );

  document
    .querySelectorAll(".review-item-card, .gallery-card, .the-dich-vu-card")
    .forEach((el) => {
      observer.observe(el);
    });
});
