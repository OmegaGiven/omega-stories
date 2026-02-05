(() => {
  const section = document.body?.dataset?.section;
  if (section !== 'stories') return;

  const storageKey = `scroll:${location.pathname}`;

  const restore = () => {
    if (location.hash) return;
    const saved = Number.parseInt(localStorage.getItem(storageKey) || '', 10);
    if (!Number.isFinite(saved) || saved < 0) return;
    requestAnimationFrame(() => {
      window.scrollTo(0, saved);
    });
  };

  const save = () => {
    localStorage.setItem(storageKey, String(window.scrollY || 0));
  };

  window.addEventListener('load', restore);
  window.addEventListener('beforeunload', save);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') save();
  });
})();
