# Go Climbers — GitHub Pages Team Portfolio Website

## TL;DR

> **Quick Summary**: Build a static GitHub Pages website for CPT208 course group C2-3, featuring 4 team member cards and 2 AI-generated user personas for the "Go Climbers" climbing app. All content in English, with a Chinese deployment guide.
> 
> **Deliverables**:
> - `index.html` — Single-page site with team cards, personas, AI references, tech reflection
> - `style.css` — Responsive stylesheet
> - `assets/images/` — Organized member photos
> - `.nojekyll` — GitHub Pages plain-HTML flag
> - `DEPLOYMENT_GUIDE.md` — Chinese deployment instructions
> - Updated `README.md`
> 
> **Estimated Effort**: Short (~2-3 hours agent time)
> **Parallel Execution**: YES — 2 waves + final verification
> **Critical Path**: Task 1 (scaffolding) → Task 5 (website build) → Final QA

---

## Context

### Original Request
Build a GitHub Pages website for CPT208 course project. The site must display 4 team member cards (name, student ID, profile photo, brief introduction) and 2 AI-generated user personas for the "Go Climbers" climbing app. All visible content must be in English. A Chinese deployment guide is also needed.

### Interview Summary
**Key Discussions**:
- Repository is nearly empty: only README.md, requirement.md, 4 profile photos, and course PDFs exist
- All member data is fully specified in requirement.md (names, IDs, photos, bios)
- Software theme: "Go Climbers" — mobile+wearable app for climbing matchmaking, coach booking, venue selection, data tracking
- 2 persona themes: entry-level white-collar female climber + professional climbing coach
- User cannot deploy to GitHub Pages directly — needs a Chinese guide

**Research Findings**:
- Coursework PDF (Deliverable 2, 20% weight): requires a Process Portfolio website documenting iterative design
- If AI used for coding → mandatory "Technical Reflection" section (prompts, verification, ethical considerations)
- The current task is Week 2 initialization — site must be extensible for future weeks (10 total)

### Metis Review
**Identified Gaps** (all addressed):
- `.nojekyll` file MUST be added — without it, GitHub Pages runs Jekyll processing which breaks plain HTML
- ALL paths must be relative — site lives at `/CPT208_C2-3/` subpath, absolute paths cause 404s
- Technical Reflection section is mandatory since AI is writing the code
- Member intro text lengths vary wildly (1 paragraph vs 1 sentence) — CSS must handle gracefully
- Site must use semantic `<section id="...">` structure for future extensibility
- Emoji characters (⚖️, 🦁) require UTF-8 charset declaration

---

## Work Objectives

### Core Objective
Create a professional, responsive, single-page website hosted on GitHub Pages that showcases the Go Climbers team and presents two user personas for the climbing app project.

### Concrete Deliverables
- `index.html` — Complete single-page site with: hero/header, nav bar, team member section (4 cards), persona section (2 personas), AI references, technical reflection
- `style.css` — Responsive layout (desktop grid → mobile stack), climbing-themed color scheme, graceful handling of varied text lengths
- `assets/images/` — 4 member photos (rui.jpg, tian.jpg, xian.jpg, xiao.jpg)
- `.nojekyll` — Empty file, prevents Jekyll processing
- `DEPLOYMENT_GUIDE.md` — Step-by-step Chinese guide for enabling GitHub Pages
- `README.md` — Updated with project description

### Definition of Done
- [ ] Site renders correctly at 3 breakpoints (1920px, 768px, 375px) — verified via Playwright screenshots
- [ ] All 4 member names, student IDs, and photos present — verified via grep
- [ ] 2 complete user personas present — verified via grep
- [ ] Zero Chinese characters in index.html or style.css — verified via Python regex
- [ ] Zero absolute paths in any web file — verified via grep
- [ ] `.nojekyll` file exists — verified via test -f
- [ ] All images load without 404 — verified via Playwright

### Must Have
- All 4 member cards with exact data from requirement.md
- 2 user personas following 10-80-10 rule (10% demographics, 80% behaviors/pain points/goals, 10% scenario)
- Responsive layout (desktop → tablet → mobile)
- Navigation bar with anchor links to all sections
- AI References section with formal citations
- Technical Reflection section (can be initial stub, expandable later)
- Semantic HTML with section IDs for future extensibility
- `<meta charset="UTF-8">` for emoji support

### Must NOT Have (Guardrails)
- ❌ NO JavaScript of any kind — pure HTML+CSS only
- ❌ NO CSS frameworks (Bootstrap, Tailwind, etc.) — zero external dependencies
- ❌ NO build tools, package.json, or node_modules
- ❌ NO absolute paths (`/assets/...` or full URLs) — relative paths only
- ❌ NO Chinese characters in index.html or style.css
- ❌ NO AI-generated portrait images for personas — text-only with emoji/icon placeholders
- ❌ NO future portfolio sections (Motivation, User Journey, Evaluation, Ideation) — only member cards + personas + refs + tech reflection
- ❌ NO modifications to the `document/` folder or its contents
- ❌ NO `.github/workflows/` or CI/CD setup
- ❌ NO interactive features (dark mode toggle, modals, forms, animations)
- ❌ NO fixed-height cards — must use auto-sizing to handle varying text lengths
- ❌ NO over-abstraction or excessive comments (AI slop)

---

## Verification Strategy

> **ZERO HUMAN INTERVENTION** — ALL verification is agent-executed. No exceptions.

### Test Decision
- **Infrastructure exists**: NO (static HTML site, no test framework)
- **Automated tests**: None — static site doesn't benefit from unit tests
- **Framework**: N/A
- **QA Method**: Playwright visual verification + bash grep/script checks

### QA Policy
Every task includes agent-executed QA scenarios.
Evidence saved to `.sisyphus/evidence/task-{N}-{scenario-slug}.{ext}`.

- **Website rendering**: Use Playwright (playwright skill) — open index.html, screenshot at 3 viewports, assert content
- **File integrity**: Use Bash — grep for required strings, check for forbidden patterns
- **Content validation**: Use Bash (Python one-liners) — verify no Chinese chars, no absolute paths

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Start immediately — foundation + independent content, 4 parallel):
├── Task 1: Project scaffolding + asset organization [quick]
├── Task 2: Generate user persona content (2 personas) [deep]
├── Task 3: Chinese deployment guide [writing]
└── Task 4: README update [quick]

Wave 2 (After Tasks 1+2 — core website build):
└── Task 5: Build complete website (HTML + CSS + all content) [visual-engineering]

Wave FINAL (After Task 5 — verification, 4 parallel):
├── Task F1: Plan compliance audit [unspecified-high]
├── Task F2: Visual + responsive QA via Playwright [unspecified-high]
├── Task F3: Content integrity check [quick]
└── Task F4: Scope fidelity check [deep]

Critical Path: Task 1 → Task 5 → F1-F4
Parallel Speedup: Wave 1 runs 4 tasks simultaneously
Max Concurrent: 4 (Wave 1 and Wave FINAL)
```

### Dependency Matrix

| Task | Depends On | Blocks |
|------|-----------|--------|
| 1 | — | 5 |
| 2 | — | 5 |
| 3 | — | — |
| 4 | — | — |
| 5 | 1, 2 | F1, F2, F3, F4 |
| F1-F4 | 5 | — |

### Agent Dispatch Summary

- **Wave 1**: **4 tasks** — T1 → `quick`, T2 → `deep`, T3 → `writing`, T4 → `quick`
- **Wave 2**: **1 task** — T5 → `visual-engineering` + `frontend-ui-ux` skill
- **FINAL**: **4 tasks** — F1 → `unspecified-high`, F2 → `unspecified-high` + `playwright`, F3 → `quick`, F4 → `deep`

---

## TODOs

- [x] 1. Project Scaffolding + Asset Organization

  **What to do**:
  - Create an empty `.nojekyll` file in the repository root (this is CRITICAL — without it, GitHub Pages runs Jekyll processing which breaks plain HTML sites)
  - Create `assets/images/` directory
  - Move (git mv) the 4 profile photos from root to `assets/images/`: `rui.jpg`, `tian.jpg`, `xian.jpg`, `xiao.jpg`
  - Verify all 4 photos exist in the new location
  - Remove the original photo files from root (git mv handles this automatically)

  **Must NOT do**:
  - Do NOT rename the photo files — keep exact original names
  - Do NOT modify, compress, or resize the photos
  - Do NOT touch anything in the `document/` folder
  - Do NOT create any HTML or CSS files (that's Task 5)

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Simple file operations — create directory, move files, create empty file
  - **Skills**: []
  - **Skills Evaluated but Omitted**:
    - `git-master`: Not needed — simple git mv operations, not complex git workflows

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 2, 3, 4)
  - **Blocks**: Task 5
  - **Blocked By**: None (can start immediately)

  **References**:

  **Pattern References**:
  - `/Users/rui/CPT208_C2-3/rui.jpg` — One of 4 photos to move. Verify existence before moving.
  - `/Users/rui/CPT208_C2-3/tian.jpg`, `xian.jpg`, `xiao.jpg` — Remaining 3 photos

  **External References**:
  - GitHub Pages `.nojekyll`: An empty file that tells GitHub Pages to skip Jekyll processing. Without this, files starting with `_` are ignored and Liquid templates may cause errors.

  **Acceptance Criteria**:

  ```
  Scenario: All files in correct locations
    Tool: Bash
    Preconditions: Repository at /Users/rui/CPT208_C2-3
    Steps:
      1. Run: test -f .nojekyll && echo "PASS" || echo "FAIL"
      2. Run: test -f assets/images/rui.jpg && echo "PASS" || echo "FAIL"
      3. Run: test -f assets/images/tian.jpg && echo "PASS" || echo "FAIL"
      4. Run: test -f assets/images/xian.jpg && echo "PASS" || echo "FAIL"
      5. Run: test -f assets/images/xiao.jpg && echo "PASS" || echo "FAIL"
      6. Run: test ! -f rui.jpg && echo "PASS: root photo removed" || echo "FAIL: root photo still exists"
    Expected Result: All 6 checks output "PASS"
    Failure Indicators: Any check outputs "FAIL"
    Evidence: .sisyphus/evidence/task-1-file-structure.txt

  Scenario: .nojekyll is empty (not accidentally filled)
    Tool: Bash
    Preconditions: .nojekyll exists
    Steps:
      1. Run: test ! -s .nojekyll && echo "PASS: empty file" || echo "FAIL: file has content"
    Expected Result: "PASS: empty file"
    Evidence: .sisyphus/evidence/task-1-nojekyll-check.txt
  ```

  **Commit**: YES
  - Message: `chore: organize project structure and add .nojekyll`
  - Files: `.nojekyll`, `assets/images/rui.jpg`, `assets/images/tian.jpg`, `assets/images/xian.jpg`, `assets/images/xiao.jpg`
  - Pre-commit: `test -f .nojekyll && test -f assets/images/rui.jpg`

- [x] 2. Generate User Persona Content (2 Personas)

  **What to do**:
  - Generate 2 detailed user personas for the "Go Climbers" climbing app
  - Save output to `.sisyphus/drafts/personas-content.md` so Task 5 can use it
  - Follow the **10-80-10 rule**: 10% demographic background → 80% behaviors/pain points/goals → 10% usage scenario
  - ALL content must be in English

  **Persona 1 — Entry-Level White-Collar Female Climber**:
  - Demographics (10%): Young professional woman (25-32), office job, urban, tried climbing recently
  - Behaviors/Pain Points/Goals (80%):
    - New to climbing, intimidated by experienced climbers
    - Wants social climbing partners at her level
    - Struggles to find beginner-friendly routes and gyms
    - Seeks coaching but doesn't know how to find/book coaches
    - Health-conscious, interested in fitness tracking
    - Time-constrained (works 9-5), needs flexible scheduling
  - Usage Scenario (10%): A specific story of how she uses Go Climbers on a typical week

  **Persona 2 — Professional Climbing Coach**:
  - Demographics (10%): Experienced coach (35-45), works at climbing gym, certified
  - Behaviors/Pain Points/Goals (80%):
    - Needs to manage client bookings efficiently
    - Wants to track student progress with data (heart rate, climb frequency)
    - Struggles with scheduling across multiple venues
    - Wants to grow client base
    - Needs wearable data integration for training insights
    - Wants social proof / reviews from students
  - Usage Scenario (10%): A specific story of how they use Go Climbers for coaching

  **Output format** in `.sisyphus/drafts/personas-content.md`:
  ```
  # Persona 1: [Name]
  ## Background (10%)
  [demographics paragraph]
  ## Behaviors, Pain Points & Goals (80%)
  [detailed sections]
  ## Usage Scenario (10%)
  [narrative scenario]

  # Persona 2: [Name]
  [same structure]
  ```

  **Must NOT do**:
  - Do NOT write HTML/CSS — output is Markdown only (Task 5 converts to HTML)
  - Do NOT generate images
  - Do NOT use Chinese characters in the output
  - Do NOT make personas generic — they must be specific to climbing and the Go Climbers app features (matchmaking, coach booking, venue selection, wearable data tracking, social/competition)

  **Recommended Agent Profile**:
  - **Category**: `deep`
    - Reason: Persona generation requires thoughtful content creation — understanding user psychology, pain points, realistic scenarios. Deep thinking produces richer personas.
  - **Skills**: []
  - **Skills Evaluated but Omitted**:
    - `writing-prds`: Close but not right — PRDs are product requirements, not user personas

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 3, 4)
  - **Blocks**: Task 5
  - **Blocked By**: None (can start immediately)

  **References**:

  **Content References**:
  - `requirement.md:44-70` — Software theme details: "Go Climbers" app description, target users (climbers, coaches, gym owners), features (climbing matchmaking, coach booking, venue selection, social/competition, wearable data tracking), platform (mobile + wearable), usage context (onsite at climbing gyms/outdoor)
  - `requirement.md:72-77` — Persona requirements: 2 personas, 10-80-10 rule (10% background data + 80% behaviors/pain points/goals + 10% scenario story), personas focused on "entry-level white-collar female" and "professional climbing coach"

  **External References**:
  - 10-80-10 persona rule: 10% = demographic/background data (age, job, location), 80% = behavioral patterns, pain points, goals, motivations, 10% = contextual scenario showing the persona using the product

  **Acceptance Criteria**:

  ```
  Scenario: Personas file exists with correct structure
    Tool: Bash
    Preconditions: Task started
    Steps:
      1. Run: test -f .sisyphus/drafts/personas-content.md && echo "PASS" || echo "FAIL"
      2. Run: grep -c "^# Persona" .sisyphus/drafts/personas-content.md — expect output "2"
      3. Run: grep -c "Background" .sisyphus/drafts/personas-content.md — expect >= 2
      4. Run: grep -c "Pain Points\|Goals\|Behaviors" .sisyphus/drafts/personas-content.md — expect >= 2
      5. Run: grep -c "Scenario" .sisyphus/drafts/personas-content.md — expect >= 2
    Expected Result: File exists with 2 personas, each having background, behaviors/goals, and scenario sections
    Failure Indicators: Missing file, fewer than 2 persona headers, missing required sections
    Evidence: .sisyphus/evidence/task-2-personas-structure.txt

  Scenario: No Chinese characters in personas
    Tool: Bash
    Preconditions: .sisyphus/drafts/personas-content.md exists
    Steps:
      1. Run: python3 -c "import re; content=open('.sisyphus/drafts/personas-content.md').read(); chinese=re.findall(r'[\u4e00-\u9fff]', content); print(f'FAIL: {len(chinese)} Chinese chars') if chinese else print('PASS')"
    Expected Result: "PASS"
    Evidence: .sisyphus/evidence/task-2-personas-language.txt

  Scenario: Personas reference Go Climbers features
    Tool: Bash
    Preconditions: .sisyphus/drafts/personas-content.md exists
    Steps:
      1. Run: grep -ci "climb" .sisyphus/drafts/personas-content.md — expect >= 5
      2. Run: grep -ci "coach\|booking\|venue\|gym" .sisyphus/drafts/personas-content.md — expect >= 3
      3. Run: grep -ci "wearable\|heart rate\|tracking\|data" .sisyphus/drafts/personas-content.md — expect >= 2
    Expected Result: Content mentions climbing extensively, references coaching/booking/venue features, and mentions wearable/data features
    Evidence: .sisyphus/evidence/task-2-personas-relevance.txt
  ```

  **Commit**: NO (intermediate content, consumed by Task 5)

- [x] 3. Chinese GitHub Pages Deployment Guide

  **What to do**:
  - Create `DEPLOYMENT_GUIDE.md` in the repository root
  - Write a step-by-step guide IN CHINESE for deploying this repository to GitHub Pages
  - The guide should be written for someone who has never used GitHub Pages before
  - Cover these steps:
    1. 前提条件：确保仓库已推送到 GitHub
    2. 进入仓库的 Settings 页面
    3. 左侧菜单找到 Pages
    4. Source 选择 "Deploy from a branch"
    5. Branch 选择 "main"，文件夹选择 "/ (root)"
    6. 点击 Save
    7. 等待部署（通常 1-2 分钟）
    8. 访问 https://brmrs.github.io/CPT208_C2-3/ 验证
    9. 常见问题排查（404、样式不加载、图片不显示）

  **Must NOT do**:
  - Do NOT write in English — this specific file must be in Chinese (user explicitly requested)
  - Do NOT suggest using Jekyll, GitHub Actions, or custom domains
  - Do NOT include screenshots (text-only guide)
  - Do NOT modify any other files

  **Recommended Agent Profile**:
  - **Category**: `writing`
    - Reason: Documentation task — structured technical writing in Chinese
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 2, 4)
  - **Blocks**: None
  - **Blocked By**: None (can start immediately)

  **References**:

  **Content References**:
  - `requirement.md:84` — User's explicit request: "请你生成一个中文文档给我教我如何操作" (please generate a Chinese document teaching me how to operate)
  - Repository URL: `https://github.com/BRMRs/CPT208_C2-3.git` — the remote origin (verify via `git remote -v`)
  - Expected Pages URL: `https://brmrs.github.io/CPT208_C2-3/`

  **External References**:
  - GitHub Pages docs: Deploy from a branch, Settings → Pages → Source → Branch

  **Acceptance Criteria**:

  ```
  Scenario: Deployment guide exists and is in Chinese
    Tool: Bash
    Preconditions: Task started
    Steps:
      1. Run: test -f DEPLOYMENT_GUIDE.md && echo "PASS" || echo "FAIL"
      2. Run: python3 -c "import re; content=open('DEPLOYMENT_GUIDE.md').read(); chinese=re.findall(r'[\u4e00-\u9fff]', content); print(f'PASS: {len(chinese)} Chinese chars') if len(chinese) > 20 else print('FAIL: not enough Chinese')"
      3. Run: grep -c "GitHub Pages\|Settings\|Pages\|branch\|main" DEPLOYMENT_GUIDE.md — expect >= 3
    Expected Result: File exists, contains substantial Chinese text, mentions key GitHub Pages terms
    Failure Indicators: File missing, mostly English, missing key deployment steps
    Evidence: .sisyphus/evidence/task-3-deploy-guide.txt

  Scenario: Guide mentions the correct repository URL
    Tool: Bash
    Preconditions: DEPLOYMENT_GUIDE.md exists
    Steps:
      1. Run: grep -q "brmrs.github.io/CPT208_C2-3" DEPLOYMENT_GUIDE.md && echo "PASS" || echo "FAIL"
      2. Run: grep -q "BRMRs/CPT208_C2-3" DEPLOYMENT_GUIDE.md && echo "PASS" || echo "FAIL"
    Expected Result: Both repo name and expected URL are mentioned
    Evidence: .sisyphus/evidence/task-3-deploy-urls.txt
  ```

  **Commit**: YES
  - Message: `docs: add Chinese GitHub Pages deployment guide`
  - Files: `DEPLOYMENT_GUIDE.md`
  - Pre-commit: `test -f DEPLOYMENT_GUIDE.md`

- [x] 4. README Update

  **What to do**:
  - Update the existing `README.md` with a proper project overview
  - Content should include (in English):
    - Project title: "Go Climbers — CPT208 Group C2-3 Portfolio"
    - Brief project description: A climbing community mobile app for matchmaking climbing partners, booking coaches, and finding venues
    - Team members list (names only)
    - Link to the live GitHub Pages site: `https://brmrs.github.io/CPT208_C2-3/`
    - Brief tech stack note: "Static HTML/CSS site hosted on GitHub Pages"

  **Must NOT do**:
  - Do NOT write an excessive README — keep it concise (under 30 lines)
  - Do NOT include build instructions (there's no build step)
  - Do NOT add badges, CI status, or other extras
  - Do NOT write in Chinese (README is part of the public-facing project)

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Simple file update — replace one line with ~20 lines of markdown
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 2, 3)
  - **Blocks**: None
  - **Blocked By**: None (can start immediately)

  **References**:

  **Pattern References**:
  - `README.md` — Current content is just `# CPT208_C2-3` (1 line). Replace entirely.
  
  **Content References**:
  - `requirement.md:44-61` — Project theme and details to summarize in README
  - `requirement.md:17-42` — Team member names for the members list

  **Acceptance Criteria**:

  ```
  Scenario: README has proper content
    Tool: Bash
    Preconditions: Task started
    Steps:
      1. Run: grep -q "Go Climbers" README.md && echo "PASS" || echo "FAIL"
      2. Run: grep -q "brmrs.github.io" README.md && echo "PASS" || echo "FAIL"
      3. Run: grep -q "Rui Zheng" README.md && echo "PASS" || echo "FAIL"
      4. Run: wc -l < README.md — expect between 10 and 40
    Expected Result: README mentions project name, site URL, at least one member, and is 10-40 lines
    Evidence: .sisyphus/evidence/task-4-readme.txt
  ```

  **Commit**: YES
  - Message: `docs: update README with project overview`
  - Files: `README.md`
  - Pre-commit: `test -s README.md`

- [x] 5. Build Complete Website (HTML + CSS)

  **What to do**:
  This is the core task — create the complete single-page website with all content sections.

  **Create `index.html`** with these sections in order:
  1. **`<!DOCTYPE html>` + `<head>`**: HTML5 doctype, `<meta charset="UTF-8">`, `<meta name="viewport">` for responsiveness, `<title>Go Climbers — CPT208 C2-3</title>`, link to `style.css` (relative path: `style.css`)
  2. **`<header>` + `<nav>`**: Site title "Go Climbers" with subtitle "CPT208 Group C2-3 Portfolio". Nav bar with anchor links: Team, Personas, References, Technical Reflection. Nav should be sticky or prominent.
  3. **Hero section**: Brief project introduction — what Go Climbers is (mobile+wearable climbing app for matchmaking partners, booking coaches, finding venues). Target users: climbers, coaches, gym owners. Keep it to 2-3 sentences.
  4. **`<section id="team">`**: "Our Team" heading. Display 4 member cards in a responsive grid (2×2 on desktop, 1-column on mobile). Each card contains:
     - Profile photo: `<img src="assets/images/{name}.jpg" alt="Photo of {Full Name}">` — RELATIVE PATH, must have alt text
     - Full name (as heading)
     - Student ID
     - Brief introduction (copy EXACTLY from requirement.md — see References below)
     - Cards must handle varying text lengths gracefully (Member 1 has a long paragraph, Members 3-4 have one sentence)
  5. **`<section id="personas">`**: "User Personas" heading. Display 2 persona cards/sections. Read content from `.sisyphus/drafts/personas-content.md` (generated by Task 2) and convert to HTML. Each persona should have clear visual separation between Background (10%), Behaviors/Pain Points/Goals (80%), and Scenario (10%) sections. Use a distinct visual style from member cards (different background color or card design).
  6. **`<section id="references">`**: "AI References" heading. List all AI tools used in this project with formal citation format. At minimum:
     - `[1] Claude (Anthropic). Used for generating the website HTML/CSS code structure and content layout.`
     - `[2] Claude (Anthropic). Used for generating and refining user persona descriptions following the 10-80-10 framework.`
     - Add any other AI tools if applicable
  7. **`<section id="tech-reflection">`**: "Technical Reflection" heading. Brief section acknowledging AI was used to build this site. Include: what AI tools were used, how the output was verified (reviewing generated code, testing responsiveness, checking content accuracy), and a note that this section will be expanded as the project progresses. This is a COURSEWORK REQUIREMENT — the PDF mandates it when AI is used for coding.
  8. **`<footer>`**: Simple footer with "© 2026 Go Climbers — CPT208 Group C2-3"

  **Create `style.css`** with:
  - CSS reset (box-sizing, margin/padding reset)
  - Root variables for climbing-themed color scheme (suggestion: earthy tones — slate/stone/orange/green, or bold adventure colors — deep blue/orange/white)
  - Typography: clean sans-serif font stack (`system-ui, -apple-system, sans-serif`)
  - Responsive layout using CSS Grid or Flexbox:
    - Desktop (>1024px): Team cards in 2×2 grid, personas side by side
    - Tablet (768-1024px): Cards 2 per row, personas stacked
    - Mobile (<768px): Everything single column
  - Card styles: rounded corners, subtle shadow, padding. NO fixed height — use `min-height` or auto
  - Nav bar: horizontal links, clear active states via `:hover`
  - Persona sections: visually distinct from member cards (different background or border style)
  - Smooth scroll behavior: `html { scroll-behavior: smooth; }`
  - Image styling: member photos should be circular or rounded, consistent size (e.g., 150px × 150px with `object-fit: cover`)

  **CRITICAL RULES**:
  - ALL paths must be RELATIVE: `assets/images/rui.jpg` — NEVER `/assets/images/rui.jpg`
  - ALL visible text in English — zero Chinese characters
  - Zero JavaScript — `<script>` tags are FORBIDDEN
  - Zero external dependencies — no CDN links, no Google Fonts CDN, no Font Awesome CDN
  - Use semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
  - Include `alt` text on ALL images
  - Ensure `<meta charset="UTF-8">` is present (required for emoji: ⚖️, 🦁)

  **Must NOT do**:
  - Do NOT add JavaScript or `<script>` tags
  - Do NOT use CSS frameworks (Bootstrap, Tailwind) or CDN links
  - Do NOT use absolute paths — no leading `/` in src or href
  - Do NOT use Chinese text anywhere in HTML or CSS
  - Do NOT add portfolio sections beyond scope (no Motivation, User Journey, Evaluation pages)
  - Do NOT create additional HTML pages — single page only
  - Do NOT add dark mode toggle, animations, modals, or interactive features
  - Do NOT use fixed-height cards — text lengths vary dramatically between members
  - Do NOT modify files in `document/` folder
  - Do NOT generate or embed AI images — personas are text-only
  - Do NOT add excessive comments or over-abstract the CSS

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: This is fundamentally a visual/UI task — creating a professional, responsive, well-designed website. Visual-engineering agents excel at HTML/CSS design, layout, and aesthetics.
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Needed because the site must look professional and polished — this skill provides design sensibility for color schemes, typography, card layouts, and responsive behavior even without a design mockup
  - **Skills Evaluated but Omitted**:
    - `playwright`: Not needed during building — only for verification (Final Wave)
    - `dev-browser`: Not needed — we're creating files, not interacting with a browser

  **Parallelization**:
  - **Can Run In Parallel**: NO (single task in Wave 2)
  - **Parallel Group**: Wave 2 (solo)
  - **Blocks**: F1, F2, F3, F4
  - **Blocked By**: Task 1 (needs photos in `assets/images/`), Task 2 (needs persona content in `.sisyphus/drafts/personas-content.md`)

  **References** (CRITICAL — Executor has NO context from our interview):

  **Content References (member data — use EXACTLY)**:
  - `requirement.md:17-21` — Member 1: Rui Zheng, ID 2362065, photo `rui.jpg`, introduction: "My name is Rui Zheng, and I'm from Hangzhou, China — yes, the city with the beautiful West Lake, the home of Alibaba, and also... the place where I learned how to look calm while secretly panicking. In our team, I proudly hold the title of: Chief Last-Minute Expert! Now, you might be thinking: 'Last-Minute Expert? That sounds like a polite way of saying professional procrastinator.' And... yeah, fair point."
  - `requirement.md:23-29` — Member 2: Jiutian Chang, ID 2362412, photo `tian.jpg`, introduction: "Born in Zhengzhou. Libra ⚖️ | Chief Overthinking Officer. Powered by curiosity and an endless debate between 'this one' or 'that one'."
  - `requirement.md:31-35` — Member 3: Zhixian Zhou, ID 2360690, photo `xian.jpg`, introduction: "Leo 🦁 | Chief Late-Night Officer. Powered by pure curiosity and chronic sleep deprivation."
  - `requirement.md:37-42` — Member 4: Xinyi Xiao, ID 2363303, photo `xiao.jpg`, introduction: "Chief Anxiety Officer (CAO), Janja Garnbret self-shipper."

  **Content References (persona content)**:
  - `.sisyphus/drafts/personas-content.md` — Generated by Task 2. Read this file and convert the markdown content into HTML sections. Preserve the 10-80-10 structure visually.

  **Content References (project theme)**:
  - `requirement.md:44-61` — Go Climbers app description: mobile+wearable app for climbers & coaches, features include climbing matchmaking, coach booking, venue selection, social/competition, wearable data tracking (heart rate, climb count, calories), onsite use at climbing gyms/outdoor

  **Technical References (GitHub Pages constraints)**:
  - All `src` and `href` must be relative paths (e.g., `assets/images/rui.jpg`, NOT `/assets/images/rui.jpg`) — the site deploys to a subpath `/CPT208_C2-3/`
  - `.nojekyll` exists in root (created by Task 1) — confirms plain HTML processing
  - Target deployment URL: `https://brmrs.github.io/CPT208_C2-3/`

  **Acceptance Criteria**:

  ```
  Scenario: All required files created
    Tool: Bash
    Preconditions: Task started, Task 1 and Task 2 completed
    Steps:
      1. Run: test -f index.html && echo "PASS" || echo "FAIL"
      2. Run: test -f style.css && echo "PASS" || echo "FAIL"
      3. Run: test -s index.html && echo "PASS: not empty" || echo "FAIL: empty"
      4. Run: test -s style.css && echo "PASS: not empty" || echo "FAIL: empty"
    Expected Result: Both files exist and are non-empty
    Evidence: .sisyphus/evidence/task-5-files-exist.txt

  Scenario: All 4 member cards present with correct data
    Tool: Bash
    Preconditions: index.html created
    Steps:
      1. Run: grep -q "Rui Zheng" index.html && echo "PASS" || echo "FAIL: Rui Zheng missing"
      2. Run: grep -q "Jiutian Chang" index.html && echo "PASS" || echo "FAIL: Jiutian Chang missing"
      3. Run: grep -q "Zhixian Zhou" index.html && echo "PASS" || echo "FAIL: Zhixian Zhou missing"
      4. Run: grep -q "Xinyi Xiao" index.html && echo "PASS" || echo "FAIL: Xinyi Xiao missing"
      5. Run: grep -q "2362065" index.html && echo "PASS" || echo "FAIL: ID missing"
      6. Run: grep -q "2362412" index.html && echo "PASS" || echo "FAIL: ID missing"
      7. Run: grep -q "2360690" index.html && echo "PASS" || echo "FAIL: ID missing"
      8. Run: grep -q "2363303" index.html && echo "PASS" || echo "FAIL: ID missing"
      9. Run: grep -c 'assets/images/.*\.jpg' index.html — expect 4
    Expected Result: All 4 names, all 4 IDs, and 4 image references present
    Failure Indicators: Any name, ID, or image reference missing
    Evidence: .sisyphus/evidence/task-5-member-data.txt

  Scenario: Required sections exist with correct IDs
    Tool: Bash
    Preconditions: index.html created
    Steps:
      1. Run: grep -qi 'id="team"\|id="our-team"' index.html && echo "PASS" || echo "FAIL: team section missing"
      2. Run: grep -qi 'id="persona"\|id="user-persona"' index.html && echo "PASS" || echo "FAIL: persona section missing"
      3. Run: grep -qi 'id="reference"\|id="ai-reference"' index.html && echo "PASS" || echo "FAIL: reference section missing"
      4. Run: grep -qi 'id="tech-reflection"\|id="technical-reflection"\|id="reflection"' index.html && echo "PASS" || echo "FAIL: tech reflection missing"
      5. Run: grep -q '<nav' index.html && echo "PASS" || echo "FAIL: nav missing"
      6. Run: grep -q '<footer' index.html && echo "PASS" || echo "FAIL: footer missing"
    Expected Result: All sections present with identifiable IDs, nav and footer exist
    Evidence: .sisyphus/evidence/task-5-sections.txt

  Scenario: No forbidden patterns (Chinese, absolute paths, JavaScript)
    Tool: Bash
    Preconditions: index.html and style.css created
    Steps:
      1. Run: python3 -c "import re; [print(f'FAIL: Chinese in {f}') if re.search(r'[\u4e00-\u9fff]', open(f).read()) else print(f'PASS: {f}') for f in ['index.html','style.css']]"
      2. Run: grep -n 'src="/' index.html && echo "FAIL: absolute src" || echo "PASS: no absolute src"
      3. Run: grep -n 'href="/' index.html style.css && echo "FAIL: absolute href" || echo "PASS: no absolute href"
      4. Run: grep -in '<script' index.html && echo "FAIL: JavaScript found" || echo "PASS: no JavaScript"
      5. Run: grep -in 'bootstrap\|tailwind\|cdn\.' index.html style.css && echo "FAIL: external deps" || echo "PASS: no external deps"
    Expected Result: All checks PASS — no Chinese, no absolute paths, no JS, no external deps
    Evidence: .sisyphus/evidence/task-5-forbidden-patterns.txt

  Scenario: Responsive layout renders correctly at 3 breakpoints
    Tool: Playwright (playwright skill)
    Preconditions: index.html and style.css created, Task 1 completed (photos in assets/images/)
    Steps:
      1. Start local server: python3 -m http.server 8080 (in project root)
      2. Navigate to http://localhost:8080
      3. Set viewport to 1920×1080, wait for load, take full-page screenshot
      4. Verify: header visible, nav links present, 4 member cards visible with photos, persona sections visible
      5. Set viewport to 768×1024, take full-page screenshot
      6. Verify: content reflows, no horizontal overflow
      7. Set viewport to 375×812, take full-page screenshot
      8. Verify: single column layout, no horizontal scrollbar, all content accessible
      9. Stop the server
    Expected Result: Site looks professional at all 3 viewports, no overflow, all content visible
    Failure Indicators: Horizontal scrollbar, overlapping elements, broken images, missing sections
    Evidence: .sisyphus/evidence/task-5-desktop.png, .sisyphus/evidence/task-5-tablet.png, .sisyphus/evidence/task-5-mobile.png
  ```

  **Commit**: YES
  - Message: `feat: build team portfolio website with member cards and personas`
  - Files: `index.html`, `style.css`
  - Pre-commit: `grep -q "Rui Zheng" index.html && grep -q "Xinyi Xiao" index.html`

---

## Final Verification Wave

> 4 review agents run in PARALLEL. ALL must APPROVE. Rejection → fix → re-run.

- [x] F1. **Plan Compliance Audit** — `unspecified-high`

  **What to do**:
  - Read this plan end-to-end
  - For each "Must Have": verify implementation exists — read `index.html`, grep for content
  - For each "Must NOT Have": search for forbidden patterns (JavaScript, absolute paths, Chinese chars, etc.)
  - Check evidence files exist in `.sisyphus/evidence/`
  - Compare deliverables against plan: index.html, style.css, assets/images/*, .nojekyll, DEPLOYMENT_GUIDE.md, README.md

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
  - **Skills**: []

  **Parallelization**:
  - **Blocked By**: Task 5
  - **Blocks**: None

  **Acceptance Criteria**:
  - Output: `Must Have [N/N] | Must NOT Have [N/N] | Tasks [N/N] | VERDICT: APPROVE/REJECT`

  **Commit**: NO

- [x] F2. **Visual + Responsive QA** — `unspecified-high` + `playwright`

  **What to do**:
  - Start local HTTP server: `python3 -m http.server 8080` in project root
  - Open `http://localhost:8080` in Playwright browser
  - Screenshot at 3 viewports: 1920×1080, 768×1024, 375×812
  - Verify: hero visible, nav links work, 4 member cards with photos, 2 persona sections, references section, tech reflection section
  - Verify: no horizontal scrollbar at any viewport
  - Verify: all images load (no broken image icons)
  - Verify: emoji render correctly (⚖️, 🦁)
  - Save screenshots to `.sisyphus/evidence/final-qa/`

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
  - **Skills**: [`playwright`]

  **Parallelization**:
  - **Blocked By**: Task 5
  - **Blocks**: None

  **Acceptance Criteria**:
  - Output: `Viewports [3/3 pass] | Sections [N/N visible] | Images [4/4 loaded] | VERDICT: APPROVE/REJECT`

  **Commit**: NO

- [x] F3. **Content Integrity Check** — `quick`

  **What to do**:
  - Verify all 4 member names present: "Rui Zheng", "Jiutian Chang", "Zhixian Zhou", "Xinyi Xiao"
  - Verify all 4 student IDs present: "2362065", "2362412", "2360690", "2363303"
  - Verify all 4 photos referenced: "rui.jpg", "tian.jpg", "xian.jpg", "xiao.jpg"
  - Verify zero Chinese characters in index.html and style.css
  - Verify zero absolute paths in index.html and style.css
  - Verify `.nojekyll` file exists
  - Verify `DEPLOYMENT_GUIDE.md` exists and contains Chinese text
  - Verify sections exist via grep: id="team" or similar, id="personas" or similar, id="references" or similar

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Blocked By**: Task 5
  - **Blocks**: None

  **Acceptance Criteria**:
  - Output: `Members [4/4] | IDs [4/4] | Photos [4/4] | Chinese [0 found] | AbsPaths [0 found] | Sections [N/N] | VERDICT: APPROVE/REJECT`

  **Commit**: NO

- [x] F4. **Scope Fidelity Check** — `deep`

  **What to do**:
  - Read all changed/new files via git diff
  - Verify 1:1 match with plan — everything in spec was built, nothing beyond spec was built
  - Check "Must NOT do" compliance: no JS, no CSS framework imports, no build tools
  - Detect unaccounted files or content
  - Flag any scope creep (e.g., unnecessary animations, extra pages, unused CSS)

  **Recommended Agent Profile**:
  - **Category**: `deep`
  - **Skills**: []

  **Parallelization**:
  - **Blocked By**: Task 5
  - **Blocks**: None

  **Acceptance Criteria**:
  - Output: `Files [N expected/N actual] | Scope [CLEAN/N issues] | VERDICT: APPROVE/REJECT`

  **Commit**: NO

---

## Commit Strategy

| # | Message | Files | Pre-commit |
|---|---------|-------|------------|
| 1 | `chore: organize project structure and add .nojekyll` | `.nojekyll`, `assets/images/*.jpg`, delete root `*.jpg` | `test -f .nojekyll && test -f assets/images/rui.jpg` |
| 2 | `feat: build team portfolio website with member cards and personas` | `index.html`, `style.css` | `grep -q "Rui Zheng" index.html` |
| 3 | `docs: add Chinese GitHub Pages deployment guide` | `DEPLOYMENT_GUIDE.md` | `test -f DEPLOYMENT_GUIDE.md` |
| 4 | `docs: update README with project overview` | `README.md` | `test -s README.md` |

---

## Success Criteria

### Verification Commands
```bash
# All required files exist
test -f index.html && test -f style.css && test -f .nojekyll && test -f DEPLOYMENT_GUIDE.md && echo "PASS" || echo "FAIL"

# All photos in assets/images/
ls assets/images/rui.jpg assets/images/tian.jpg assets/images/xian.jpg assets/images/xiao.jpg && echo "PASS" || echo "FAIL"

# All member names present
for name in "Rui Zheng" "Jiutian Chang" "Zhixian Zhou" "Xinyi Xiao"; do grep -q "$name" index.html || echo "FAIL: $name missing"; done

# No Chinese in web files
python3 -c "import re; [print(f'FAIL: Chinese in {f}') if re.search(r'[\u4e00-\u9fff]', open(f).read()) else print(f'PASS: {f}') for f in ['index.html','style.css']]"

# No absolute paths
grep -rn 'src="/' index.html style.css && echo "FAIL" || echo "PASS: no absolute paths"

# No JavaScript
grep -in '<script' index.html && echo "FAIL: JS found" || echo "PASS: no JS"
```

### Final Checklist
- [ ] All "Must Have" sections present in index.html
- [ ] All "Must NOT Have" patterns absent from web files
- [ ] Responsive at 3 breakpoints (Playwright verified)
- [ ] All 4 member cards complete with correct data
- [ ] 2 personas follow 10-80-10 structure
- [ ] AI references section present with formal citations
- [ ] Technical reflection section present
- [ ] Chinese deployment guide exists and is accurate
- [ ] README updated with project overview
