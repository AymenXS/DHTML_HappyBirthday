let noCount = 0;
let leaving = false;
const feedback = document.getElementById('answerFeedback');
const proof = document.getElementById('proof');
const yes = document.getElementById('yesAnswer');
const no = document.getElementById('noAnswer');
function proceed() { window.location.href = 'tferej-o-skot.html'; }
yes.addEventListener('click', () => { if (!leaving) proceed(); });
no.addEventListener('click', () => {
  if (leaving) return;
  noCount++;
  if (noCount === 1) feedback.textContent = 'Don’t lie.';
  else if (noCount === 2) feedback.textContent = 'Stop lying.';
  else {
    leaving = true;
    feedback.textContent = 'Stop lying, stop lying!';
    yes.disabled = no.disabled = true;
    document.getElementById('compilationPlayer').contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }), 'https://www.youtube.com');
    proof.showModal();

  }
});
proof.addEventListener('cancel', event => event.preventDefault());

document.getElementById('closeProof').addEventListener('click', () => { proof.close(); proceed(); });
