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
      <div className="page-container">
        <div className="title-container">
          <img className="title" src="/img/life.svg" alt="life logo" />
          <div className="title-bottom">
            <img
              className="title-bar"
              src="/img/life-bar.svg"
              alt="life logo bar"
            />
            <div className="play-btn">
              <PlayButton click={startApp}></PlayButton>
              <img src="/img/tu-decides.svg" alt="tu decides" />
            </div>
          </div>
        </div>
        <div className="share-btn">
          <ShareButton className="share-btn"></ShareButton>
        </div>
      </div>
    </div>
  );
};

export default Radium(startPage);
