document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.getAttribute("data-count");
        const duration = 1500;
        let start = null;

        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          el.innerText = Math.floor(progress * target);
          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            el.innerText = target;
          }
        };
        window.requestAnimationFrame(step);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll(".counter").forEach(c => observer.observe(c));
});
