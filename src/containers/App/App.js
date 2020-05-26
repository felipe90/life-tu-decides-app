import React, { useState } from "react";
import PagesContainer from "../PagesContainer/PagesContainer";
import { BrowserRouter as Router } from "react-router-dom";
import JourneyMap from "../../constants/journey-map";

function App() {
  const [journeyMap] = useState(JourneyMap);
  const [currentPage, setCurrentPage] = useState(JourneyMap.startPage);

  return (
    <Router>
      <PagesContainer
        journeyMap={journeyMap}
        currentPage={currentPage}
        setCurrentPage={(pageModel) => {
          setCurrentPage(pageModel);
        }}></PagesContainer>
    </Router>
  );
}

export default App;
