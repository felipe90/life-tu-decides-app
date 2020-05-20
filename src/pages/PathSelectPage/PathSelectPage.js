import React from "react";
import "./PathSelectPage.scss";
import Radium from "radium";
import ReactPlayer from "react-player";

const pathSelectPage = (props) => {
  return (
    <div className="PathSelectPage">
      <ReactPlayer
        width="100%"
        height="100vh"
        url="/reference/demo-video.mp4"
        controls={true}
      />
    </div>
  );
};

export default Radium(pathSelectPage);
