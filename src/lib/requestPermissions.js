export function requestPermissions() {
	const permissionsButton = document.getElementById('permissionsButton');

	permissionsButton.addEventListener('click', () =>
		chrome.permissions.request({ origins: ['<all_urls>'] })
	);
}
