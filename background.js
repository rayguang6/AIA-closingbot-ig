// Simple background script for Instagram Message Assistant

chrome.action.onClicked.addListener(async (tab) => {
  // Only run on Instagram
  if (tab.url && tab.url.includes('instagram.com')) {
    try {
      await chrome.tabs.sendMessage(tab.id, { action: 'showPanel' });
    } catch (err) {
      console.warn('Could not send showPanel message:', err);
    }
  }
}); 