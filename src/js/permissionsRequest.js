export function permissionsRequest() {
	const permissionsButton = document.getElementById('permissionsButton');

	permissionsButton.addEventListener('click', () =>
		chrome.permissions.request({ origins: ['<all_urls>'] })
	);
}

