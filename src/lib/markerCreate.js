import { markerDraggable } from './markerDraggable';
import { markerElementCreate } from './markerElementCreate';
import { markerSettingsGet } from './markerSettingsGet';
import { markerTitleAdd } from './markerTitleAdd';

export function markerCreate(settings) {
	const { name, color } = markerSettingsGet(settings);

	if (name) {
		markerTitleAdd(name);
		const markerElement = markerElementCreate(name, color, settings.style);
		markerDraggable(markerElement);
	}
}

