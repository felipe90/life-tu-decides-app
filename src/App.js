import React, { Component } from "react";
import "./App.scss";
import screenTypes from "./const/screen-types";
import StartPage from "./pages/StartPage/StartPage";
import Radium from "radium";

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
    console.log(`route to ${this.state.screens[0].type} path screen`);
  };

  render() {
    return (
      <div className="App">
        <StartPage title={this.state.screens[0].type}></StartPage>
      </div>
    );
  }
}

export default Radium(App);
