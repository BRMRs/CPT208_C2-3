# Learnings — github-pages-site

## [2026-03-16] Session Init
- Repo lives at: /Users/rui/CPT208_C2-3
- Remote: https://github.com/BRMRs/CPT208_C2-3.git
- GitHub Pages URL will be: https://brmrs.github.io/CPT208_C2-3/
- CRITICAL: All paths in HTML/CSS must be RELATIVE (no leading /) — site deploys to subpath /CPT208_C2-3/
- CRITICAL: .nojekyll file MUST exist in root — without it Jekyll breaks plain HTML
- All 4 photos confirmed at root: rui.jpg, tian.jpg, xian.jpg, xiao.jpg
- Member photos must be moved to assets/images/ (Task 1)
- Persona content goes to .sisyphus/drafts/personas-content.md (Task 2, consumed by Task 5)
- Plan: atomic steps for file structure changes; Step 1: create .nojekyll; Step 2: create assets/images; Step 3: git mv; Step 4: verify; Step 5: save evidence; Step 6: commit
- Successfully built a responsive single-page portfolio using pure HTML/CSS without external frameworks.
- Used CSS Grid for responsive team cards and Flexbox for navigation and persona headers.
- Ensured all paths are relative to support GitHub Pages subpath deployment.
