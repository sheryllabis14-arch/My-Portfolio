// Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // Scroll animation for skill bars
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
          bar.style.animation = 'none';
          bar.offsetHeight; // reflow
          bar.style.animation = '';
        });
      }
    });
  }, { threshold: 0.3 });

  const skillSection = document.getElementById('skills');
  if (skillSection) observer.observe(skillSection);

  // Navbar scroll style
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.style.padding = window.scrollY > 50 ? '0.7rem 3rem' : '1rem 3rem';
  });