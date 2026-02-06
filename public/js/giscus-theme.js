(() => {
  const themeMap = {
    light: 'light',
    dark: 'noborder_dark',
    paper: 'gruvbox_light',
  };

  const resolveTheme = () => {
    const current = document.documentElement.dataset.theme || 'dark';
    return themeMap[current] || 'light';
  };

  const setGiscusTheme = (theme) => {
    const iframe = document.querySelector('iframe.giscus-frame');
    if (!iframe) return;
    iframe.contentWindow?.postMessage(
      { giscus: { setConfig: { theme } } },
      'https://giscus.app'
    );
  };

  const apply = () => setGiscusTheme(resolveTheme());

  window.addEventListener('theme-change', (event) => {
    const next = themeMap[event.detail?.theme] || 'light';
    setGiscusTheme(next);
  });

  window.addEventListener('load', apply);
})();
