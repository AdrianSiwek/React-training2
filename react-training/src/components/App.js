import React, { Component } from "react";
import "./App.css";
import SwitchButton from "./SwitchButton";

class App extends Component {
  state = {
    stoper: 0,
    active: false,
  };

  handleClick = () => {
    if (this.state.active) {
      clearInterval(this.idInterval);
    } else {
      this.idInterval = setInterval(() => this.addSeconds(), 1000);
    }
    this.setState({
      active: !this.state.active,
    });
  };

  addSeconds = () => {
    this.setState({
      stoper: this.state.stoper + 1,
    });
  };

  render() {
    return (
      <>
        <p>{this.state.stoper}</p>
        <SwitchButton click={this.handleClick} active={this.state.active} />
      </>
    );
  }
}

export default App;
