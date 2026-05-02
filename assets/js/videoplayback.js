(function () {
    document.querySelectorAll('.hover-video').forEach(container => {
        const video = container.querySelector('video');

        container.addEventListener('mouseenter', () => {
            video.play();
        });

        container.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0; // optional: reset
        });
    });
})();