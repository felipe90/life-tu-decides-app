import React from "react";
import Radium from "radium";
import classes from "./LateralButton.module.scss";
import styleVars from "../../index.scss";

const lateralButton = (props) => {
  let styles = {};

  styles.backgroundColor = styleVars[props.bkColorName];

  if (props.side === "left") {
    styles = { ...styles, ...{ left: 0 } };
  }

  if (props.side === "right") {
    styles = { ...styles, ...{ right: 0 } };
  }

  return (
    <div style={styles} className={classes.LateralButton} onClick={props.click}>
      <img
        src={"/icons/" + props.iconName + ".svg"}
        alt={props.iconName + "icon"}
      />
    </div>
  );
};

export default Radium(lateralButton);
