export function markerSettingsGet(settings) {
	const url = window.location.href;

	const markerSettings = settings.markers.find((item) => {
		let urlIsIncluded = false;
		const settingIsArray = Array.isArray(item?.include);

		urlIsIncluded = settingIsArray
			? item.include.some((string) => url.includes(string))
			: url.includes(item.include);

		return urlIsIncluded;
	});

	return markerSettings;
}

