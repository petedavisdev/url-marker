export function makeElementDraggable(el) {
	// Drag states
	let dragging;
	let mouseX;
	let elX;

	// Set initial drag states on mousedown
	el.addEventListener('mousedown', (e) => {
		const elTransform = getComputedStyle(el).getPropertyValue('transform');
		const elTransformArray = elTransform.replace(/[^0-9\-.,]/g, '').split(',');

		elX = +elTransformArray[12] || +elTransformArray[4] || 0;
		mouseX = e.screenX;
		dragging = true;
	});

	// Update transform: translateX(); on mousemove
	document.addEventListener('mousemove', (e) => {
		if (dragging) {
			el.style.transform = `translateX(${e.screenX + elX - mouseX}px)`;
		}
	});

	// Cancel dragging on mouseup
	document.addEventListener('mouseup', () => {
		dragging = false;
	});
}

