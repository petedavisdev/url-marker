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

	// Add marker name to title displayed in browser tab
	document.title = marker.name + ' — ' + document.title;

	// Create the marker element
	const el = document.createElement('span');

	// Add element properties
	el.id = 'urlMarker';
	el.innerHTML = '⋮⋮ ' + (marker.name || 'no name');
	el.style = settings.style || '';
	el.style.color = marker.color || 'gold';

	// Add the marker to the page
	document.body.appendChild(el);

	// Drag states
	let dragging;
	let mouseX;
	let elX;

	// Set initial drag states on mousedown
	el.addEventListener('mousedown', (e) => {
		const elTransform = getComputedStyle(el).getPropertyValue('transform');
		const elTransformArray = elTransform.replace(/[^0-9\-.,]/g, '').split(',');

		elX = +elTransformArray[12] || +elTransformArray[4] || 0;
		mouseX = e.screenX;
		dragging = true;
	});

	// Update transform: translateX(); on mousemove
	document.addEventListener('mousemove', (e) => {
		if (dragging) {
			el.style.transform = `translateX(${e.screenX + elX - mouseX}px)`;
		}
	});

	// Cancel dragging on mouseup
	document.addEventListener('mouseup', () => {
		dragging = false;
	});
}
