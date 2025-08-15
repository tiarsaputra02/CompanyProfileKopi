document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".about-container,.about-container2");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // Biar animasi cuma sekali
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});

