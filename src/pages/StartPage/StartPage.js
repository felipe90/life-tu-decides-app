import React from "react";
import classes from "./StartPage.module.scss";
import PlayButton from "../../components/PlayButton/PlayButton";
import ShareButton from "../../components/ShareButton/ShareButton";

const startPage = (props) => {
  const startApp = () => {
    console.log(`routing`);
  };

  return (
    <div className={classes.StartPage}>
      <div className={classes.pageContainer}>
        <div className={classes.titleContainer}>
          <img className={classes.title} src="/img/life.svg" alt="life logo" />
          <div className={classes.titleBottom}>
            <img
              className={classes.titleBar}
              src="/img/life-bar.svg"
              alt="life logo bar"
            />
            <div className={classes.playBtn}>
              <PlayButton click={startApp}></PlayButton>
              {/* <img src="/img/tu-decides.svg" alt="tu decides" /> */}
            </div>
          </div>
        </div>
        <div className={classes.shareBtn}>
          <ShareButton></ShareButton>
        </div>
      </div>
    </div>
  );
};

export default startPage;
