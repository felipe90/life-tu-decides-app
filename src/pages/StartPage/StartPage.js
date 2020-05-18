import React, { Component } from "react";
import "./StartPage.scss";
import PlayButton from "../../components/PlayButton/PlayButton";
import Radium from "radium";

class StartPage extends Component {
  startApp = () => {
    console.log(`routing`);
  };

  render() {
    return (
      <div className="StartPage">
        <h1 className="title">{this.props.title}</h1>
        <PlayButton click={this.startApp}></PlayButton>
      </div>
    );
  }
}

export default Radium(StartPage);
