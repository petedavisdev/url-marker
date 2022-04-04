export function checkPermissions(action) {
	chrome.permissions.contains(
		{
			origins: ['<all_urls>'],
		},
		(result) => action(result)
	);
}
