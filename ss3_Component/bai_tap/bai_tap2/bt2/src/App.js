import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      item: event.target.value,
    });
  };

  handleAddItem = () => {
    if (
      this.state.list.indexOf(this.state.item) === -1 &&
      this.state.item !== ""
    ) {
      this.setState({
        list: [...this.state.list, this.state.item],
        item: "",
      });
    }
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Todo List</h1>
        <input
          type="text"
          value={this.state.item}
          onChange={this.handleChange}
        />
        <button onClick={this.handleAddItem}>ADD</button>
        {this.state.list.map((todo, index) => (
          <table key={index}>
            <tbody>
              <tr>
                <td>{index + 1}:</td>
                <td>{todo}</td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    );
  }
}

export default App;
