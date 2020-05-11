import React, { Component } from "react";
import "./App.scss";
import screenTypes from "./const/screen-types";

class App extends Component {
  state = {
    screens: [
      {
        id: "start-page",
        type: screenTypes.ceroScreen,
        title: "Hello LIFE app",
        routes: [],
      },
    ],
  };

  startApp = () => {
    // this.setState({ title: "new title" });
    console.log("route to " + this.state.screens[0].type + " path screen");
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.screens[0].title}</h1>
        <button onClick={this.startApp}>Tu decides</button>
      </div>
    );
  }
}

export default App;
