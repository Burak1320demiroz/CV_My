document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('darkModeToggle');
  const body = document.body;

  const currentMode = localStorage.getItem('themeMode') || 'dark';
  if (currentMode === 'light') {
    body.classList.add('light-mode');
  }

  toggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const newMode = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('themeMode', newMode);
  });
});
