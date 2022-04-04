// Default settings for first-time user
const defaultSettings = JSON.stringify([
	{
		name: 'local',
		urls: ['localhost:', '://local.'],
		style: 'color: yellow;',
	},
]);

// Check storage for saved user settings
export function useSettings(action) {
	chrome.storage.sync.get(['settings'], function (result) {
		try {
			JSON.parse(result.settings);
			action(result.settings);
		} catch {
			action(defaultSettings);
		}
	});
}
