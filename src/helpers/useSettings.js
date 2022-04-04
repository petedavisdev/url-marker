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
		// Create marker using either saved or default settings
		action(result.settings || defaultSettings);
	});
}
