export function permissionsCheck(action) {
	chrome.permissions.contains(
		{
			origins: ['<all_urls>'],
		},
		(result) => action(result)
	);
}

