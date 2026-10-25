const fields = ['days', 'hours', 'minutes', 'seconds'].map(id => document.getElementById(id));
const birthday = new Date(2023, 2, 2);
function updateCountdownTime() {
  const now = new Date();
  const difference = birthday - now;
  let remaining = Math.floor(Math.abs(difference) / 1000);
  const values = [86400, 3600, 60, 1].map(unit => { const value = Math.floor(remaining / unit); remaining %= unit; return value; });
  fields.forEach((field, i) => { field.textContent = (difference < 0 ? '−' : '') + String(values[i]).padStart(2, '0'); });
  let months = (now.getFullYear() - birthday.getFullYear()) * 12 + now.getMonth() - birthday.getMonth();
  if (now.getDate() < birthday.getDate()) months--;
  const years = Math.floor(Math.max(0, months) / 12);
  const rest = Math.max(0, months) % 12;
  document.getElementById('elapsed').textContent = difference < 0
    ? years + ' ' + (years === 1 ? 'year' : 'years') + ' and ' + rest + ' ' + (rest === 1 ? 'month' : 'months') + ' ago.'
    : 'The birthday is still on its way.';
}
updateCountdownTime();
setInterval(updateCountdownTime, 1000);
