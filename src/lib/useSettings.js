export function useSettings(action) {
	chrome.storage.sync.get(['settings'], function (result) {
		try {
			const settings = JSON.parse(result.settings);
			action(settings);
		} catch {
			action(defaultSettings);
		}
	});
}
