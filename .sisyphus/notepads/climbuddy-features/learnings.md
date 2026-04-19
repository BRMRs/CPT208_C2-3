
- BadgeGrid.tsx updated to show earned date for unlocked badges and Not yet earned for locked badges in a shared Modal. Uses import Modal from ../../layout/Modal. Build passes (vite).

- SessionHistory now owns a local Log Session flow when `addSession` is provided: simulated video upload, smartwatch fields, fatigue classification bar, and submit through `addSession` for immediate history updates.
- Session cards can safely become clickable buttons for detail view as long as layout style classes (`S.border`, `S.shadowSm`, `S.press`) are preserved; this keeps neobrutalist feedback consistent.
