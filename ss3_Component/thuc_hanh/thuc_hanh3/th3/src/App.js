import { Component } from "react";
import Hello from "./Hello.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black",
      number: 0,
      display: true,
    };
  }

  delete = () => {
    this.setState({ display: false });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "pink" });
    }, 500);
  }

  increase = () => {
    this.setState({ number: this.state.number + 1 });
  };
  decrease = () => {
    this.setState({ number: this.state.number - 1 });
  };

  render() {
    let comp;
    if (this.state.display) {
      comp = <Hello />;
    }
    return (
      <div>
        <div
          style={{
            textAlign: "center",
            padding: 30,
            backgroundColor: this.state.color,
          }}
        >
          <button onClick={this.decrease}>Decrease</button>
          <span style={{ padding: 10 }}>{this.state.number}</span>
          <button onClick={this.increase}>Increase</button>
        </div>
        <div style={{ textAlign: "center" }}>
          {<Hello />}
          <button onClick={this.delete}>Delete the component</button>
        </div>
      </div>
    );
  }
}

export default App;
