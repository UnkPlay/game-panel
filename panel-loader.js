// panel-loader.js
(async function() {
  const baseURL = 'https://cdn.jsdelivr.net/gh/UnkPlay/game-panel@main/';

  // 1. Load CSS
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = baseURL + 'panel.css';
  document.head.appendChild(link);

  // 2. Load HTML
  try {
    const html = await fetch(baseURL + 'panel.html').then(r => r.text());
    const container = document.createElement('div');
    container.id = 'panel-container';
    container.innerHTML = html;
    document.body.appendChild(container);
  } catch(e) {
    console.error('Failed to load panel HTML:', e);
  }

  // 3. Load JS
  const script = document.createElement('script');
  script.src = baseURL + 'panel.js';
  document.body.appendChild(script);
})();
