chrome.runtime.onInstalled.addListener((r) => {
	if (r.reason == 'install') {
		chrome.tabs.create({ url: 'settings.html' });
	}
});

chrome.action.onClicked.addListener(function () {
	chrome.tabs.create({ url: 'settings.html' });
});
