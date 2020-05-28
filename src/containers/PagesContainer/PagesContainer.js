import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import StartPage from "../../pages/StartPage/StartPage";
import ProgressBar from "react-bootstrap/ProgressBar";

import classes from "./PagesContainer.module.scss";
import journeyMap from "../../constants/journey-map";
import { find } from "lodash";

import screenTypes from "../../constants/screen-types";
import LateralButtons from "../../components/LateralButtons/LateralButtons";
import CircleButton from "../../components/CircleButton/CircleButton";
import IntroPage from "../../pages/IntroPage/IntroPage";
import PathSelectPage from "../../pages/PathSelectPage/PathSelectPage";
import QuestionPage from "../../pages/QuestionPage/QuestionPage";

function PagesContainer(props) {
  let history = useHistory();
  let location = useLocation();

  const lateralButtons = {
    menuBtn: {
      side: "left",
      iconName: "menu_line",
      bkColorName: "electricBlue",
      styles: {
        left: 0,
      },
      click: (event) => {
        onClickMenuButton(event);
      },
    },
    questBtn: {
      side: "right",
      iconName: "quest",
      bkColorName: "electricPurple",
      styles: {
        right: 0,
      },
      toggle: false,
      innerTemplate: <div>{"(Under Construction)"}</div>,
      click: (event) => {
        onClickInfoButton(event);
      },
    },
  };

  const backButton = {
    iconName: "back",
    click: (event) => {
      onClickBackButton(event);
    },
  };

  const player = {
    started: false,
    playing: false,
    controls: true,
    light: true,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    ended: false,
  };

  const [lateralBtnModel, setLateralBtnModel] = useState(lateralButtons);
  const [backBtnModel] = useState(backButton);
  const [playerState, setPlayerState] = useState(player);

  useEffect(() => {
    if (location.state) {
      props.setCurrentPage(location.state);
    }
    history.listen((location, action) => {
      console.log(action, location.pathname, location.state);
      _resetStates();
      // props.setCurrentPage(location.state);
    });
  });

  const onClickBackButton = (e) => {
    e.preventDefault();
    console.log(props.currentPage);
    _changeLocationPage(props.currentPage.id);
  };

  const onClickMenuButton = (e) => {
    e.preventDefault();
    console.log("(Under Construction)");
  };

  const onClickInfoButton = (e) => {
    e.preventDefault();
    const lateralBtnState = { ...lateralBtnModel };
    lateralBtnState.questBtn.toggle = !lateralBtnState.questBtn.toggle;
    setLateralBtnModel(lateralBtnState);
  };

  const goToNextPage = (page) => {
    _changeLocationPage(page);
    console.log("onGoToNext");
  };

  const handleStarted = () => {
    setPlayerState({ ...playerState, ...{ started: true } });
    console.log("onStar");
  };

  const handleEnded = () => {
    setPlayerState({ ...playerState, ...{ ended: true } });
    console.log("onEnded");
  };

  const _resetStates = () => {
    setLateralBtnModel(lateralButtons);
    setPlayerState(player);
  };

  const _changeLocationPage = (pageId) => {
    const page = find(journeyMap, (item) => item.id === pageId);
    history.push(page.path, page);
  };

  // debugger;
  console.log(props.currentPage);

  return (
    <div className={classes.PagesContainer}>
      {props.currentPage.type !== screenTypes.ceroScreen ? (
        <div style={{ width: "100%" }}>
          <ProgressBar now={60} />
        </div>
      ) : null}
      {props.currentPage.type !== screenTypes.ceroScreen ? (
        <CircleButton
          iconName={backBtnModel.iconName}
          click={backBtnModel.click}></CircleButton>
      ) : null}
      <LateralButtons
        currentPage={props.currentPage}
        model={lateralBtnModel}></LateralButtons>
      <Switch>
        {/* TODO: Create routes dynamically and create generic page component */}
        <Route exact path="/">
          <StartPage></StartPage>
        </Route>
        <Route path="/intro">
          <div className={classes.pageWrapper}>
            <IntroPage
              pageData={props.journeyMap.introductionPage}
              currentPage={props.currentPage}
              player={playerState}
              onStart={() => handleStarted()}
              goNext={(id) => goToNextPage(id)}
              onEnd={() => handleEnded()}></IntroPage>
          </div>
        </Route>
        <Route path="/path-select">
          <div className={classes.pageWrapper}>
            <PathSelectPage
              pageData={props.journeyMap.pathSelectPage}
              currentPage={props.currentPage}
              player={playerState}
              onStart={() => handleStarted()}
              goNext={(id) => goToNextPage(id)}
              onEnd={() => handleEnded()}></PathSelectPage>
          </div>
        </Route>
        <Route path="/question">
          <div className={classes.pageWrapper}>
            <QuestionPage
              pageData={props.journeyMap.path1_1}
              currentPage={props.currentPage}
              player={playerState}
              onStart={() => handleStarted()}
              goNext={(id) => goToNextPage(id)}
              onEnd={() => handleEnded()}></QuestionPage>
          </div>
        </Route>
        <Route path="*">
          <h1 style={{ textAlign: "center" }}>Error 404 - Page not founded</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default PagesContainer;
