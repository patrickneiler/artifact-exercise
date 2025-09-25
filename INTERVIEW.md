# Candidate Coding Session Guide (Live Share)

Welcome! This repository is set up for your technical interview and practical coding task. Instead of launching your own Codespace, you'll join a **Live Share session** hosted by the interviewer. This guide walks you through the process, outlines expectations, and provides tips for a smooth experience.

---

## 🚀 Joining the Live Share Session

- At the scheduled time, your interviewer will send you a **Live Share invite link**.
- Click the link to open it in VS Code.
- Accept any prompts to install or enable the Live Share extension.
- You'll be connected to the interviewer's environment, with access to the full codebase and terminal (if enabled).

---

## 🛠 What You'll Be Doing

You will be asked to implement a feature or extend an artifact (see below for ideas). The goal is to demonstrate your technical understanding, approach to error handling, and ability to provide user feedback. You are encouraged to integrate agentic reasoning or real-time UI updates as appropriate.

After you complete your implementation, you'll walk through your code and discuss your approach, including alternative solutions and scalability considerations.

---

## 🏗️ Core Implementation

Core implementation of artifacts typically involves:

- Creating a new artifact type in the [`artifacts/`](./artifacts/) directory (e.g., [`artifacts/recipe/client.tsx`](./artifacts/recipe/client.tsx)).
- Defining artifact UI and streaming logic in a React component.
- Registering the artifact type in the artifact system (see [`components/create-artifact.tsx`](./components/create-artifact.tsx)).
- Managing artifact state and updates using hooks (see [`hooks/use-artifact.ts`](./hooks/use-artifact.ts)).
- Integrating artifact actions and real-time updates for a responsive user experience.
- Optionally, adding server-side logic for artifact creation or processing in [`lib/artifacts/server.ts`](./lib/artifacts/server.ts).

_See the interview scenario for more details on each artifact type and refer to the project files for examples of artifact implementation._


---

## 📝 Interview Task: Todo List Artifact


What to implement (minimal):

- Add a new artifact kind `todo` under `artifacts/todo/client.tsx` that provides a small React UI for a todo list.
- Allow creating, adding, editing, toggling complete, and deleting items.
- Persist the artifact's items in the artifact `content` field (JSON) so they survive page reloads.
- Register the artifact in the artifact registry so it appears in the app.

Stretch goals (optional):

- Implement optimistic updates and a simple reconciliation for incoming remote updates.
- Add drag-and-drop reordering or up/down controls.
- Add server-side helper in `artifacts/todo/server.ts` to create an initial todo artifact shape.

How we'll evaluate it:

- The artifact can be opened from the UI (registered) and displays a working todo list.
- Basic operations (add/edit/toggle/delete) work and persist across reloads.
- The code is clear, typed, and integrates with `hooks/use-artifact.ts`.

Notes for the interviewer/candidate:

- Keep the UI minimal — focus on correctness and clear state handling.
- Use existing hooks and patterns in the repo (see `hooks/use-artifact.ts`).
- Commit early and often; show how you'd handle streaming or conflicts if time permits.

## Scaffold status & where to implement

To speed up the interview, this repository now contains a minimal scaffold for the Todo artifact. The candidate should implement feature logic inside the scaffold files listed below. The scaffolds include comments and TODOs describing the expected work.

Key scaffold files:

- `artifacts/todo/client.tsx` — Exports `todoArtifact` (an `Artifact` instance). The `content` component (`TodoContent`) is a scaffold; implement the UI here. Tasks: parse `artifact.content` JSON into items, provide add/edit/toggle/delete/reorder UI, call `onSaveContent(JSON.stringify(items), false)` to persist, and handle optimistic updates.
- `artifacts/todo/server.ts` — `todoDocumentHandler` scaffold using `streamObject`. Candidate should implement schema validation and mapping from the generated object to the artifact content. The handler currently streams partial deltas as `data-textDelta` and returns serialized items; update as needed.
- `components/todo-item.tsx` — Small per-item component scaffold (inline edit, toggle, delete). Candidate may extend or replace.
- `components/artifact.tsx` — The artifact registry already imports and registers the `todoArtifact`. No change required here; candidate can focus on the artifact content and server handler.
- `tests/artifacts/todo.test.ts` — Minimal test scaffold (optional to extend).

Recommended task checklist (for the candidate)

- [ ] Implement parsing/serialization of items via `artifact.content` (JSON).
- [ ] Implement add, inline edit, toggle-complete, delete, and simple reorder (up/down) controls.
- [ ] Persist changes with `onSaveContent` so changes survive reloads.
- [ ] Handle streaming deltas from the server: merge partial updates and surface a non-blocking "streaming" state in the UI.
- [ ] Add minimal unit tests for core list transformation / reducer logic (happy path + 1 edge case).

Evaluation & acceptance criteria

- The artifact is visible from the app (registered) and opens correctly.
- Basic operations (add/edit/toggle/delete/reorder) work and persist across reloads.
- Streaming-generated updates from the server merge into the UI without data loss.
- Code is typed, readable, and uses `hooks/use-artifact.ts` patterns.

How to run & test locally

- Install (if needed): `pnpm install`
- Start the dev server: `pnpm dev`
- In the running app: open the artifact panel, create/open a Todo artifact (it is registered). Perform add/edit/toggle/delete and reload to verify persistence.

Interview tips

- Keep the UI minimal and focus on robust state handling and error feedback.
- If you implement streaming behavior, explain your reconciliation strategy (timestamps, last-writer-wins, merge-by-id, etc.).
- Commit small, working chunks and explain trade-offs.

---

## 🧩 Tips for Success

- **No Local Setup Needed:** All dependencies and environment variables are managed by the host. You can focus solely on the code.
- **Live Collaboration:** Ask questions, pair program, and discuss your thought process in real time.
- **Streaming UI:** The app supports real-time updates—showcase your approach to handling streaming data and UI responsiveness.
- **Commit Often:** Use Git in the shared environment to save your work as you go.
- **Ask for Clarification:** Don’t hesitate to clarify requirements or constraints at any time.

---

## 🛡 Security & Privacy

- All sensitive credentials are managed securely on the host machine.
- Your work will be saved and reviewed after the session.

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Chat SDK by Vercel](https://chat-sdk.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vercel AI SDK](https://sdk.vercel.ai/docs)

---

Good luck! We look forward to seeing your approach and problem-solving skills in action.
