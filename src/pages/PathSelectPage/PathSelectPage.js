import React from "react";
import classes from "./PathSelectPage.module.scss";
import styleVars from "../../index.scss";

import GenericButton from "../../components/GenericButton/GenericButton";
import ReactPlayer from "react-player";

const pathSelectPage = (props) => {
  const btnStyles = {
    width: "40%",
    height: "150px",
    fontFamily: styleVars.fontLgItalic,
    fontSize: "4rem",
    textAlign: "center",
  };

  const questionsBtnsModel = [
    {
      label: "Condón",
      styles: btnStyles,
      color: "electricBlue",
      click: () => {
        props.goNext("path1-1-page");
      },
    },
    {
      label: "Píldora Anticonceptiva",
      styles: btnStyles,
      color: "electricPink",
      click: () => {
        // props.goNext();
      },
    },
  ];

  const questionsCtrl = (btnModel) => {
    return btnModel.map((btn) => {
      return (
        <GenericButton
          key={btn.label}
          label={btn.label}
          styles={btn.styles}
          icon={btn.icon}
          color={btn.color}
          click={btn.click}></GenericButton>
      );
    });
  };

  return (
    <div className={classes.PathSelectPage}>
      {props.player.ended ? (
        <div className={classes.buttonsWrapper}>
          {questionsCtrl(questionsBtnsModel)}
        </div>
      ) : (
        <ReactPlayer
          width="100%"
          height="100vh"
          light={false}
          onStart={props.onStart}
          onEnded={props.onEnd}
          url={props.pageData.videoUrl}
          controls={true}
        />
      )}
    </div>
  );
};

export default pathSelectPage;
