import { animate, scroll } from 'motion';

// Scroll-linked entrances: each [data-scroll] part plays in as its item comes up the screen, and rewinds on the way back.
// The item is the closest [data-scroll-item], or the part itself. "slide" eases in from the left out of blur;
// "rise" lifts and grows into place a beat later. Reduced motion keeps everything still.
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
	for (const part of document.querySelectorAll<HTMLElement>('[data-scroll]')) {
		const target = part.closest<HTMLElement>('[data-scroll-item]') ?? part;
		if (part.dataset.scroll === 'rise') {
			scroll(animate(part, { opacity: [0, 1], y: [72, 0], scale: [0.94, 1] }), { target, offset: ['start 0.95', 'start 0.4'] });
		} else {
			scroll(animate(part, { opacity: [0, 1], x: [-48, 0], filter: ['blur(10px)', 'blur(0px)'] }), { target, offset: ['start end', 'start 0.5'] });
		}
	}
}
