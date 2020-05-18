import React, { Component } from "react";
import "./App.scss";
import screenTypes from "./const/screen-types";
import StartPage from "./pages/StartPage/StartPage";
import Radium from "radium";

class App extends Component {
  state = {
    currentScreen: {},
    screens: [
      {
        id: "start-page",
        type: screenTypes.ceroScreen,
        title: "LIFE",
        routes: [],
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <StartPage title={this.state.screens[0].title}></StartPage>
      </div>
    );
  }
}

export default Radium(App);
