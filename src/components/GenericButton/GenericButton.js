import React from "react";
import Radium from "radium";
import styleVars from "../../index.scss";
import classes from "./GenericButton.module.scss";

const genericButton = (props) => {
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

  let iconStyles = {};

  if (props.icon) {
    if (props.icon.align === "right") {
      styles.flexFlow = "row-reverse";
    }
    if (props.icon.align === "left") {
      styles.flexFlow = "row";
    }
    if (props.icon.align === "up") {
      styles.flexFlow = "column";
    }
    if (props.icon.align === "down") {
      styles.flexFlow = "column-reverse";
    }
    iconStyles = { ...iconStyles, ...props.icon.styles };
    styles.justifyContent = "space-around";
  } else {
    styles.justifyContent = "center";
  }

  return (
    <div style={styles} className={classes.GenericButton} onClick={props.click}>
      {props.icon ? (
        <img
          style={iconStyles}
          src={"/icons/" + props.icon.name + ".svg"}
          alt={props.icon.name + "icon"}
        />
      ) : null}
      <span>{props.label}</span>
    </div>
  );
};

export default Radium(genericButton);
