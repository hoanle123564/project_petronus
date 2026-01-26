// Video Modal Script
document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.getElementById('openVideoModal');
    const closeModalBtn = document.getElementById('closeVideoModal');
    const videoModalOverlay = document.getElementById('videoModalOverlay');
    const youtubeIframe = document.getElementById('youtubeIframe');

    // YouTube video URL - embed format with autoplay
    const videoUrl = 'https://www.youtube.com/embed/Y-x0efG1seA?autoplay=1&rel=0';

    // Open modal
    if (openModalBtn) {
        openModalBtn.addEventListener('click', function (e) {
            e.preventDefault();
            videoModalOverlay.classList.add('active');
            youtubeIframe.src = videoUrl;
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    }

    // Close modal function
    function closeModal() {
        videoModalOverlay.classList.remove('active');
        youtubeIframe.src = ''; // Stop video
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Close modal on button click
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    // Close modal on overlay click (outside video)
    if (videoModalOverlay) {
        videoModalOverlay.addEventListener('click', function (e) {
            if (e.target === videoModalOverlay) {
                closeModal();
            }
        });
    }

    // Close modal on ESC key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && videoModalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
});
