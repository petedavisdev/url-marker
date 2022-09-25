export function createMarkerElement(name, color, style) {
	const markerElement = document.createElement('div');

	markerElement.id = 'urlMarker';
	markerElement.innerHTML = '⋮⋮ ' + (name || 'no name');
	markerElement.style = style || '';
	markerElement.style.color = color || 'gold';

	document.body.appendChild(markerElement);

	return markerElement;
}

