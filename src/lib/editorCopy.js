export function editorCopy(editor) {
	function copy() {
		try {
			const settingsValue = editor.get();
			navigator.clipboard
				.writeText(JSON.stringify(settingsValue))
				.then(() => alert('📋 Copied to your clipboard, ready to share 🎁'));
		} catch {
			alert('🤬 Not valid JSON! Check your code...');
		}
	}

	const copyButton = document.getElementById('copyButton');
	copyButton.addEventListener('click', () => copy(), false);
}

