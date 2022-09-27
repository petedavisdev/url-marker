import { editorCopy } from './editorCopy';
import { editorCreate } from './editorCreate';
import { editorSave } from './editorSave';

export function editor() {
	const editor = editorCreate();
	editorSave(editor);
	editorCopy(editor);
}
