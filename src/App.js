import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./App.css";
const todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
    };
  }

  handleToggle = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => {
        return !todo.completed;
      }),
    });
  };

  handleAddTodo = (todo) => {
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo],
    });
  };

  handleToggleTodo = (todo) => {
    this.setState({
      todos: this.state.todos.map((task) => {
        if (task.id === todo.id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      }),
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          handleToggleTodo={this.handleToggleTodo}
          todos={this.state.todos}
        />
        <TodoForm handleAddTodo={this.handleAddTodo} />
        <button onClick={this.handleToggle}>Clear</button>
      </div>
    );
  }
}

export default App;
