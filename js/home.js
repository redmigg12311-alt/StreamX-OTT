// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Toggle Audio
const audio = document.getElementById('backgroundAudio');
const audioBtn = document.getElementById('audioToggle');

audioBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    audioBtn.textContent = '🔊';
  } else {
    audio.pause();
    audioBtn.textContent = '🔇';
  }
});

