// Smooth scroll momentum for horizontal carousel
const recentCarousel = document.getElementById('recentCarousel');
if (recentCarousel) {
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;
  let velocity = 0;
  let rafId = 0;

  const easeMomentum = () => {
    recentCarousel.scrollLeft += velocity;
    velocity *= 0.95;
    if (Math.abs(velocity) > 0.2) {
      rafId = requestAnimationFrame(easeMomentum);
    }
  };

  recentCarousel.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - recentCarousel.offsetLeft;
    scrollLeft = recentCarousel.scrollLeft;
    cancelAnimationFrame(rafId);
  });
  recentCarousel.addEventListener('mouseleave', () => { isDown = false; });
  recentCarousel.addEventListener('mouseup', () => { isDown = false; easeMomentum(); });
  recentCarousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - recentCarousel.offsetLeft;
    const walk = (x - startX) * 1.2;
    const newScrollLeft = scrollLeft - walk;
    velocity = (newScrollLeft - recentCarousel.scrollLeft);
    recentCarousel.scrollLeft = newScrollLeft;
  });

  // Touch support
  let touchStartX = 0;
  let touchStartScroll = 0;
  recentCarousel.addEventListener('touchstart', (e) => {
    const t = e.touches[0];
    touchStartX = t.clientX;
    touchStartScroll = recentCarousel.scrollLeft;
    cancelAnimationFrame(rafId);
  }, { passive: true });
  recentCarousel.addEventListener('touchmove', (e) => {
    const t = e.touches[0];
    const dx = t.clientX - touchStartX;
    const newScrollLeft = touchStartScroll - dx;
    velocity = (newScrollLeft - recentCarousel.scrollLeft);
    recentCarousel.scrollLeft = newScrollLeft;
  }, { passive: true });
  recentCarousel.addEventListener('touchend', () => { easeMomentum(); });
}

