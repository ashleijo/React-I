import React, { Component } from 'react';
import Todo from './Todo.js';

class TodoList extends Component {

  constructor() {
    super();
    let toArr = JSON.parse(localStorage.getItem('blah'));
    this.state = {
      todos: toArr,
      newTodo: '',
    };
  }

  input = (event) => {
    this.setState({ newTodo: event.target.value});
  } // uses value from input box to set state with newTodo string.

  add = (event) => {
    event.preventDefault(); // allows propagation
    const todoList = this.state.todos;
    if (this.state.newTodo) {
      todoList.push(this.state.newTodo);
      localStorage.setItem('blah', JSON.stringify(todoList))
    } else {
      alert("catch!");
    }
    // reset
    this.setState({
      newTodo: "",
      todos: todoList
    });
  }

  render() {
    return (
      <div>
        {this.state.todos.map((todo, i) => <Todo key={i} index={i} todo={todo} />)}
        <form>
          <input onChange={this.input} placeholder="add something" value={this.state.newTodo}/>
          <button onClick={this.add}>Add</button>
        </form>
      </div>
    );
  }
}
export default TodoList;
