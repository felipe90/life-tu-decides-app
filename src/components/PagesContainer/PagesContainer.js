import React from "react";
import Radium from "radium";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StartPage from "../../pages/StartPage/StartPage";
import PathSelectPage from "../../pages/PathSelectPage/PathSelectPage";

const pagesContainer = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <StartPage></StartPage>
        </Route>
        <Route path="/path-select">
          <PathSelectPage></PathSelectPage>
        </Route>
      </Switch>
      <div className="App"></div>
    </Router>
  );
};

export default Radium(pagesContainer);
