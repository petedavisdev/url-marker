import { settingsUse } from './settingsUse';

export function editorCreate() {
	const editorContainer = document.getElementById('JSONeditor');
	const editor = new window.JSONEditor(editorContainer, {
		mode: 'code',
	});

	settingsUse((settings) => editor.set(settings));

	return editor;
}

