import * as _ from "lodash-es";
const todos = (state = [], action) => {
  switch (action.type) {
    case "GET_TODOS": {
      return action.todos;
    }
    case "ADD_TODO": {
      return [action.todo, ...state];
    }
    case "TOGGLE_TODO": {
      let newState = [...state];
      let updateIdx = _.findIndex(newState, { id: action.id });
      newState[updateIdx].completed = action.completed;
      return newState;
    }
    case "DELETE_TODO": {
      let newState = [...state];
      let deleteIdx = _.findIndex(newState, { id: action.id });
      newState.splice(deleteIdx,1);
      return newState;
    }
    case "PIN_TODO": {
      let newState = [...state];
      let updateIdx = _.findIndex(newState, { id: action.id });
      newState[updateIdx].pinned = action.pinned;
      return newState;
    }
    case "CHANGE_TODO_COLOR": {
      let newState = [...state];
      let updatedIdx = _.findIndex(newState, { id: action.id });
      newState[updatedIdx].color = action.color;
      return newState;
    }
    case "CLEAR_COMPLETED": {
      let newState = state.filter((todo)=>!todo.completed)
      return newState;
    }
    default:
      return state;
  }
};

export default todos;
