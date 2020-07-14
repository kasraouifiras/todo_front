import React from 'react';
import ReactDOM from 'react-dom';
import TodoListItem from './todo_list_item/todo_list_item'
import './todo_list.css'
import TodoFooter from '../todo_footer/todo_footer';
class TodoList extends React.Component{
    
    
    render(){
        return(
            <div className="container">
                <div className="todo_list">
                    {this.props.todos.length>0 && this.props.todos.map((todo)=><TodoListItem key={todo.id} deleteTodo={this.props.deleteTodo} toggleTodo={this.props.toggleTodo} todo={todo} />)}
                </div>
                <TodoFooter completedItems={this.props.completedItems} itemsLeft={this.props.itemsLeft} clearCompleted={this.props.clearCompleted} filterTodos={this.props.filterTodos}/>
            </div>
        )
    }
}

export default TodoList;