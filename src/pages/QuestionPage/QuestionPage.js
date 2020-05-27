import React from "react";
import classes from "./QuestionPage.module.scss";
import ReactPlayer from "react-player";

const questionPage = (props) => {
  return (
    <div className={classes.QuestionPage}>
      <ReactPlayer
        width="100%"
        height="100vh"
        url={props.pageData.videoUrl}
        controls={true}
      />
    </div>
  );
};

export default questionPage;
