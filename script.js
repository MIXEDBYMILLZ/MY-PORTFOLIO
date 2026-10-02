document.addEventListener('DOMContentLoaded', () => {
  const player = document.getElementById('audio-player');
  const titleDisplay = document.getElementById('track-title');
  const categoryDisplay = document.getElementById('track-category');
  const cards = document.querySelectorAll('.track-card');

  cards.forEach(card => {
    const playBtn = card.querySelector('.play-btn');
    playBtn.addEventListener('click', () => {
      const src = card.getAttribute('data-src');
      const title = card.getAttribute('data-title');
      const category = card.getAttribute('data-cat');

      player.src = src;
      titleDisplay.textContent = title;
      categoryDisplay.textContent = category;
      player.play();
    });
  });
});