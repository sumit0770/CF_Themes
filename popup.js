const select = document.getElementById('themeSelect');


for (const [id, theme] of Object.entries(CF_THEMES)) {
  const opt = document.createElement('option');
  opt.value = id;
  opt.textContent = theme.name;
  select.appendChild(opt);
}

document.getElementById('saveBtn').addEventListener('click', () => {
  chrome.storage.sync.set({ themeName: select.value }, () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) chrome.tabs.reload(tabs[0].id);
    });
  });
});

chrome.storage.sync.get(['themeName'], (data) => {
  if (data.themeName) select.value = data.themeName;
});