import React from "react";
import Radium from "radium";

const shareButton = (props) => {
  const styles = {
    width: "180px",
    height: "90px",
    borderRadius: "100px",
    fontFamily: "LeagueGothic-italic",
    fontSize: "2.5rem",
    color: "#FFFFFF",
    background:
      "linear-gradient(0deg, rgba(0,28,88,0) 0%, rgba(205,48,209,1) 70%)",
  };

  return (
    <div>
      <img src="/icons/share.svg" alt="share icon" />
    </div>
    // <button style={styles} onClick={props.click()}></button>
  );
};

export default Radium(shareButton);
