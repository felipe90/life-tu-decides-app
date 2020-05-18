import React from "react";
import Radium from "radium";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StartPage from "../../pages/StartPage/StartPage";
import PathSelectPage from "../../pages/PathSelectPage/PathSelectPage";

const pagesContainer = (props) => {
  const styles = {
    width: "250px",
    height: "90px",
    borderRadius: "100px",
    fontFamily: "LeagueGothic-italic",
    fontSize: "2.5rem",
    color: "#FFFFFF",
    background:
      "linear-gradient(0deg, rgba(0,28,88,0) 0%, rgba(205,48,209,1) 70%)",
    // ":hover": {
    //   color: "#CD30D1",
    // },
  };

  console.log(props);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <StartPage title={props.currentPage.title}></StartPage>
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
