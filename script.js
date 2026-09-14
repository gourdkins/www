document.documentElement.classList.add('js');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section-heading, .schedule-card, .map-card, .archive-list, .about-mark, .about-copy')
  .forEach((element) => {
    element.classList.add('reveal');
    observer.observe(element);
  });
