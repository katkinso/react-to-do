import React, { Component } from "react";
import ToDo from "../src/components/toDo.js";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: "Walk the cat", isCompleted: true },
        { description: "Throw the dishes away", isCompleted: false },
        { description: "Buy new dishes", isCompleted: false }
      ],
      newTodoDescription: ""
    };
  }

  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;

    this.setState({
      todos: todos
    });
  }

  //The standard approach to using values from text inputs is to store the value in state
  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value });
  }

  //for some UNKNOWN reason you do this bit in handleSubmit of form. Why not just do it in the handleChange(e)?
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newTodoDescription) {
      return;
    }
    const newTodo = {
      description: this.state.newTodoDescription,
      isCompleted: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      newTodoDescription: ""
    });
  }

  deleteTodo(index) {
    const todoToDelete = this.state.todos[index];
    const filteredTodos = this.state.todos.filter(
      todo => todo !== todoToDelete
    );
    this.setState({
      todos: filteredTodos
    });
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.todos.map((todo, index) => (
            <ToDo
              key={index}
              description={todo.description}
              isCompleted={todo.isCompleted}
              toggleComplete={() => this.toggleComplete(index)}
              deleteTodo={() => this.deleteTodo(index)}
            />
          ))}
        </ul>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            value={this.state.newTodoDescription}
            onChange={e => this.handleChange(e)}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default App;
