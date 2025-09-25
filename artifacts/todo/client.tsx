'use client';

import { Artifact } from '@/components/create-artifact';
import type { DataUIPart } from 'ai';
import type { UIArtifact } from '@/components/artifact';
import React from 'react';

type Metadata = any;

// Minimal types for the todo item. Candidate should extend as needed.
export type TodoItemShape = {
  id: string;
  text: string;
  completed: boolean;
  order: number;
};

/**
 * TodoContent (scaffold)
 * - Candidate should implement: parsing `content` (JSON) to items,
 *   UI for add/edit/toggle/delete, optimistic updates, and streaming
 *   reconciliation when `onStreamPart` delivers generated object parts.
 */
function TodoContent({
  title,
  content,
  onSaveContent,
  isCurrentVersion,
  currentVersionIndex,
  status,
}: {
  title: string;
  content: string;
  onSaveContent: (text: string, debounce: boolean) => void;
  isCurrentVersion: boolean;
  currentVersionIndex: number;
  status: 'streaming' | 'idle';
}) {
  // TODO: Implement the todo list UI here.
  // - Parse `content` JSON -> TodoItemShape[]
  // - Provide input to add items, inline edit, toggle complete, delete, reorder
  // - Use `onSaveContent(JSON.stringify(items), false)` to persist changes
  // - Show streaming state when status === 'streaming'

  return (
    <div className="p-4">
      <h3 className="font-semibold">{title || 'Todo List'}</h3>
      <div className="mt-4 text-sm text-muted-foreground">
        Scaffold: implement the todo UI and streaming handling.
      </div>
    </div>
  );
}

export const todoArtifact = new Artifact<'todo', Metadata>({
  kind: 'todo',
  description: 'Scaffolded Todo List artifact (candidate task)',
  initialize: async () => {
    // Optional initialize hook. Candidate can set metadata here.
  },
  onStreamPart: ({
    setArtifact,
    streamPart,
  }: {
    setArtifact: (fn: (a: UIArtifact) => UIArtifact) => void;
    streamPart: DataUIPart<any>;
  }) => {
    // TODO: Handle incoming stream parts from server-side generation.
    // Example implementation guidance for candidate:
    // - if streamPart.type === 'object' and streamPart.object contains `items`,
    //   merge the items into the artifact.content JSON and set status to 'streaming'.
    // - when streaming finishes (or when an ack is received), set status to 'idle'.
  },
  content: ({
    title,
    content,
    onSaveContent,
    isCurrentVersion,
    currentVersionIndex,
    status,
  }) => {
    return (
      <TodoContent
        title={title}
        content={content}
        onSaveContent={onSaveContent}
        isCurrentVersion={isCurrentVersion}
        currentVersionIndex={currentVersionIndex}
        status={status}
      />
    );
  },
  actions: [],
  toolbar: [],
});
