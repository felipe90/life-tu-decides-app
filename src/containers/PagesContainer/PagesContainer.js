import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import StartPage from "../../pages/StartPage/StartPage";
import screenTypes from "../../constants/screen-types";

import LateralButtons from "../../components/LateralButtons/LateralButtons";
import CircleButton from "../../components/CircleButton/CircleButton";
import PathSelectPage from "../../pages/PathSelectPage/PathSelectPage";
import classes from "./PagesContainer.module.scss";
import journeyMap from "../../constants/journey-map";

function PagesContainer(props) {
  let location = useLocation();
  let history = useHistory();

  const [lateralBtnModel, setLateralBtnModel] = useState({
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
  });

  const [backBtnModel] = useState({
    iconName: "back",
    click: (event) => {
      onClickBackButton(event);
    },
  });

  useEffect(() =>
    history.listen((location, action) => {
      console.log(action, location.pathname, location.state);
      props.setCurrentPage(location.state);
    })
  );

  const onClickBackButton = (e) => {
    e.preventDefault();
    props.setCurrentPage(journeyMap.startPage);
    history.push("/", journeyMap.startPage);
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

  return (
    <div className={classes.PagesContainer}>
      {props.currentPage.type !== screenTypes.ceroScreen ? (
        <CircleButton
          iconName={backBtnModel.iconName}
          click={backBtnModel.click}></CircleButton>
      ) : null}
      <LateralButtons
        currentPage={props.currentPage}
        model={lateralBtnModel}></LateralButtons>
      <Switch>
        <Route exact path="/">
          <StartPage></StartPage>
        </Route>
        <Route path="/path-select">
          <div className={classes.pageWrapper}>
            <PathSelectPage
              pageData={props.journeyMap.introductionPage}></PathSelectPage>
          </div>
        </Route>
        <Route path="*">
          <h1>Error 404 - Page not founded</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default PagesContainer;
