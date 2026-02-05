(() => {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const mediaQuery = window.matchMedia('(max-width: 720px)');
  let lastY = window.scrollY;
  let hidden = false;

  const setHidden = (value) => {
    if (hidden === value) return;
    hidden = value;
    document.body.classList.toggle('header-hidden', hidden);
  };

  const onScroll = () => {
    if (!mediaQuery.matches) {
      setHidden(false);
      lastY = window.scrollY;
      return;
    }

    const currentY = window.scrollY;
    const delta = currentY - lastY;

    if (currentY < 40) {
      setHidden(false);
    } else if (delta > 8) {
      setHidden(true);
    } else if (delta < -8) {
      setHidden(false);
    }

    lastY = currentY;
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('load', onScroll);
  window.addEventListener('resize', onScroll);

  let lastTap = 0;
  const onTouchEnd = (event) => {
    if (!mediaQuery.matches) return;
    if (event.touches && event.touches.length > 0) return;
    const now = Date.now();
    if (now - lastTap <= 350) {
      setHidden(false);
    }
    lastTap = now;
  };

  document.addEventListener('touchend', onTouchEnd, { passive: true });
  document.addEventListener('dblclick', () => {
    if (!mediaQuery.matches) return;
    setHidden(false);
  });
})();
