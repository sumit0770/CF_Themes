chrome.storage.sync.get(['themeName'], (data) => {
  const active = CF_THEMES[data.themeName] || CF_THEMES.dracula;

  const style = document.createElement("style");
  style.innerHTML = `
    :root {
      --bg: ${active.bg};
      --alt: ${active.alt};
      --text: ${active.text};
      --accent: ${active.accent};
      --link: ${active.link};
    }

    body { background-color: var(--bg) !important; color: var(--text) !important; }
    
    .roundbox, .datatable, .rtable, #pageContent {
      background-color: var(--bg) !important;
      border: 1px solid var(--alt) !important;
    }

    .ttypography, .title, .problem-statement { color: var(--text) !important; }
    
    a:link { color: var(--link) !important; }

    .backLava, .pagination .page-index.active {
      background: var(--accent) !important;
      color: var(--bg) !important;
    }

    div.ttypography pre, div.ttypography code {
      background: rgba(0,0,0,0.3) !important;
      color: var(--accent) !important;
      border: 1px solid var(--alt) !important;
    }

    input, select { background: var(--alt) !important; color: var(--text) !important; border: 1px solid var(--accent) !important; }
    
    #body, .content-with-sidebar, .roundbox-lt, .roundbox-lb, .roundbox-rt, .roundbox-rb { background: transparent !important; }
  `;
  document.head.appendChild(style);
});