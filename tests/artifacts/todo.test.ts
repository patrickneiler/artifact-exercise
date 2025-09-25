import { createTodoArtifact } from '@/artifacts/todo/server';

describe('todo artifact server helper', () => {
  it('creates a todo artifact shape', () => {
    const todo = createTodoArtifact('My list');
    expect(todo.title).toBe('My list');
    expect(Array.isArray(todo.items)).toBe(true);
  });
});
