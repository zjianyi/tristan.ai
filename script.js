document.addEventListener('DOMContentLoaded', () => {
    const initialContent = document.getElementById('initial-content');
    const videoContent = document.getElementById('video-content');
    const progressContainer = document.getElementById('progress-container');
    const progress = document.querySelector('.progress');
    const generateBtn = document.getElementById('generate-btn');
    const generateAnotherBtn = document.getElementById('generate-another-btn');
    const tristanVideo = document.getElementById('tristan-video');

    // Array of video sources (you'll need to replace these with your actual video paths)
    const videos = ['videos/video1.mp4', 'videos/video2.mp4'];
    let currentVideoIndex = 0;

    function showProgress() {
        progressContainer.classList.remove('hidden');
        progress.style.width = '0%';
        
        let width = 0;
        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
                progressContainer.classList.add('hidden');
                showVideo();
            } else {
                width += (100 / 70); // 70 increments over 7 seconds
                progress.style.width = width + '%';
            }
        }, 100);
    }

    function showVideo() {
        initialContent.classList.add('hidden');
        videoContent.classList.remove('hidden');
        
        // Set the video source
        const videoSource = tristanVideo.querySelector('source');
        videoSource.src = videos[currentVideoIndex];
        tristanVideo.load();
        tristanVideo.play();
    }

    function handleGenerate() {
        showProgress();
    }

    function handleGenerateAnother() {
        // Update video index
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        videoContent.classList.add('hidden');
        showProgress();
    }

    generateBtn.addEventListener('click', handleGenerate);
    generateAnotherBtn.addEventListener('click', handleGenerateAnother);
}); 