import React from "react";
import "./StartPage.scss";
import PlayButton from "../../components/PlayButton/PlayButton";
import ShareButton from "../../components/ShareButton/ShareButton";
import Radium from "radium";

const startPage = (props) => {
  const startApp = () => {
    console.log(`routing`);
  };

  return (
    <div className="StartPage">
      <div className="row title-container">
        <div className="col-md-10 text-center">
          <h1 className="title">{props.title}</h1>
        </div>
        <div className="col-md-2 text-center pt-5">
          <ShareButton click={startApp}></ShareButton>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8"></div>
        <div className="col-md-4">
          <PlayButton click={startApp}></PlayButton>
        </div>
      </div>
    </div>
  );
};

export default Radium(startPage);
