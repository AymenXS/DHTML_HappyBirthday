# GitHub Pages publishing

Status: prepared locally, not pushed or deployed.

## Before pushing

1. Choose the target GitHub repository. This folder is not yet a Git repository; archived repositories are preserved separately.
2. Resolve resources/videos/stumble-guys-compilation.mp4 (537 MB). GitHub rejects regular files above 100 MiB. Keep the full original locally and use a smaller web copy, or change its source to an externally hosted video. Do not use Git LFS as the Pages delivery solution.
3. Run: node scripts/prepare-pages.cjs
4. Review and commit the site, scripts, workflow, and documentation. archive/, _site/, and the duplicate root Proof.jpg are ignored. The required proof image under resources/images/ is included.
5. Push main to the chosen repository. In Settings → Pages → Build and deployment, choose GitHub Actions. For GitHub Free, use a public repository.
6. Run or rerun the Publish GitHub Pages workflow, then open its deployment URL.

## What gets published

The packaging script copies only the five HTML pages and resources/ into _site/. Archive files, original Git metadata, internal documentation, and scripts are not published as site content.

All site navigation and resource paths are relative and support a GitHub Pages repository subpath. No Vite or build dependencies are required; Node is used only for validation and packaging.

## Live verification

Test all five pages, the countdown and elapsed summary, scrolling gift link, fireworks and Happy Wiggle interaction, low-volume audio after a tap, landscape prompt, every video, Yes and repeated No answers, proof Close & continue, and manual playback on the final video.

## Selected destination and video approach

New repository name: DHTML_HappyBirthday, following the owner's public lowercase [Language/Framework]_[ProjectTitle] convention. The large compilation will use YouTube; its original local MP4 is gitignored and retained. Wait for the uploaded video URL before updating final-present.html and completing packaging.

## Ready-to-publish update

Repository name is DHTML_HappyBirthday (explicit owner correction). Compilation is embedded from https://youtu.be/WIzqhGwHgrk. Its local original is excluded by both Git and the Pages packaging script.
