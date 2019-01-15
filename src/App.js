import React, { Component } from "react";
import ToDo from "../src/components/toDo.js";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <ToDo />
          <ToDo />
        </ul>
      </div>
    );
  }
}

export default App;
