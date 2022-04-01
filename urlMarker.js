const defaultSettings = JSON.stringify([
	{
		name: 'local',
		urls: ['localhost:', '://local.'],
		style: 'color: yellow;',
	},
]);

let settings = defaultSettings;

chrome.storage.sync.get(['settings'], function (result) {
	settings = result.settings || defaultSettings;
});

const marker = JSON.parse(settings).find((item) =>
	item.urls.some((url) => window.location.href.includes(url))
);

if (marker) {
	const el = document.createElement('span');

	el.id = 'url-marker';
	el.innerHTML = marker.name;
	el.style = marker.style;

	document.body.appendChild(el);
	document.title = marker.name + ' — ' + document.title;
}
