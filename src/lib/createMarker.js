import { createMarkerElement } from './createMarkerElement';
import { getMarkerSettings } from './getMarkerSettings';
import { makeElementDraggable } from './makeElementDraggable';
import { prependDocumentTitle } from './prependDocumentTitle';

export function createMarker(settings) {
	const { name, color } = getMarkerSettings(settings);

	if (name) {
		prependDocumentTitle(name);
		const markerElement = createMarkerElement(name, color, settings.style);
		makeElementDraggable(markerElement);
	}
}

