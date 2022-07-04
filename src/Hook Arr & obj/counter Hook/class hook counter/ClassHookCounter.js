import { Component } from "react";

class CHookCounter extends Component {
  state = {
    count: 0,
  };

  oneHandler = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  fiveHandler = () => {
    this.setState((prv) => {
      return {
        count: prv.count + 5,
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.oneHandler}> click for ++</button>
        <button onClick={this.fiveHandler}> click for 1+</button>

        <p> {this.state.count} </p>
      </div>
    );
  }
}

export default CHookCounter;
