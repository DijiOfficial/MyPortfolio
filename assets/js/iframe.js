(function () {
	const modal = document.getElementById('projectModal');
	const frame = document.getElementById('projectModalFrame');

	function openModal(url) {
		frame.src = url;
		modal.classList.add('is-open');
		modal.setAttribute('aria-hidden', 'false');
		document.body.classList.add('modal-open');
	}

	function closeModal() {
		modal.classList.remove('is-open');
		modal.setAttribute('aria-hidden', 'true');
		document.body.classList.remove('modal-open');
		frame.src = 'about:blank';
	}

	// Attach to all modal links
	document.querySelectorAll('.project-modal-link').forEach(link => {
		link.addEventListener('click', function (e) {
			e.preventDefault();
			openModal(this.href);
		});
	});

	// Close on backdrop or button
	modal.querySelectorAll('[data-close-modal]').forEach(el => {
		el.addEventListener('click', closeModal);
	});

	// ESC key
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape' && modal.classList.contains('is-open')) {
			closeModal();
		}
	});
})();