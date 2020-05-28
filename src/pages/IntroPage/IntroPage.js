import React from "react";
import classes from "./IntroPage.module.scss";
import GenericButton from "../../components/GenericButton/GenericButton";
import ReactPlayer from "react-player";

function IntroPage(props) {
  const button = {
    label: "Continuar",
    styles: {
      width: "250px",
      borderRadius: "100px",
    },
    color: "electricBlue",
    icon: {
      name: "go_next",
      align: "right",
      styles: {
        width: "25%",
      },
    },
    click: () => {
      props.goNext("path-select-page");
    },
  };

  return (
    <div className={classes.IntroPage}>
      {props.player.ended ? (
        <GenericButton
          label={button.label}
          styles={button.styles}
          icon={button.icon}
          color={button.color}
          click={button.click}></GenericButton>
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
}

export default IntroPage;
