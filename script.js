// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
};

scrollTopBtn.addEventListener('click', function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('section');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
          entry.target.classList.remove('hidden');
        }, 500); // Adjust the delay time in milliseconds as needed
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});
