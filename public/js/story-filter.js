(() => {
  const searchInput = document.querySelector('#story-search');
  const authorSelect = document.querySelector('#author-filter');
  const grid = document.querySelector('#story-grid');
  const emptyState = document.querySelector('#story-empty');

  if (!searchInput || !authorSelect || !grid) return;

  const cards = Array.from(grid.querySelectorAll('[data-story]'));

  const normalize = (value) => value.trim().toLowerCase();

  const applyFilters = () => {
    const query = normalize(searchInput.value);
    const author = normalize(authorSelect.value);
    let visibleCount = 0;

    cards.forEach((card) => {
      const title = normalize(card.dataset.title || '');
      const summary = normalize(card.dataset.summary || '');
      const authors = normalize(card.dataset.authors || '');

      const matchesQuery = !query || title.includes(query) || summary.includes(query);
      const matchesAuthor =
        author === 'all' || authors.split('|').includes(author);

      const visible = matchesQuery && matchesAuthor;
      card.style.display = visible ? '' : 'none';
      if (visible) visibleCount += 1;
    });

    if (emptyState) {
      emptyState.hidden = visibleCount !== 0;
    }
  };

  const params = new URLSearchParams(window.location.search);
  const authorParam = normalize(params.get('author') || '');
  const searchParam = params.get('q') || '';

  if (searchParam) {
    searchInput.value = searchParam;
  }

  if (authorParam) {
    const hasAuthor = Array.from(authorSelect.options).some(
      (option) => normalize(option.value) === authorParam
    );
    authorSelect.value = hasAuthor ? authorParam : 'all';
  }

  applyFilters();

  searchInput.addEventListener('input', applyFilters);
  authorSelect.addEventListener('change', applyFilters);
})();
