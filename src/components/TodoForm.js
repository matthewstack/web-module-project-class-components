import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  handleChanges = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    this.props.handleAddTodo(this.state.input);
    this.setState({
      ...this.state,

      input: "",
    });
  };

  render() {
    return (
      <form>
        <input
          onChange={this.handleChanges}
          type="text"
          name="todo"
          placeholder="Add Todo..."
          value={this.state.input}
        />
        <button onClick={this.handleClick}>Add ToDo</button>
      </form>
    );
  }
}

export default TodoForm;
