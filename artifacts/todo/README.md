# Todo Artifact — Interview scaffold

This folder contains a minimal scaffold for the Todo List interview task. The goal is for the candidate to implement the feature logic inside the existing scaffold files. Keep the UI small and focus on correct state handling, persistence, and streaming reconciliation.

Where to implement (key files)

- `artifacts/todo/client.tsx` — Exports `todoArtifact` (an `Artifact` instance). Implement the `TodoContent` UI here:
  - Parse `content` (JSON) into an array of items.
  - Implement add, inline edit, toggle-complete, delete, and simple reorder (up/down).
  - Persist changes with `onSaveContent(JSON.stringify(items), false)`.
  - Handle `status === 'streaming'` to indicate streaming updates.
- `artifacts/todo/server.ts` — Server-side scaffold using `streamObject`. Implement schema validation / mapping to the artifact content format and streaming behavior if desired.
- `components/todo-item.tsx` — Small per-item component. You can extend or replace it when implementing inline edit behavior.

Minimal contract

- Input: artifact.create with a title and optional items.
- Mutations: addItem, updateItem, toggleItem, deleteItem, reorderItems.
- Persistence: saved in `artifact.content` as JSON string of items.

Acceptance criteria

- Artifact is registered and visible in the app (already registered).
- Candidate can add/edit/toggle/delete/reorder items and changes persist after reload.
- Streaming updates from the server should be mergeable into the list (optional for minimal task).

Quick run & test

1. Install dependencies: `pnpm install` (if needed).
2. Start dev server: `pnpm dev`.
3. In the app, open/create an artifact and choose the Todo artifact (registered by the scaffold).
4. Implement and test add/edit/toggle/delete flows and verify reload persistence.

Interview tips for the candidate

- Commit small, working chunks and explain your approach to streaming reconciliation.
- Prefer simple, typed state logic (a reducer for list operations is a good fit).
- If streaming is implemented, clearly describe how you handle merges/conflicts (merge-by-id, last-writer-wins, timestamps, etc.).

Good luck — the scaffold is intentionally minimal so you can demonstrate reasoning and engineering choices quickly.
