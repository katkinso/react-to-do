import React, { Component } from "react";

class ToDo extends Component {
  render() {
    return (
      <li>
        <input type="checkbox" checked={this.props.isCompleted} onChange={this.props.toggleComplete} />
        <span>{this.props.description}</span>
        <button type="button" value="delete" onClick={this.props.deleteTodo}>DELETE</button>
      </li>
    );
  }
}

export default ToDo;
