import React from "react";
import Radium from "radium";
import "./LateralButton.scss";
import styleVars from "../../index.scss";

const lateralButton = (props) => {
  const styles = {
    display: "flex",
    flexFloW: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "8%",
    position: "fixed",
    top: "0",
    color: styleVars.white,
    zIndex: "10",
    opacity: "70%",
    transition: styleVars.linear,
    ":hover": {
      cursor: "pointer",
      opacity: "90%",
    },
  };

  styles.backgroundColor = styleVars[props.bkColorName];

  if (props.side === "left") {
    styles.left = "0";
  }

  if (props.side === "right") {
    styles.right = "0";
  }

  return (
    <div style={styles} className="LateralButton sh-2">
      <img src={"/icons/" + props.iconName + ".svg"} alt="button icon" />
    </div>
  );
};

export default Radium(lateralButton);
