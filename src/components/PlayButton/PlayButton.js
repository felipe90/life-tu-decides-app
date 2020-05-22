import React, { Component } from "react";
import classes from "./PlayButton.module.scss";
import { Link } from "react-router-dom";

class PlayButton extends Component {
  state = {
    hover: false,
  };

  onMouseEnterHandler = () => {
    this.setState({
      hover: true,
    });
  };
  onMouseLeaveHandler = () => {
    this.setState({
      hover: false,
    });
  };

  render() {
    return (
      <Link to="/path-select">
        <button
          className={classes.PlayButton}
          onMouseEnter={this.onMouseEnterHandler}
          onMouseLeave={this.onMouseLeaveHandler}>
          <span className={classes.buttonLabel}>Dale Play</span>
          <div className={classes.buttonIcon}>
            {this.state.hover ? (
              <img src="/icons/play_active.svg" alt="play icon" />
            ) : (
              <img src="/icons/play.svg" alt="play icon" />
            )}
          </div>
        </button>
      </Link>
    );
  }
}

export default PlayButton;
