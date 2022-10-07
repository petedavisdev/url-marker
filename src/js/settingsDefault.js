export const settingsDefault = {
	style: 'font-size: 18px; font-family: monospace;',
	markers: [
		{
			name: 'local',
			include: ['localhost:', '://local.'],
			color: 'lime',
		},
		{
			name: 'test',
			include: '://test.',
			color: 'pink',
		},
		{
			name: 'staging',
			include: ['://staging.', '://stage.', '://stg.'],
			color: '#00ccff',
		},
	],
};

