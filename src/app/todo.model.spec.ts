import { Todo } from './todo.model';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo(1, "h", false)).toBeTruthy();
  });
});
