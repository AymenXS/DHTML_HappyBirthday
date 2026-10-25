(() => {
const portrait = window.matchMedia('(orientation: portrait) and (max-width: 1024px)');
const resume = new Set();
function syncOrientation() {
  document.querySelectorAll('video').forEach(video => {
    if (portrait.matches) { if (!video.paused || video.autoplay) resume.add(video); video.pause(); }
    else if (resume.has(video)) { video.play().catch(() => {}); resume.delete(video); }
  });
  if (portrait.matches) document.querySelectorAll('iframe').forEach(frame => {
    if (frame.src.startsWith('https://www.youtube.com/embed/')) frame.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }), 'https://www.youtube.com');
  });
  document.dispatchEvent(new Event('orientationgatechange'));
}
portrait.addEventListener('change', syncOrientation);
syncOrientation();

})();
