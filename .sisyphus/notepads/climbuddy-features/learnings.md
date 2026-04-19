
- BadgeGrid.tsx updated to show earned date for unlocked badges and Not yet earned for locked badges in a shared Modal. Uses import Modal from ../../layout/Modal. Build passes (vite).

- SessionHistory now owns a local Log Session flow when `addSession` is provided: simulated video upload, smartwatch fields, fatigue classification bar, and submit through `addSession` for immediate history updates.
- Session cards can safely become clickable buttons for detail view as long as layout style classes (`S.border`, `S.shadowSm`, `S.press`) are preserved; this keeps neobrutalist feedback consistent.
- Created CalendarSection component with custom monthly grid logic.
- Integrated CalendarSection into ProgressTab above BadgeGrid.
- Used mock data for testing calendar events.
- BoostTab and CourseDetailScreen implemented using Neobrutalist styling (S.border, S.shadow, S.press).

- Added a read-only Reviews tab to GymDetailScreen.tsx with data hooks prepared to filter venueReviews by gymId and compute per-dimension averages and overall rating. Next steps: implement the actual Reviews UI rendering inside the new tab, ensure empty state handling, and verify build passes with full UI, then commit a feature branch update.
