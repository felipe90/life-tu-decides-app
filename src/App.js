import React, { Component } from "react";
import screenTypes from "./const/screen-types";
import PagesContainer from "./components/PagesContainer/PagesContainer";

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
      <div>
        <PagesContainer currentPage={this.state.currentPage}></PagesContainer>
      </div>
    );
  }
}

export default App;
