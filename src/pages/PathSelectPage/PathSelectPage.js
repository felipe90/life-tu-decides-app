import React from "react";
import classes from "./PathSelectPage.module.scss";
import ReactPlayer from "react-player";

const pathSelectPage = (props) => {
  return (
    <div className={classes.PathSelectPage}>
      <ReactPlayer
        width="100%"
        height="100vh"
        url={props.pageData.videoUrl}
        controls={true}
      />
    </div>
  );
};

export default pathSelectPage;
