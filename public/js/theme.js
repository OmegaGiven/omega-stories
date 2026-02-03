(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  const label = document.querySelector('.theme-toggle__label');
  const themes = ['light', 'dark', 'paper'];

  const setTheme = (next) => {
    root.dataset.theme = next;
    localStorage.setItem('theme', next);
    if (label) {
      label.textContent = next.charAt(0).toUpperCase() + next.slice(1);
    }
  };

  const stored = localStorage.getItem('theme');
  if (stored && themes.includes(stored)) {
    setTheme(stored);
  } else {
    setTheme('dark');
  }

  if (!button) return;

  button.addEventListener('click', () => {
    const current = root.dataset.theme || 'dark';
    const index = themes.indexOf(current);
    const next = themes[(index + 1) % themes.length];
    setTheme(next);
  });
})();
