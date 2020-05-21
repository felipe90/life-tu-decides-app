import React from "react";
import Radium from "radium";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StartPage from "../../pages/StartPage/StartPage";
import screenTypes from "../../const/screen-types";

import LateralButton from "../../components/LateralButton/LateralButton";
import PathSelectPage from "../../pages/PathSelectPage/PathSelectPage";
import "./PagesContainer.scss";

const pagesContainer = (props) => {
  const onClickMenu = (e) => {
    console.log("asdasd");
    console.log("menu");
  };

  const onClickInfo = (e) => {
    console.log(e);
    console.log("info");
  };

  const menuButton = () => {
    if (props.currentPage.type !== screenTypes.ceroScreen) {
      return (
        <LateralButton
          side="left"
          iconName="menu_line"
          bkColorName="electricBlue"
          onClick={() => onClickMenu}></LateralButton>
      );
    }
  };

  const questionButton = () => {
    if (props.currentPage.type !== screenTypes.ceroScreen) {
      return (
        <LateralButton
          side="right"
          iconName="quest"
          bkColorName="electricPurple"
          onClick={onClickInfo}></LateralButton>
      );
    }
  };

  return (
    <div className="PagesContainer">
      {menuButton()}
      {questionButton()}
      <Router>
        <Switch>
          <Route exact path="/">
            <StartPage></StartPage>
          </Route>
          <Route path="/path-select">
            <div className="page-wrapper">
              <PathSelectPage></PathSelectPage>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Radium(pagesContainer);
