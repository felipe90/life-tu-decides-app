import React, { Component } from "react";
import "./StartPage.scss";
import PlayButton from "../../components/PlayButton/PlayButton";
import Radium from "radium";
// import Background from "../../../public/img/background_image.png";
// import Background from "/background_image.png";

class StartPage extends Component {
  startApp = () => {
    console.log(`routing`);
  };

  render() {
    const styles = {
      width: "100%",
      height: "400px",
      //   backgroundImage: `url(${Background})`,
    };

    return (
      <div style={styles} className="StartPage">
        <h1>{this.props.title}</h1>
        <PlayButton click={this.startApp}></PlayButton>
      </div>
    );
  }
}

export default Radium(StartPage);
