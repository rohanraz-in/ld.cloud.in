document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();

  const brand = document.querySelector(".brand");
  if (brand) {
    brand.setAttribute("aria-label", `GitHub App AI home ${year}`);
  }

  const links = document.querySelectorAll(".nav a, .button");
  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transition = "transform 0.2s ease, box-shadow 0.2s ease";
    });
  });
});
