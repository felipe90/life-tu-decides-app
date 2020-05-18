import React from "react";
import Radium from "radium";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const playButton = (props) => {
  const styles = {
    width: "250px",
    height: "90px",
    borderRadius: "100px",
    fontFamily: "LeagueGothic-italic",
    fontSize: "2.5rem",
    color: "#FFFFFF",
    background:
      "linear-gradient(0deg, rgba(0,28,88,0) 0%, rgba(205,48,209,1) 70%)",
    // ":hover": {
    //   color: "#CD30D1",
    // },
  };

  const imgStyles = {
    width: "35px",
    position: "relative",
    right: "-25px",
  };

  return (
    <Link to="/path-select">
      <Button style={styles}>
        Tu decides
        {""}
        <img style={imgStyles} src="/icons/play_active.svg" alt="share icon" />
      </Button>
    </Link>
  );
};

export default Radium(playButton);
