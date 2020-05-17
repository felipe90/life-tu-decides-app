import React from "react";
import Radium from "radium";

const playButton = (props) => {
  const styles = {
    width: "620px",
    height: "180px",
    borderRadius: "100px",
    color: "#FFFFFF",
    background:
      "linear-gradient(0deg, rgba(0,28,88,0) 0%, rgba(205,48,209,1) 70%)",
    ":hover": {
      color: "#CD30D1",
    },
  };

  return (
    <button style={styles} onClick={props.click()}>
      Tu decides
    </button>
  );
};

export default Radium(playButton);
