import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StartPage from "../../pages/StartPage/StartPage";
import screenTypes from "../../const/screen-types";

import LateralButton from "../../components/LateralButton/LateralButton";
import CircleButton from "../../components/CircleButton/CircleButton";
import PathSelectPage from "../../pages/PathSelectPage/PathSelectPage";
import classes from "./PagesContainer.module.scss";

class PagesContainer extends Component {
  lateralButtons() {
    const lateralButtons = [
      {
        side: "left",
        iconName: "menu_line",
        bkColorName: "electricBlue",
        click: (event) => {
          this.onClickMenuButton(event);
        },
      },
      {
        side: "right",
        iconName: "quest",
        bkColorName: "electricPurple",
        click: (event) => {
          this.onClickInfoButton(event);
        },
      },
    ];
    if (this.props.currentPage.type !== screenTypes.ceroScreen) {
      return lateralButtons.map((button) => {
        return (
          <LateralButton
            key={button.iconName}
            side={button.side}
            iconName={button.iconName}
            bkColorName={button.bkColorName}
            click={button.click}></LateralButton>
        );
      });
    }
  }

  actionsButtons() {
    if (this.props.currentPage.type !== screenTypes.ceroScreen) {
      return (
        <CircleButton
          iconName="back"
          click={this.onClickBackButton}></CircleButton>
      );
    }
  }

  onClickBackButton = (e) => {
    e.preventDefault();
    console.log("back");
  };

  onClickMenuButton = (e) => {
    e.preventDefault();
    console.log("menu");
  };

  onClickInfoButton = (e) => {
    e.preventDefault();
    console.log("info");
  };

  render() {
    return (
      <div className={classes.PagesContainer}>
        {this.actionsButtons()}
        {this.lateralButtons()}
        <Router>
          <Switch>
            <Route exact path="/">
              <StartPage></StartPage>
            </Route>
            <Route path="/path-select">
              <div className={classes.pageWrapper}>
                <PathSelectPage></PathSelectPage>
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default PagesContainer;
