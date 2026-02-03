// Basic Theme & Print Logic
(function () {
  const toggle = document.getElementById("themeToggle");
  const printBtn = document.getElementById("printBtn");

  function applyTheme(isDark) {
    if (isDark) {
      document.body.classList.add('dark');
      if (toggle) toggle.textContent = '☀️';
    } else {
      document.body.classList.remove('dark');
      if (toggle) toggle.textContent = '🌙';
    }
    localStorage.setItem('imughal_theme', isDark ? 'dark' : 'light');
  }

  // Load initial theme immediately to prevent flash
  const saved = localStorage.getItem('imughal_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved === 'dark' || (!saved && prefersDark));

  // Wait for DOM to attach listeners
  window.addEventListener('DOMContentLoaded', () => {
    const tBtn = document.getElementById("themeToggle");
    const pBtn = document.getElementById("printBtn");
    const dBtn = document.getElementById("downBtn");

    if (tBtn) {
      tBtn.onclick = function () {
        applyTheme(!document.body.classList.contains('dark'));
      };
    }

    if (pBtn) {
      pBtn.onclick = function () {
        window.print();
      };
    }
    if (dBtn) {
      dBtn.onclick = function () {
        window.print();
      };
    }
    // Simple scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(r => observer.observe(r));

    // Safety: show everything regardless of animation
    setTimeout(() => {
      reveals.forEach(r => r.classList.add('active'));
    }, 1000);
  });
})();


