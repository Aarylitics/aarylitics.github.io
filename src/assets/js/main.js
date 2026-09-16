// ----- Grid filter + sort (runs on /  and /personal/, wherever .grid exists) -----
(function () {
  const grid = document.getElementById('cardGrid');
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll('.card'));
  const tagSelect = document.getElementById('tagSelect');
  const sortSelect = document.getElementById('sortSelect');
  const featOnly = document.getElementById('featOnly');
  const tagChip = document.getElementById('tagChip');
  const tagChipLabel = document.getElementById('tagChipLabel');

  // Populate the tag dropdown from whatever tags actually exist on this page's cards
  const allTags = new Set();
  cards.forEach(c => (c.dataset.tags || '').split('|').filter(Boolean).forEach(t => allTags.add(t)));
  [...allTags].sort().forEach(t => {
    const opt = document.createElement('option');
    opt.value = t;
    opt.textContent = t;
    tagSelect.appendChild(opt);
  });

  // A skill link on the About page can send us here as /?tag=Python
  const params = new URLSearchParams(window.location.search);
  const urlTag = params.get('tag');
  if (urlTag && allTags.has(urlTag)) {
    tagSelect.value = urlTag;
  }

  function applySort() {
    const mode = sortSelect.value;
    const sorted = [...cards];
    if (mode === 'newest') sorted.sort((a, b) => parseInt(b.dataset.year) - parseInt(a.dataset.year));
    if (mode === 'oldest') sorted.sort((a, b) => parseInt(a.dataset.year) - parseInt(b.dataset.year));
    if (mode === 'az') sorted.sort((a, b) => a.dataset.title.localeCompare(b.dataset.title));
    sorted.forEach(c => grid.appendChild(c));
  }

  function applyFilter() {
    const tag = tagSelect.value;
    const onlyFeatured = featOnly.checked;

    if (tag) {
      tagChip.style.display = 'inline-flex';
      tagChipLabel.textContent = tag;
    } else {
      tagChip.style.display = 'none';
    }

    cards.forEach(c => {
      const tags = (c.dataset.tags || '').split('|');
      const matchesTag = !tag || tags.includes(tag);
      const matchesFeatured = !onlyFeatured || c.dataset.featured === 'true';
      c.classList.toggle('hidden', !matchesTag || !matchesFeatured);
    });
  }

  function refresh() {
    applySort();
    applyFilter();
  }

  tagSelect.addEventListener('change', applyFilter);
  sortSelect.addEventListener('change', refresh);
  featOnly.addEventListener('change', applyFilter);
  document.getElementById('clearTagChip')?.addEventListener('click', () => {
    tagSelect.value = '';
    applyFilter();
  });

  refresh();
})();

// ----- Any file preview expand/collapse (About page resume, or appendix files on posts) -----
function toggleFilePreview(id) {
  const box = document.getElementById('preview-' + id);
  const btn = document.getElementById('expand-' + id);
  const expanded = box.classList.toggle('expanded');
  btn.textContent = expanded ? 'Show less ↑' : 'Show full preview ↓';
}

// ----- Skill meter fill-in animation (About page) -----
(function () {
  const fills = document.querySelectorAll('.meter-fill[data-pct]');
  if (!fills.length) return;
  requestAnimationFrame(() => {
    setTimeout(() => {
      fills.forEach(el => { el.style.width = el.dataset.pct + '%'; });
    }, 150);
  });
})();
