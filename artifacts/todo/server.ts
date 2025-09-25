import { myProvider } from '@/lib/ai/providers';
import { createDocumentHandler } from '@/lib/artifacts/server';
import { streamObject } from 'ai';
import { z } from 'zod';

// Server-side document handler scaffold for TODO artifact generation.
// Candidate should implement schema validation and mapping from the
// generated object to the artifact content format (JSON string).

// Schema for a single todo item. Candidate should expand this as needed.
export const TodoItemSchema = z.object({});

export const todoDocumentHandler = createDocumentHandler<'todo'>({
  kind: 'todo',
  onCreateDocument: async ({ title, dataStream }) => {
    // Example: use streamObject to request an object containing `items` array.
    // The schema below is a suggestion — candidates should adjust as needed.
    const { fullStream } = streamObject({
      model: myProvider.languageModel('artifact-model'),
      system: `Generate a todo list based on the title. Return a JSON object with an 'items' array.`,
      prompt: title,
      schema: z.object({
        items: z.array(TodoItemSchema),
      }),
    });

    let draftItems: any[] = [];

    for await (const delta of fullStream) {
      if (delta.type === 'object') {
        const { object } = delta as any;
        if (object?.items) {
          // Write partial updates to the UI stream so the client can render streaming parts.
          // Use a custom data type so the client can interpret Todo-specific deltas.
          dataStream.write({
            type: 'data-textDelta',
            data: JSON.stringify(object.items),
            transient: true,
          });
          draftItems = object.items;
        }
      }
    }

    // Finalize by writing the complete items to the stream and returning the serialized content.
    dataStream.write({
      type: 'data-textDelta',
      data: JSON.stringify(draftItems),
      transient: true,
    });

    return JSON.stringify(draftItems || []);
  },
  onUpdateDocument: async ({ document, description, dataStream }) => {
    // Candidate: implement update logic similar to onCreateDocument using `description`.
    // For now, return the existing content unchanged.
    return document.content ?? '';
  },
});
