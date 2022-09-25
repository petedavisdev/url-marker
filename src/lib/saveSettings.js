export function saveSettings(settingsEditor) {
	const saveButton = document.getElementById('saveButton');

	saveButton.addEventListener('click', () => {
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
}

