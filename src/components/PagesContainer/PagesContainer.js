import React from "react";
import Radium from "radium";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StartPage from "../../pages/StartPage/StartPage";
import LateralButton from "../../components/LateralButton/LateralButton";
import PathSelectPage from "../../pages/PathSelectPage/PathSelectPage";
import "./PagesContainer.scss";

const pagesContainer = (props) => {
  return (
    <div className="PagesContainer">
      <LateralButton
        side="left"
        iconName="boasdsaok"
        bkColorName="electricBlue"></LateralButton>
      <LateralButton
        side="right"
        iconName="boasdsaok"
        bkColorName="electricPurple"></LateralButton>

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
