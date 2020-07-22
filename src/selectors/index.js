import { createSelector } from "reselect";

const getTodosFilter = (state) => state.todosFilter;
const getTodos = (state) => state.todos;

export const getFiltredTodos = createSelector(
  [getTodosFilter, getTodos],
  (todosFilter, todos) => {
    switch (todosFilter) {
      case "all":
        return todos;
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "active":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  }
);

