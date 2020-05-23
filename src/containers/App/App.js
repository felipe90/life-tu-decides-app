import React, { Component } from "react";
import screenTypes from "../../constants/screen-types";
import PagesContainer from "../PagesContainer/PagesContainer";

class App extends Component {
  state = {
    screens: [
      {
        id: "start-page",
        type: screenTypes.ceroScreen,
        title: "LIFE",
        routes: [],
      },
    ],
    currentPage: {
      id: "start-page",
      type: screenTypes.pathSelectScreen,
      title: "LIFE",
      routes: [],
    },
  };

  render() {
    return (
      <PagesContainer currentPage={this.state.currentPage}></PagesContainer>
    );
  }
}

export default App;
