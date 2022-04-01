const permissionsForm = document.getElementById('permissionsForm');
const permissionsButton = document.getElementById('permissionsButton');
const settingsForm = document.getElementById('settingsForm');
const settingsInput = document.getElementById('settings');

function checkPermissions() {
	chrome.permissions.contains(
		{
			origins: ['<all_urls>'],
		},
		(result) => {
			if (result) {
				permissionsForm.hidden = true;
				settingsForm.hidden = false;
				return;
			}

			permissionsForm.hidden = false;
			settingsForm.hidden = true;
		}
	);
}

checkPermissions();
chrome.permissions.onAdded.addListener(() => checkPermissions());

permissionsButton.addEventListener('click', () =>
	chrome.permissions.request({ origins: ['<all_urls>'] })
);

// Default settings for first-time user
const defaultSettings = JSON.stringify([
	{
		name: 'local',
		urls: ['localhost:', '://local.'],
		style: 'color: yellow;',
	},
]);

// Check storage for saved user settings
chrome.storage.sync.get(['settings'], function (result) {
	// Create marker using either saved or default settings
	settingsInput.value = result.settings || defaultSettings;
});
