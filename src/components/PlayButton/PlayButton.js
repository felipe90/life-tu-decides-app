import React, { Component } from "react";
import "./PlayButton.scss";
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
          className="PlayButton"
          onMouseEnter={this.onMouseEnterHandler}
          onMouseLeave={this.onMouseLeaveHandler}>
          <span className="button-label">Dale Play</span>
          <div className="button-icon sh-2">
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
