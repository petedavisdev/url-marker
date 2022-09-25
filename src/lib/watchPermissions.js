export function watchPermissions(toggleSettings) {
	chrome.permissions.onAdded.addListener(() =>
		checkPermissions(toggleSettings)
	);
}

