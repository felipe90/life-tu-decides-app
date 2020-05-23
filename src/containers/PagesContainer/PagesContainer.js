import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StartPage from "../../pages/StartPage/StartPage";
import screenTypes from "../../const/screen-types";

import LateralButtons from "../../components/LateralButtons/LateralButtons";
import CircleButton from "../../components/CircleButton/CircleButton";
import PathSelectPage from "../../pages/PathSelectPage/PathSelectPage";
import classes from "./PagesContainer.module.scss";

class PagesContainer extends Component {
  state = {
    infoToggle: false,
    lateralBtnModel: {
      menuBtn: {
        side: "left",
        iconName: "menu_line",
        bkColorName: "electricBlue",
        styles: {
          left: 0,
        },
        click: (event) => {
          this.onClickMenuButton(event);
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
          this.onClickInfoButton(event);
        },
      },
    },
    backBtnModel: {
      iconName: "back",
      click: (event) => {
        this.onClickBackButton(event);
      },
    },
  };

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
    const lateralBtnState = { ...this.state.lateralBtnModel };
    lateralBtnState.questBtn.toggle = !lateralBtnState.questBtn.toggle;
    this.setState({ lateralBtnModel: lateralBtnState });
  };

  render() {
    const actionsButtons =
      this.props.currentPage.type !== screenTypes.ceroScreen ? (
        <CircleButton
          iconName={this.state.backBtnModel.iconName}
          click={this.state.backBtnModel.click}></CircleButton>
      ) : null;

    return (
      <div className={classes.PagesContainer}>
        {actionsButtons}
        <LateralButtons
          currentPage={this.props.currentPage}
          model={this.state.lateralBtnModel}></LateralButtons>
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
