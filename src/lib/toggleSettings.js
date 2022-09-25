export function toggleSettings(hasPermission) {
	const permissionsForm = document.getElementById('permissionsForm');
	const settingsForm = document.getElementById('settingsForm');

	if (hasPermission) {
		permissionsForm.classList.add('hidden');
		settingsForm.classList.remove('hidden');
		return;
	}

	settingsForm.classList.add('hidden');
	permissionsForm.classList.remove('hidden');
}

