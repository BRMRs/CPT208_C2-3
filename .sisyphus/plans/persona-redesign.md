# Persona Redesign — Rich Infographic Cards

## TL;DR
> Replace the plain-text persona sections with rich, magazine-style infographic cards matching the user_persona_example.png reference. 3-column layout with profile cards, personality sliders, motivation progress bars, colored tags, and structured data.

---

## TODOs

- [x] 1. Replace persona section in index.html

  **What to do**:
  Replace the entire `<section id="personas">...</section>` block in `/Users/rui/CPT208_C2-3/index.html` (lines 66-156) with the new rich persona HTML. The old section uses classes `.persona-card`, `.persona-header`, `.emoji-avatar`, `.persona-section`. The new section uses `.persona-card-rich`, `.persona-banner`, `.persona-body`, `.persona-left/center/right`, `.persona-avatar`, `.persona-profile`, `.persona-personality`, `.personality-slider`, `.persona-tags`, `.tag`, `.persona-goals`, `.persona-frustrations`, `.persona-bio`, `.persona-bars`, `.bar-item`, `.bar-track`, `.bar-fill`.

  Read `index.html` first. The old persona section starts with `<section id="personas">` and ends with `</section>` right before `<section id="references">`.

  The new HTML includes two persona cards:
  - Emma Chen (28, Marketing Coordinator, Beginner climber) with personality sliders, goals, frustrations, bio, motivation/tech/channels bars
  - Marcus Li (38, Certified Coach, Expert) with same structure

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Must NOT do**:
  - Do NOT touch anything outside the personas section
  - Do NOT add JavaScript
  - Do NOT use Chinese characters
  - Do NOT use absolute paths

  **Acceptance Criteria**:
  ```
  grep -q "persona-card-rich" index.html && echo "PASS" || echo "FAIL"
  grep -q "persona-banner" index.html && echo "PASS" || echo "FAIL"
  grep -q "personality-slider" index.html && echo "PASS" || echo "FAIL"
  grep -q "bar-fill" index.html && echo "PASS" || echo "FAIL"
  grep -q "Emma Chen" index.html && echo "PASS" || echo "FAIL"
  grep -q "Marcus Li" index.html && echo "PASS" || echo "FAIL"
  ```

  **Commit**: NO (group with task 2 and 3)

- [x] 2. Replace persona CSS in style.css

  **What to do**:
  Replace all old persona CSS in `/Users/rui/CPT208_C2-3/style.css`. The old block runs from `.persona-card {` through `.persona-section li {` (approximately lines 195-268), including `.emoji-avatar` styles. Replace with new rich persona CSS including 3-column grid, personality sliders, progress bars, tags, and responsive breakpoints at 960px and 640px.

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Commit**: NO (group with task 1 and 3)

- [x] 3. Clean old persona overrides from 768px media query

  **What to do**:
  In the existing `@media (max-width: 768px)` block in style.css, remove the `.persona-header` and `.persona-card` override rules. Keep `header h1`, `h2`, and `nav ul` rules intact.

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Acceptance Criteria**:
  ```
  grep -q "persona-card-rich" style.css && echo "PASS: new CSS" || echo "FAIL"
  grep -q "persona-card {" style.css && echo "FAIL: old CSS remains" || echo "PASS: old CSS removed"
  ```

  **Commit**: YES
  - Message: `feat: redesign personas as rich infographic-style cards with sliders and bars`
  - Files: `index.html`, `style.css`
