import React from "react";
import Radium from "radium";
import "./ShareButton.scss";

const shareButton = (props) => {
  const styles = {
    width: "90px",
    height: "90px",
    borderRadius: "100px",
    border: "",
    textAlign: "center",
    background:
      "linear-gradient(0deg, rgba(0,28,88,0) 0%, rgba(205,48,209,1) 70%)",
  };

  return (
    <div style={styles} className="ShareButton">
      <img src="/icons/share.svg" alt="share icon" />
    </div>
  );
};

export default Radium(shareButton);
