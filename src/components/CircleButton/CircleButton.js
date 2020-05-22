import React from "react";
import classes from "./CircleButton.module.scss";

const circleButton = (props) => {
  const styles = {};
  return (
    <div style={styles} className={classes.CircleButton} onClick={props.click}>
      <img
        src={"/icons/" + props.iconName + ".svg"}
        alt={props.iconName + "icon"}
      />
    </div>
  );
};

export default circleButton;
