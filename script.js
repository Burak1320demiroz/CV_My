document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('darkModeToggle');
  const body = document.body;
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  // Set initial mode
  const setMode = (mode) => {
      if (mode === 'light') {
          body.classList.add('light-mode');
          body.classList.remove('dark-mode');
      } else {
          body.classList.add('dark-mode');
          body.classList.remove('light-mode');
      }
      localStorage.setItem('themeMode', mode);
  };

  // Check local storage or preferred color scheme
  const currentMode = localStorage.getItem('themeMode') || 
                     (prefersDarkScheme.matches ? 'dark' : 'light');
  setMode(currentMode);

  // Toggle between dark and light mode
  toggle.addEventListener('click', () => {
      const newMode = body.classList.contains('light-mode') ? 'dark' : 'light';
      setMode(newMode);
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
          navbar.style.padding = '10px 0';
          navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
      } else {
          navbar.style.padding = '15px 0';
          navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
      }
  });

  // Scroll animations
  const animateElements = document.querySelectorAll('[data-animate]');
  
  const animateOnScroll = () => {
      animateElements.forEach(element => {
          const elementPosition = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          
          if (elementPosition < windowHeight - 100) {
              element.classList.add('animate');
          }
      });
  };

  // Initial check
  animateOnScroll();
  
  // Check on scroll
  window.addEventListener('scroll', animateOnScroll);

  // Add pulse animation to social buttons every 5 seconds
  setInterval(() => {
      const socialButtons = document.querySelectorAll('.btn-social');
      socialButtons.forEach(button => {
          button.classList.remove('animate__pulse');
          void button.offsetWidth; // Trigger reflow
          button.classList.add('animate__pulse');
      });
  }, 5000);
});