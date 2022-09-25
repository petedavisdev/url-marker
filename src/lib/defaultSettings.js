export const defaultSettings = {
	style: 'font-size: 18px; font-family: monospace;',
	markers: [
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

