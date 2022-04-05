import { useSettings } from './helpers/useSettings';

const permissionsForm = document.getElementById('permissionsForm');
const permissionsButton = document.getElementById('permissionsButton');
const settingsForm = document.getElementById('settingsForm');
const settingsButton = document.getElementById('settingsButton');

function checkPermissions(action) {
	chrome.permissions.contains(
		{
			origins: ['<all_urls>'],
		},
		(result) => action(result)
	);
}

function toggleSettings(hasPermission) {
	if (hasPermission) {
		permissionsForm.classList.add('hidden');
		settingsForm.classList.remove('hidden');
		return;
	}

	settingsForm.classList.add('hidden');
	permissionsForm.classList.remove('hidden');
}

checkPermissions(toggleSettings);

chrome.permissions.onAdded.addListener(() => checkPermissions(toggleSettings));

permissionsButton.addEventListener('click', () =>
	chrome.permissions.request({ origins: ['<all_urls>'] })
);

const editorContainer = document.getElementById('JSONeditor');
const settingsEditor = new window.JSONEditor(editorContainer, { mode: 'code' });

useSettings((settings) => settingsEditor.set(settings));

settingsButton.addEventListener('click', () => {
	try {
		const settingsValue = settingsEditor.get();

		alert('😁 OK! Reload pages to see your changes');
		chrome.storage.sync.set({
			settings: JSON.stringify(settingsValue),
		});
	} catch {
		alert('🤬 Not valid JSON! Check your code...');
	}
});
