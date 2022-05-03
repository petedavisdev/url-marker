import { useSettings } from './helpers/useSettings';

useSettings(createMarker);

function createMarker(settings) {
	// Find marker settings for current url
	const marker = settings?.markers.find((item) => {
		const url = window.location.href;
		// True if some url is included in the current url
		if (!Array.isArray(item?.include)) return url.includes(item.include);

		return item?.include.some((string) => url.includes(string));
	});

	if (!marker) return;

	// Create marker element
	const el = document.createElement('span');

	// Add element properties
	el.id = 'urlMarker';
	el.innerHTML = '⋮⋮ ' + (marker.name || 'no name');
	el.style = settings.style || '';
	el.style.color = marker.color || 'gold';

	// Add marker to page
	document.body.appendChild(el);

	// Add marker name to title displayed in browser tab
	document.title = marker.name + ' — ' + document.title;
}
