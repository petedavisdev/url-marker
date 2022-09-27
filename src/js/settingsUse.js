import { settingsDefault } from './settingsDefault';

export function settingsUse(action) {
	chrome.storage.sync.get(['settings'], function (result) {
		try {
			const settings = JSON.parse(result.settings);
			action(settings);
		} catch {
			action(settingsDefault);
		}
	});
}

