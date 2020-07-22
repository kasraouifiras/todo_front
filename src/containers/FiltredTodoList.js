import { connect } from "react-redux";
import {
  requestTodos,
  updateTodoRequest,
  deleteTodoRequest,
} from "../actions";
import { getFiltredTodos } from '../selectors';
import TodoList from "../components/todos/todo_list/todo_list";


const mapStateToProps = (state) => ({
  todos: getFiltredTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  requestTodos: () => dispatch(requestTodos()),
  updateTodo: (id,data,type) => dispatch(updateTodoRequest(id,data,type)),
  deleteTodo: (id) => dispatch(deleteTodoRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
