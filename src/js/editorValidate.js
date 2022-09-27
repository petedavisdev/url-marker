export function editorValidate(settingsValue) {
	const markers = settingsValue?.markers;
	const hasMarkers = markers && Array.isArray(markers) && markers.length;
	const validMarkers =
		hasMarkers &&
		markers.filter((marker) => {
			return marker.name?.length && marker.include?.length;
		});
	const hasMarkerDetails = hasMarkers && markers.length === validMarkers.length;

	return hasMarkers && hasMarkerDetails;
}

