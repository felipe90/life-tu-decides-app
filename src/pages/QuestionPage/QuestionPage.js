import React from "react";
import classes from "./QuestionPage.module.scss";
import GenericButton from "../../components/GenericButton/GenericButton";
import ReactPlayer from "react-player";

const questionPage = (props) => {
  const btnStyles = {
    width: "50%",
    height: "65vh",
    fontSize: "1.5rem",
    textAlign: "center",
    borderRadius: "15px",
    minWidth: "0",
  };

  const icon = {
    name: "quest_2",
    align: "up",
    styles: {
      width: "30%",
    },
  };

  const questionsBtnsModel = [
    {
      label: `Revisar fecha de expiración`,
      styles: btnStyles,
      color: "electricBlue",
      icon: icon,
      click: () => {
        // props.goNext();
      },
    },
    {
      label: `Romper el empaque`,
      styles: btnStyles,
      color: "electricBlue",
      icon: icon,
      click: () => {
        // props.goNext();
      },
    },
    {
      label: `Medir su elasticidad`,
      styles: btnStyles,
      color: "electricBlue",
      icon: icon,
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
    <div className={classes.QuestionPage}>
      {props.player.ended ? (
        <div className={classes.questionsContainer}>
          <spawn>Primer Paso</spawn>
          <div className={classes.buttonsWrapper}>
            {questionsCtrl(questionsBtnsModel)}
          </div>
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

export default questionPage;
