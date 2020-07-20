import { connect } from "react-redux";
import { addTodoRequest } from "../actions";

import AddTodo from "../components/todos/add_todo/add_todo";

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodoRequest(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
