import React from "react";
import Radium from "radium";
import styleVars from "../../index.scss";
import classes from "./CircleButton.module.scss";

const circleButton = (props) => {
  const styles = {
    ...{
      border: `4px solid ${styleVars[props.color]}`,
      boxShadow: `0px 0px 8px ${styleVars[props.color]}`,
      ":hover": {
        backgroundColor: styleVars[`${props.color}Hover`],
      },
    },
    ...props.styles,
  };

  return (
    <div style={styles} className={classes.CircleButton} onClick={props.click}>
      <img
        src={"/icons/" + props.iconName + ".svg"}
        alt={props.iconName + "icon"}
      />
    </div>
  );
};

export default Radium(circleButton);
