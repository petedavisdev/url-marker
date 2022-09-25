import { createMarkerElement } from './lib/createMarkerElement';
import { getMarkerSettings } from './lib/getMarkerSettings';
import { makeElementDraggable } from './lib/makeElementDraggable';
import { prependDocumentTitle } from './lib/prependDocumentTitle';
import { useSettings } from './lib/useSettings';

function createMarker(settings) {
	const { name, color } = getMarkerSettings(settings);

	if (name) {
		prependDocumentTitle(name);
		const markerElement = createMarkerElement(name, color, settings.style);
		makeElementDraggable(markerElement);
	}
}

useSettings(createMarker);

