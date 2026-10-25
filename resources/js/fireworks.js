(() => {
const fireDiv = document.querySelector('.fireworksDiv');
const audio = new Audio('resources/audio/fireworks.aac');
audio.volume = 0.12;
const lightMode = window.matchMedia('(max-width: 700px), (pointer: coarse)').matches;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const portrait = window.matchMedia('(orientation: portrait) and (max-width: 1024px)');
const normalDelay = lightMode ? { min: 24, max: 38 } : { min: 12, max: 22 };
const fireworks = new Fireworks(fireDiv, {
  delay: normalDelay,
  trace: lightMode ? 2 : 4,
  speed: 3,
  acceleration: 1.04,
  particles: reducedMotion ? 12 : lightMode ? 24 : 60,
  sound: { enabled: false }
});
let burstTimer;
function playSound() {
  if (!document.hidden && !portrait.matches) audio.play().catch(() => {});
}
function syncAnimation() {
  if (document.hidden || portrait.matches) { fireworks.stop(); audio.pause(); return; }
  // Portrait gating can initialize the library with a zero-sized canvas.
  fireworks.setSize();
  fireworks.setBoundaries({ x: 20, y: 20, width: fireDiv.clientWidth, height: fireDiv.clientHeight });
  fireworks.start();
}
document.addEventListener('visibilitychange', syncAnimation);
document.addEventListener('orientationgatechange', syncAnimation);
window.addEventListener('resize', syncAnimation);
window.addEventListener('pageshow', syncAnimation);
window.addEventListener('pagehide', () => { fireworks.stop(); audio.pause(); clearTimeout(burstTimer); });
document.addEventListener('click', event => {
  if (event.target.closest('#clickMe')) return;
  playSound();
});
document.querySelectorAll('.duck-option').forEach(duck => duck.addEventListener('click', event => {
  if (portrait.matches) return;
  syncAnimation();
  clearTimeout(burstTimer);
  fireworks.setOptions({ delay: { min: 1, max: 2 } });
  burstTimer = setTimeout(() => fireworks.setOptions({ delay: normalDelay }), 700);
  if (!reducedMotion) event.currentTarget.animate([
    { transform: 'translateY(0) rotate(0)' },
    { transform: 'translateY(-18px) rotate(-12deg)' },
    { transform: 'translateY(0) rotate(0)' }
  ], { duration: 450 });
  document.querySelector('.duck-hint').textContent = 'A sky full of wishes for you!';
  audio.currentTime = 0; playSound();
}));
document.getElementById('clickMe').addEventListener('click', () => { window.location.href = 'birthday-video.html'; });
syncAnimation();
playSound();

})();
