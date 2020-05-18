import React from "react";
import "./PathSelectPage.scss";
import Radium from "radium";
import ReactPlayer from "react-player";

const pathSelectPage = (props) => {
  return (
    <div className="PathSelectPage">
      <ReactPlayer url="/reference/demo-video.mp4" controls={true} />
    </div>
  );
};

export default Radium(pathSelectPage);
