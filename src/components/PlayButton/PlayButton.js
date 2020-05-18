import React from "react";
import Radium from "radium";
import Button from "react-bootstrap/Button";

const playButton = (props) => {
  const styles = {
    width: "180px",
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

  return (
    <Button style={styles} onClick={props.click()}>
      Tu decides
    </Button>
  );
};

export default Radium(playButton);
