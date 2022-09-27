export function permissionsToggle(hasPermission) {
	const permissionsForm = document.getElementById('permissionsForm');
	const editorForm = document.getElementById('editorForm');

	if (hasPermission) {
		permissionsForm.classList.add('hidden');
		editorForm.classList.remove('hidden');
		return;
	}

	editorForm.classList.add('hidden');
	permissionsForm.classList.remove('hidden');
}

