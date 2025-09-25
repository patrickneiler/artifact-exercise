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

## 📝 Interview Task: Todo List Artifact (scaffolded)

Goal (minimal):

- Implement a small Todo List artifact using the provided scaffold so candidates can demonstrate state management, persistence, and optional streaming handling.

Primary requirements (must-have):

- Add/create todo items, edit text inline, toggle complete/incomplete, and delete items.
- Persist the artifact's items in the artifact `content` field as JSON so they survive reloads (use the provided `onSaveContent` callback).
- Keep the UI minimal and keyboard-friendly; accessibility is a plus.

Stretch goals (optional):

- Optimistic local updates with server acknowledgement and simple reconciliation for remote updates.
- Reordering (drag-and-drop or simple up/down controls).
- Implement server-side generation/initialization using `artifacts/todo/server.ts` (uses `streamObject` as a scaffold).

Scaffold overview — where to implement

The repository includes a scaffold for the Todo artifact. Implementations should live inside these files:

- `artifacts/todo/client.tsx` — exports `todoArtifact` (an `Artifact` instance). Implement the `TodoContent` UI here:

  - Parse `content` (JSON) into a typed array of items.
  - Implement add, edit (inline), toggle, delete, and simple reorder.
  - Persist with `onSaveContent(JSON.stringify(items), false)`.
  - Use `status === 'streaming'` to indicate streaming updates when applicable.

- `artifacts/todo/server.ts` — scaffolded `todoDocumentHandler` using `streamObject`. Candidate can implement a schema and map generated results to the artifact content format. The scaffold currently streams partial deltas as `data-textDelta` and returns serialized items; update if you add a custom data type.

- `components/todo-item.tsx` — lightweight per-item UI (inline edit/toggle/delete); extend or replace as you implement inline editing.

- `components/artifact.tsx` — the artifact registry already registers `todoArtifact`. No changes needed here to make the artifact visible.

Recommended checklist for the candidate

- [ ] Parse and render items stored in `artifact.content`.
- [ ] Implement add, inline edit, toggle-complete, delete, and simple reorder controls.
- [ ] Persist changes using `onSaveContent` so changes survive reload.
- [ ] (Optional) Support streaming deltas from the server and merge changes by item id.

Interview hints

- Keep the UI minimal; show your reasoning about state shape and reconciliation.
- A reducer for list operations is recommended (add, update, toggle, delete, reorder).
- If you implement streaming, describe how you merge remote updates and how you would handle conflicts.

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
