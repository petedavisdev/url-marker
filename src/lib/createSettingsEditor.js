import { useSettings } from './useSettings';

export function createSettingsEditor() {
	const editorContainer = document.getElementById('JSONeditor');
	const settingsEditor = new window.JSONEditor(editorContainer, {
		mode: 'code',
	});

	useSettings((settings) => settingsEditor.set(settings));

	return settingsEditor;
}

