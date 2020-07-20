import { connect } from "react-redux";
import {
  requestTodos,
  updateTodoRequest,
  deleteTodoRequest,
} from "../actions";

import TodoList from "../components/todos/todo_list/todo_list";


const getFiltredTodos = (todos, filter) => {
  switch (filter) {
    case "all":
      return todos;
    case "completed":
      return todos.filter((todo) => todo.completed);
    case "active":
      return todos.filter((todo) => !todo.completed);
    default:
      return todos;
  }
};

const mapStateToProps = (state) => ({
  todos: getFiltredTodos(state.todos, state.todosFilter),
});

const mapDispatchToProps = (dispatch) => ({
  requestTodos: () => dispatch(requestTodos()),
  updateTodo: (id,data,type) => dispatch(updateTodoRequest(id,data,type)),
  deleteTodo: (id) => dispatch(deleteTodoRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
