// ---------- Liquid Glass refraction (Chromium): an edge-displacement map per element ----------
(() => {
	const nav = navigator as Navigator & { userAgentData?: { brands: { brand: string }[] } };
	const isChromium = !!nav.userAgentData?.brands.some((b) => /Chromium/.test(b.brand));
	const reduceT = matchMedia('(prefers-reduced-transparency: reduce)').matches;
	const defs = document.querySelector('#filters defs');
	if (!isChromium || reduceT || !defs) return;
	const NS = 'http://www.w3.org/2000/svg';
	const sdf = (px: number, py: number, w: number, h: number, r: number) => {
		const x = Math.abs(px - w / 2) - (w / 2 - r),
			y = Math.abs(py - h / 2) - (h / 2 - r);
		return Math.hypot(Math.max(x, 0), Math.max(y, 0)) + Math.min(Math.max(x, y), 0) - r;
	};
	const mapFor = (w: number, h: number, r: number, edge: number) => {
		const c = document.createElement('canvas');
		c.width = w;
		c.height = h;
		const ctx = c.getContext('2d');
		if (!ctx) return '';
		const img = ctx.createImageData(w, h),
			d = img.data;
		for (let y = 0; y < h; y++)
			for (let x = 0; x < w; x++) {
				const i = (y * w + x) * 4,
					depth = -sdf(x + 0.5, y + 0.5, w, h, r);
				let R = 128,
					G = 128;
				if (depth > 0 && depth < edge) {
					const nx = sdf(x + 1.5, y + 0.5, w, h, r) - sdf(x - 0.5, y + 0.5, w, h, r);
					const ny = sdf(x + 0.5, y + 1.5, w, h, r) - sdf(x + 0.5, y - 0.5, w, h, r);
					const len = Math.hypot(nx, ny) || 1,
						t = Math.pow(1 - depth / edge, 2);
					R = 128 + (nx / len) * t * 127;
					G = 128 + (ny / len) * t * 127;
				}
				d[i] = R;
				d[i + 1] = G;
				d[i + 2] = 128;
				d[i + 3] = 255;
			}
		ctx.putImageData(img, 0, 0);
		return c.toDataURL();
	};
	let n = 0;
	const apply = (el: HTMLElement) => {
		// layout size, not the bounding rect: scroll entrances scale these surfaces, and the filter must fit the untransformed box
		const w = el.offsetWidth,
			h = el.offsetHeight;
		if (w < 20 || h < 20) return;
		const r = Math.min(parseFloat(getComputedStyle(el).borderTopLeftRadius) || 0, h / 2, w / 2);
		const id = el.dataset.lgId || (el.dataset.lgId = 'lg' + n++);
		let f = document.getElementById(id);
		if (!f) {
			f = document.createElementNS(NS, 'filter') as unknown as HTMLElement;
			f.id = id;
			defs.appendChild(f);
		}
		f.setAttribute('x', '0');
		f.setAttribute('y', '0');
		f.setAttribute('width', String(w));
		f.setAttribute('height', String(h));
		f.setAttribute('filterUnits', 'userSpaceOnUse');
		f.setAttribute('color-interpolation-filters', 'sRGB');
		const edge = Math.min(28, h / 2.2);
		f.innerHTML = `<feGaussianBlur in="SourceGraphic" stdDeviation="3" result="b"/>
			<feImage href="${mapFor(w, h, r, edge)}" x="0" y="0" width="${w}" height="${h}" result="m" preserveAspectRatio="none"/>
			<feDisplacementMap in="b" in2="m" scale="${-Math.min(70, h * 0.9)}" xChannelSelector="R" yChannelSelector="G"/>`;
		el.style.setProperty('--refract', `url(#${id})`);
		el.classList.add('refract');
	};
	const els = [...document.querySelectorAll<HTMLElement>('.lg')];
	// hidden panes (display: none at this width) measure 0 and are skipped until a resize shows them
	const run = () => els.forEach(apply);
	document.fonts ? document.fonts.ready.then(run) : run();
	let t: ReturnType<typeof setTimeout>;
	addEventListener('resize', () => {
		clearTimeout(t);
		t = setTimeout(run, 150);
	});
})();

// ---------- specular light follows the pointer across every glass surface ----------
(() => {
	if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
	const els = [...document.querySelectorAll<HTMLElement>('.lg')];
	let x = 0,
		y = 0,
		queued = false;
	const paint = () => {
		queued = false;
		els.forEach((el) => {
			const r = el.getBoundingClientRect();
			if (r.bottom < 0 || r.top > innerHeight || !r.width) return;
			el.style.setProperty('--sx', (((x - r.left) / r.width) * 100).toFixed(1) + '%');
			el.style.setProperty('--sy', (((y - r.top) / r.height) * 100).toFixed(1) + '%');
		});
	};
	addEventListener(
		'pointermove',
		(e) => {
			x = e.clientX;
			y = e.clientY;
			if (!queued) {
				queued = true;
				requestAnimationFrame(paint);
			}
		},
		{ passive: true },
	);
})();

// ---------- slides come into focus once; the dock tracks the current chapter ----------
(() => {
	const io = new IntersectionObserver(
		(es) =>
			es.forEach((e) => {
				if (e.isIntersecting) {
					e.target.classList.add('in');
					io.unobserve(e.target);
				}
			}),
		{ threshold: 0.15 },
	);
	document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
	const links = [...document.querySelectorAll('.dock a[href^="#"]')];
	const spy = new IntersectionObserver(
		(es) =>
			es.forEach((e) => {
				if (e.isIntersecting)
					links.forEach((a) => a.setAttribute('aria-current', a.getAttribute('href') === '#' + e.target.id ? 'true' : 'false'));
			}),
		{ rootMargin: '-45% 0px -50% 0px' },
	);
	document.querySelectorAll('main > section[id]').forEach((s) => spy.observe(s));
})();

// ---------- the hero holds while the first scrolls bring the portrait up; once it lands it stays ----------
(() => {
	const img = document.querySelector<HTMLElement>('.hero-portrait');
	const track = document.querySelector<HTMLElement>('.hero-track');
	if (!img || !track || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
	let span = 1,
		queued = false;
	const measure = () => (span = track.offsetHeight - (track.firstElementChild as HTMLElement).offsetHeight || innerHeight * 1.2);
	const paint = () => {
		queued = false;
		const p = Math.min(1, Math.max(0, scrollY / span));
		track.style.setProperty('--reveal', (1 - (1 - p) ** 2).toFixed(3));
		if (p === 1) {
			removeEventListener('scroll', onScroll);
			removeEventListener('resize', measure);
		}
	};
	const onScroll = () => {
		if (!queued) {
			queued = true;
			requestAnimationFrame(paint);
		}
	};
	measure();
	addEventListener('resize', measure);
	addEventListener('scroll', onScroll, { passive: true });
	paint();
})();

// ---------- the dock waits on the hero, arrives as the Projects section comes up, then stays ----------
(() => {
	const projects = document.getElementById('projects');
	if (!projects) return;
	const io = new IntersectionObserver(([e]) => {
		if (!e.isIntersecting && e.boundingClientRect.top > 0) return;
		document.documentElement.classList.add('dock-on');
		io.disconnect();
	});
	io.observe(projects);
})();
