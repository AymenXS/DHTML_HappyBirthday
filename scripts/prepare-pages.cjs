const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const pages = ['index.html', 'fireworks.html', 'birthday-video.html', 'final-present.html', 'tferej-o-skot.html'];
function walk(dir) { return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)]); }
const assets = walk('resources').filter(file => path.basename(file) !== 'stumble-guys-compilation.mp4');
for (const file of assets) {
  if (fs.statSync(file).size > 100 * 1024 * 1024) throw new Error(file + ' exceeds GitHub’s 100 MiB regular-file limit. Prepare a smaller web copy before pushing.');
  if (file.endsWith('.js')) new vm.Script(fs.readFileSync(file, 'utf8'), { filename: file });
}
for (const page of pages) {
  for (const match of fs.readFileSync(page, 'utf8').matchAll(/(?:src|href)="([^"#]+)"/g)) {
    const ref = match[1].split('?')[0];
    if (!/^(https?:|data:)/.test(ref) && !fs.existsSync(decodeURIComponent(ref))) throw new Error(page + ': missing ' + ref);
  }
}
fs.mkdirSync('_site', { recursive: true });
for (const file of [...pages, ...assets]) { const dest = path.join('_site', file); fs.mkdirSync(path.dirname(dest), { recursive: true }); fs.copyFileSync(file, dest); }
fs.writeFileSync('_site/.nojekyll', '');
console.log('Verified and prepared five pages and ' + assets.length + ' resources in _site/.');
