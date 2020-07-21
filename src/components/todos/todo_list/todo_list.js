import React from 'react';
import TodoListItem from './todo_list_item/todo_list_item'


import './todo_list.css'

class TodoList extends React.Component{
    
    componentDidMount(){
        this.props.requestTodos()
    }

    componentWillUnmount(){
        
    }

    render(){
        let pinnedTodos=this.props.todos.filter((todo) => todo.pinned)
        let todos = this.props.todos.filter((todo) => !todo.pinned)
        if(pinnedTodos.length===0 && todos.length===0){
            return (<div><div className="todo_list"><p className="text-center">You have no todos</p></div></div>)
        }else if(pinnedTodos.length>0 && todos.length===0){
            return (<div>
            <div className="todo_list">
            <h3 className="text-center">Pinned Todos</h3>
            {pinnedTodos.map((todo)=><TodoListItem key={todo.id} deleteTodo={this.props.deleteTodo} updateTodo={this.props.updateTodo} todo={todo} />)}
            </div></div>)
        }else if(pinnedTodos.length===0 && todos.length>0){
            return (
                <div>
            <div className="todo_list">
            <h3 className="text-center">All Todos</h3>
            {todos.map((todo)=><TodoListItem key={todo.id} deleteTodo={this.props.deleteTodo} updateTodo={this.props.updateTodo} todo={todo} />)}
            </div></div>)
        }else if(pinnedTodos.length>0 && todos.length>0){
            return (<div>
                <div className="todo_list">
                <h3 className="text-center">Pinned Todos</h3>
                {pinnedTodos.map((todo)=><TodoListItem key={todo.id} deleteTodo={this.props.deleteTodo} updateTodo={this.props.updateTodo} todo={todo} />)}
                <h3 className="text-center">Other Todos</h3>
                {todos.map((todo)=><TodoListItem key={todo.id} deleteTodo={this.props.deleteTodo} updateTodo={this.props.updateTodo} todo={todo} />)}
                </div></div>)
        }
    }
}

export default TodoList;