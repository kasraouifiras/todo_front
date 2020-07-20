import React from "react";

import { Form, FormGroup, FormControl } from "react-bootstrap";


class AddTodo extends React.Component {
  
  render() {
    return (
      <div>
        <Form onSubmit={e => e.preventDefault()}>
          <FormGroup>
            <FormControl onKeyUp={(event)=>this.addTodo(event)} type="text" placeholder="What needs to be done ?" />
          </FormGroup>
        </Form>
      </div>
    );
  }

  addTodo(event) {
    if (event.keyCode === 13) {
          const todo = {  
            name: event.target.value,
        }
        this.props.addTodo(todo)
        event.target.value = ""
        
    }
  }
}

export default AddTodo;
