export function saveSettings(settingsEditor) {
	function save() {
		console.log('saving');
		try {
			const settingsValue = settingsEditor.get();

			alert('😁 OK! Reload pages to see your changes');
			chrome.storage.sync.set({
				settings: JSON.stringify(settingsValue),
			});
		} catch {
			alert('🤬 Not valid JSON! Check your code...');
		}
	}

	const saveButton = document.getElementById('saveButton');
	saveButton.addEventListener('click', () => save());

	document.addEventListener(
		'keydown',
		(e) => {
			if (
				(window.navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey) &&
				e.key === 's'
			) {
				e.preventDefault();
				save();
			}
		},
		false
	);
}

