import {combineReducers} from 'redux';
import todos from './todos';
import todosFilter from './todosFilter';

const rootReducer = combineReducers({
    todos : todos,
    todosFilter : todosFilter
})

export default rootReducer;