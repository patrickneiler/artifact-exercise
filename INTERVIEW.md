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

## 💡 Artifact & Feature Ideas

You may be asked to implement or extend one of the following concepts:

- **Visual Recipe Generator**: Text-to-recipe with real-time streaming updates.
- **Code Refactoring Assistant**: Real-time code analysis and suggestions.
- **Vacation Planner**: Dynamic itinerary generator with interactive maps.
- **Music Composition Studio**: AI-assisted music creation with live previews.
- **3D Character Designer**: Text-to-3D model generator with customization.

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
