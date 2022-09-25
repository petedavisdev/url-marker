export function copySettings(settingsEditor) {
	function copy() {
		try {
			const settingsValue = settingsEditor.get();
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
