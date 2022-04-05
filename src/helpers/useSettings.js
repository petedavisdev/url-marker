// Default settings for first-time user
const defaultSettings = {
	style: 'font-size: 18px;',
	urls: [
		{
			name: 'local',
			include: ['localhost:', '://local.'],
			color: 'gold',
		},
		{
			name: 'test',
			include: '://test.',
			color: 'lime',
		},
		{
			name: 'dev',
			include: '://dev.',
			color: 'cyan',
		},
		{
			name: 'staging',
			include: ['://staging.', '://stage.'],
			color: 'yellow',
		},
		{
			name: 'qa',
			include: '://qa.',
			color: 'plum',
		},
		{
			name: 'uat',
			include: '://uat.',
			color: 'orange',
		},
		{
			name: 'preview',
			include: ['://preview.', '://deploy-preview'],
			color: 'pink',
		},
	],
};

// Check storage for saved user settings
export function useSettings(action) {
	chrome.storage.sync.get(['settings'], function (result) {
		try {
			const settings = JSON.parse(result.settings);
			action(settings);
		} catch {
			action(defaultSettings);
		}
	});
}
