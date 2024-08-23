// popup.js
document.getElementById('exportBtn').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      files: ['turndown.min.js', 'content.js']
    });
  });
});
