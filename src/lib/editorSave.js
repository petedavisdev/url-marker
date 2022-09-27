export function editorSave(editor) {
	function save() {
		console.log('saving');
		try {
			const settingsValue = editor.get();
			chrome.storage.sync.set({
				settings: JSON.stringify(settingsValue),
			});

			alert('😁 OK! Reload pages to see your changes');
		} catch {
			alert('🤬 Not valid JSON! Check your code...');
		}
	}

	const saveButton = document.getElementById('saveButton');
	saveButton.addEventListener('click', () => save());

	document.addEventListener('keydown', (e) => {
		if (
			(navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey) &&
			e.key === 's'
		) {
			e.preventDefault();
			save();
		}
	});
}

