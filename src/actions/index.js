import * as todosServices from "../services/todos";

export const getTodos = (todos) => ({
  type: "GET_TODOS",
  todos: todos,
});

export const requestTodos = () => {
  return (dispatch) => {
    return todosServices
      .showLoggedUserTodos()
      .then((res) => dispatch(getTodos(res.data)))
      .catch((error) => dispatch(getTodos([])));
  };
};

export const addTodo = (todo) => ({
  type: "ADD_TODO",
  todo,
});

export const addTodoRequest = (todo) => (dispatch) => {
  return todosServices.addTodo(todo).then(
    (res) => {
      dispatch(addTodo(res.data));
    },
    (error) => {
      console.log(error);
    }
  );
};

export const toggleTodo = (id, completed) => ({
  type: "TOGGLE_TODO",
  id,
  completed,
});

export const pinTodo = (id, pinned) => ({
  type: "PIN_TODO",
  id,
  pinned,
});

export const changeTodoColor = (id, color) => ({
  type: "CHANGE_TODO_COLOR",
  id,
  color,
});

export const updateTodoRequest = (id, data, type) => (dispatch) => {
  return todosServices.updateTodo(id, data).then(
    (res) => {
      switch (type) {
        case "toggle":{
          dispatch(toggleTodo(id, data.completed));
          break;
        }
        case "pin":{
          dispatch(pinTodo(id, data.pinned));
          break;
        }
        case "color":{
          dispatch(changeTodoColor(id, data.color));
          break;
        } 
        default:
          console.log("");
      }
    },
    (error) => {
      console.log(error);
    }
  );
};

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  id,
});

export const deleteTodoRequest = (id) => (dispatch) => {
  return todosServices.deleteTodo(id).then(
    (res) => {
      dispatch(deleteTodo(id));
    },
    (error) => {
      console.log(error);
    }
  );
};

export const clearCompletedTodos = () => ({
  type: "CLEAR_COMPLETED"
});

export const clearCompletedTodosRequest = () => (dispatch) => {
  return todosServices.clearCompleted().then(
    (res) => {
      dispatch(clearCompletedTodos());
    },
    (error) => {
      console.log(error);
    }
  );
};

export const changeFilter = (filter) => ({
  type: "SET_TODOS_FILTER",
  filter,
});
