// Default settings for first-time user
const defaultSettings = JSON.stringify([
	{
		name: 'local',
		urls: ['localhost:', '://local.'],
		style: 'color: yellow;',
	},
]);

// Check storage for saved user settings
chrome.storage.sync.get(['settings'], function (result) {
	// Create marker using either saved or default settings
	createMarker(result.settings || defaultSettings);
});

function createMarker(settings) {
	// Find marker settings for current url
	const marker = JSON.parse(settings).find((item) =>
		// True if some url is included in the current url
		item.urls.some((url) => window.location.href.includes(url))
	);

	if (!marker) return;

	// Create marker element
	const el = document.createElement('span');

	// Add element properties
	el.id = 'urlMarker';
	el.innerHTML = marker.name;
	el.style = marker.style;

	// Add marker to page
	document.body.appendChild(el);

	// Add marker name to title displayed in browser tab
	document.title = marker.name + ' — ' + document.title;
}
