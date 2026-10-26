# HappyBirthday — project handoff

Updated: 2026-10-25. Read this file first when resuming in a new session.

## Purpose and agreed scope

Restore the original birthday gift for Imane locally, then let the owner refine it. Preserve the original presentation and personal content. Do not introduce a redesign, new wording, reveal delays, replay controls, date gates, or framework migration without discussing them.

- Keep the original March 2, 2023 countdown target and its negative values.
- The countdown button remains usable immediately, even while the countdown is negative.
- Keep the original 24th birthday greeting, duckling, glow, backgrounds, fireworks, and sound.
- Work locally first. YouTube reuploads and hosting are deferred.
- No Vite for now: plain HTML, CSS, and JavaScript are sufficient.
- Discuss future workflow changes using folder trees, progressive unfolding, and ASCII arrows before implementation.

## Current user journey

```text
index.html (countdown)
    -> fireworks.html (celebration)
        -> birthday-video.html (Happy Birthday Imane)
            -> final-present.html (Stumble Guys compilation)
```

The owner confirmed these two video assignments. Both now use local MP4 files and native playback controls instead of YouTube. Browser autoplay policy may require pressing Play.

## Structure

```text
HappyBirthday/
|-- index.html
|-- fireworks.html
|-- birthday-video.html
|-- final-present.html
|-- resources/
|   |-- css/        countdown.css, fireworks.css, videos.css
|   |-- js/         countdown.js, fireworks.js, birthday-video.js
|   |-- videos/     two countdown backgrounds and two birthday videos
|   |-- audio/      fireworks.aac
|   `-- vendor/fireworks/fireworks.js
|-- archive/
|   |-- artwork/                original RAW content
|   |-- unused-videos/          other original videos, preserved
|   |-- original-repositories/  hidden Git repositories from old page folders
|   `-- Plan.txt                original project notes
`-- PROJECT.md                  this handoff
```

All HTML entry pages live at the root. HTML asset paths and JavaScript navigation/audio paths resolve from those root pages. Keep this in mind when editing resource scripts.

## Restoration completed

- Replaced the old separate GitHub Pages redirects with local page links.
- Saved fireworks-js 1.3.5 locally, retaining its embedded MIT license header; the original code expects the global Fireworks constructor.
- Removed an unused button lookup and the unnecessary AudioContext from the fireworks script.
- Fireworks audio is attempted on a non-navigation click, with rejected playback handled. No explicit sound toggle has been added.
- Replaced the YouTube embed and final YouTube redirect with local video pages.
- Organized pages at the root and assets under resources; preserved artwork, unused videos, original notes, and discovered nested Git metadata in archive.
- Google Fonts imports remain external, with CSS fallback fonts. Fully offline typography is not implemented.

## Running locally

Open index.html directly for a quick check, or serve this directory with a static HTTP server (for example, `python -m http.server 8000` if Python is installed) and visit http://localhost:8000. No build step or npm install is required.

## Verification and next steps

Static checks cover JavaScript syntax, local HTML references, navigation/audio targets, the fireworks global constructor, and continued negative countdown behavior. Browser visual checks, video decoding/playback, audio behavior, and a complete click-through still need verification. Existing layout quirks remain intentionally; do not claim a responsive redesign has been completed.

Next: verify the restored journey locally with the owner, then discuss their requested tweaks. Only after local refinement should YouTube uploads and publishing be addressed. Never publish archive or its Git metadata; choose an explicit deployment file set later.

## Environment note

During this session, sandboxed terminal startup failed with `helper_unknown_error: setup refresh had errors`. Approved elevated PowerShell calls worked. This is an execution-environment issue, not an application error.

## Local refinement update — 2026-10-25

The owner now authorized layout refinement: countdown panels are contained, the countdown button uses a rounded dark blue treatment, fireworks content uses normal flow, expensive flashing/reflection effects are removed, and phones use fewer particles and less frequent launches. Animation pauses in hidden tabs and respects reduced motion. Physical phone performance still needs verification. Video pages now use centered responsive players. Tferej o Skot (46.1 MiB) is added after the compilation as tferej-o-skot.html; this placement is an implementation assumption pending owner feedback. Original extra video remains archived.

Publishing preference: push to GitHub after local refinement; initially try GitHub Pages, with Vercel as the intended alternative. No push or publishing has occurred. Direct MP4 playback is desired where practical; YouTube is optional. The 536.9 MiB compilation exceeds GitHub regular-file limits and needs compression or external hosting for this workflow. The birthday video (5.5 MiB) and Tferej o Skot fit regular Git file limits.

## Workflow revision — 2026-10-25

Owner selected GitHub Pages via GitHub. Local refinement continues; no push authorized yet. Countdown now decomposes absolute elapsed seconds and prefixes the minus sign correctly, retaining negative values, with a human-readable elapsed line. The two backgrounds are full scrolling scenes; gift button is at the bottom of scene two. Fireworks page has a new centered sky/wishes presentation, duck interaction, and opt-in sound at 15% volume. All five pages show a rotate notice on small portrait screens; video playback is paused there and fireworks stop. This is an orientation gate, not a guaranteed browser orientation lock or prevention of network loading.

Compilation page now asks 'Do you think you are always right?'. Yes goes to Tferej o Skot. No clicks: Don't lie -> Stop lying -> proof dialog and automatic navigation after 2.4 seconds. Proof.jpg is preserved at root and copied into resources/images/proof.jpg. Verify timing with owner. The 537 MB compilation still blocks a regular GitHub push; compress or arrange another source before publishing.

### First-page correction
The prior HTML patch had not inserted the elapsed element or moved the button, causing a null-element exception before click registration. Corrected markup now includes elapsed text and scroll cue, with the gift link inside scene two. Navigation uses a native anchor to fireworks.html and no longer depends on countdown JavaScript.

### Countdown and fireworks follow-up
Elapsed summary now uses calendar years and months only. Fireworks launch speed is 3, canvas dimensions and boundaries refresh after portrait gating, and reduced-motion preference lowers particle counts rather than suppressing all fireworks. Duck now bounces (unless reduced motion), temporarily increases launch frequency, and updates its hint. Original sound is attempted on entry and enabled by interaction if autoplay is blocked, at 12% volume, with a mute control. Phone rendering remains to be checked on device.

### Manual proof continuation and shared buttons
Removed the quiet-sound control/label, keeping original audio at 12% and interaction playback. All navigation/answer/proof buttons share resources/css/buttons.css with the fireworks Courgette typography. Proof now waits indefinitely for Close & continue before going to Tferej o Skot, whose autoplay is removed; playback requires Play. Visual birthday variations requested for chat comparison only, not selected for implementation yet.

### Duck comparison previews
Saved generated A/B/C birthday concept board at archive/design-previews/birthday-variations-abc.png, not used by the website. Fireworks currently shows three temporary inline SVG/CSS animated duck candidates side by side in the original duck area: A waving front-facing duck, B floating profile duck with ripples, C bouncing party-hat duck. All trigger the existing burst/audio interaction. No final choice made; ask owner which to retain. Animation honors reduced motion.

### Selected duck, motion comparison
Owner selected C (birthday bounce party-hat duck). Removed waving and floating designs from page. Current temporary comparison uses that same party-hat artwork for all three options: A soft bounce, B happy wiggle, C double hop. Await owner's motion choice; no single motion finalized yet.

### Duck motion preview correction
Removed the CSS reduced-motion override that disabled every duck animation. Owner explicitly requested animated comparison; all three preview loops now run regardless of that preference. Added a stylesheet version query to refresh cached CSS. Revisit reduced-motion handling after the final animation is chosen.

### Final duck choice
Owner selected Happy Wiggle. Only the party-hat duck with happy-wiggle animation remains. Removed preview labels, border, and card background; keyboard focus indication remains.

## GitHub Pages preparation
Owner authorized moving toward GitHub Pages. Created .github/workflows/pages.yml, scripts/prepare-pages.cjs, .gitignore, and PUBLISHING.md. Workflow publishes only five HTML pages plus resources. Root has no Git repository yet; repository destination is pending. Archived remotes were AymenXS/Birthday, AymenXS/Fireworks, AymenXS/BDay-Video-2. Do not overwrite these without confirming the intended target. Compilation still exceeds 100 MiB; packaging deliberately fails until resolved. Asked owner for target repository and compression-versus-external-link choice. No commit, push, or deployment yet.

### Publishing decisions confirmed
Owner requested a new HappyBirthday repository following their IT notes. Read E:/WorkSpace/Notes/Work/IT/Resources/Git & Github/Github.md: simplified naming is [Language/Framework]_[ProjectTitle], public project names lowercase. Derived name: DHTML_HappyBirthday (vanilla JavaScript project). Owner chose YouTube for the large compilation; no compression needed. Original compilation is now gitignored and retained locally. Await the YouTube URL before replacing the local player and completing deployment checks. No repository has been created or pushed.

### Corrected repository name and YouTube integration
User explicitly overrode lowercase naming: repository must be DHTML_HappyBirthday. Compilation URL is https://youtu.be/WIzqhGwHgrk, now embedded in final-present.html without autoplay. Proof interaction and portrait gate send YouTube pause commands instead of calling a nonexistent native video element. Packaging excludes the original oversized local compilation, which is still gitignored and preserved. No YouTube uploads performed by the agent. Remote playback availability needs verification over HTTP/live Pages.

### Landscape phone second-scene fix
At landscape sizes up to 1100px wide and 600px high, countdown scene two uses a full-viewport grid: uncropped object-fit contain video in its own row and gift button in a separate row inside the scene. White scene background matches the video. Desktop layout unchanged.

### Desktop second-scene correction
Previous landscape-phone patch left desktop using cropped cover video. Added desktop media rules for contained video plus a separate action row inside a viewport-height white scene; phone-specific layout retained. Stylesheet version scene-fit-3.

### Actions runtime maintenance — 2026-10-26
Verified official latest releases: setup-node v7.1.0, configure-pages v6.0.0, deploy-pages v5.0.1 use node24; upload-pages-artifact v5.0.0 uses upload-artifact v7. Updated workflow major versions accordingly. Validation runtime remains Node 22, independent of action runtime.

### Original assets preserved — 2026-10-26
Owner requested preserving all archive/artwork/, archive/design-previews/, and archive/unused-videos/Imane Step A Day.mp4 in GitHub. Ignore rules now allow exactly those archive areas. Old Git histories, duplicate Tferej video, and Plan.txt remain ignored. Pages packaging still copies only root HTML and resources, so preserved originals are in the repository but not deployed as website files. _site is a generated packaging directory created locally by validation and independently in GitHub Actions; it is never committed or pushed.
