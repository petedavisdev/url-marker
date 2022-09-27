import { permissionsCheck } from './permissionsCheck';

export function permissionsWatch(permissionsToggle) {
	chrome.permissions.onAdded.addListener(() =>
		permissionsCheck(permissionsToggle)
	);
}

