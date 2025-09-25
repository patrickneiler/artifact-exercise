'use client';

import React, { useState } from 'react';
import type { TodoItemShape } from '@/artifacts/todo/client';

type Props = {
  item: TodoItemShape;
  onToggle: () => void;
  onDelete: () => void;
  onEdit: (text: string) => void;
};

export default function TodoItem({ item, onToggle, onDelete, onEdit }: Props) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(item.text);

  return (
    <div className="flex items-center gap-2">
      <input
        aria-label={`toggle-${item.id}`}
        type="checkbox"
        checked={item.completed}
        onChange={onToggle}
      />
      {editing ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={() => {
            setEditing(false);
            if (text.trim() !== item.text) onEdit(text.trim());
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setEditing(false);
              if (text.trim() !== item.text) onEdit(text.trim());
            }
          }}
          className="flex-1 rounded border px-2 py-1"
        />
      ) : (
        <button
          type="button"
          onClick={() => setEditing(true)}
          className="flex-1 text-left"
        >
          <span
            style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
          >
            {item.text}
          </span>
        </button>
      )}
      <button
        type="button"
        onClick={onDelete}
        aria-label={`delete-${item.id}`}
        className="text-sm text-red-500"
      >
        Delete
      </button>
    </div>
  );
}
