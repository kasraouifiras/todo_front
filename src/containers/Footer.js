import { connect } from "react-redux";
import { changeFilter, clearCompletedTodosRequest } from "../actions";

import TodoFooter from "../components/todos/todo_footer/todo_footer";

const mapStateToProps = (state) => ({
  filter: state.todosFilter,
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (filter) => dispatch(changeFilter(filter)),
  clearCompleted : () => dispatch(clearCompletedTodosRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoFooter);
