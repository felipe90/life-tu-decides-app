import React from "react";
import screenTypes from "../../const/screen-types";
import { map } from "lodash";
import LateralButton from "../LateralButton/LateralButton";

const lateralButtons = (props) => {
  if (props.currentPage.type !== screenTypes.ceroScreen) {
    const buttonsArray = map(props.model);
    return buttonsArray.map((button) => {
      return (
        <LateralButton
          key={button.iconName}
          styles={button.styles}
          iconName={button.iconName}
          bkColorName={button.bkColorName}
          innerTemplate={button.innerTemplate}
          showTemplate={button.toggle}
          click={button.click}></LateralButton>
      );
    });
  }
};
export default lateralButtons;
