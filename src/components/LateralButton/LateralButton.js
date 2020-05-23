import React from "react";
import Radium from "radium";
import classes from "./LateralButton.module.scss";
import styleVars from "../../index.scss";

const lateralButton = (props) => {
  let styles = props.styles;

  styles.backgroundColor = styleVars[props.bkColorName];

  const icon = (
    <img
      src={"/icons/" + props.iconName + ".svg"}
      alt={props.iconName + "icon"}
    />
  );

  return (
    <div style={styles} className={classes.LateralButton} onClick={props.click}>
      <div>{!props.showTemplate ? icon : props.innerTemplate}</div>
    </div>
  );
};

export default Radium(lateralButton);
