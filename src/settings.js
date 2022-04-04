import { checkPermissions } from './helpers/checkPermissions';
import { useSettings } from './helpers/useSettings';

const permissionsForm = document.getElementById('permissionsForm');
const permissionsButton = document.getElementById('permissionsButton');
const settingsForm = document.getElementById('settingsForm');
const settingsInput = document.getElementById('settings');
const settingsButton = document.getElementById('settingsButton');

function toggleSettings(hasPermission) {
	if (hasPermission) {
		permissionsForm.hidden = true;
		settingsForm.hidden = false;
		return;
	}

	permissionsForm.hidden = false;
	settingsForm.hidden = true;
}

checkPermissions(toggleSettings);

chrome.permissions.onAdded.addListener(() => checkPermissions(toggleSettings));

permissionsButton.addEventListener('click', () =>
	chrome.permissions.request({ origins: ['<all_urls>'] })
);

useSettings((settings) => (settingsInput.value = settings));

settingsButton.addEventListener('click', () => {
	try {
		JSON.parse(settingsInput.value);
		alert('😁 OK! Reload pages to see your changes');
		chrome.storage.sync.set({ settings: settingsInput.value });
	} catch {
		alert('🤬 Not valid JSON! Check your code...');
	}
});
