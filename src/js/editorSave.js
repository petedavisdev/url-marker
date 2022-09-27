import { editorValidate } from './editorValidate';

export function editorSave(editor) {
	function save() {
		console.log('saving');
		try {
			const settingsValue = editor.get();
			const settinsString = JSON.stringify(settingsValue);

			if (!editorValidate(settingsValue)) {
				throw '🤬 Check you have "markers" with "name" and "include" values';
			}

			chrome.storage.sync.set({
				settings: settinsString,
			});

			alert('😁 OK! Reload pages to see your changes');
		} catch (error) {
			alert(error);
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

