import screenTypes from "../constants/screen-types";
import Journey from "../models/Journey";

const journeyMap = {
  startPage: new Journey({
    id: "start-page",
    type: screenTypes.ceroScreen,
    title: "LIFE",
    path: "/",
    videoUrl: null,
    before: null,
    after: "path-select-page",
  }),
  introductionPage: new Journey({
    id: "introduction-page",
    type: screenTypes.introScreen,
    title: "",
    path: "/intro-select",
    videoUrl: "/videos/intro_general.mp4",
    before: "start-page",
    after: "path-select-page",
  }),
  pathSelectPage: new Journey({
    id: "path-select-page",
    type: screenTypes.pathSelectScreen,
    title: "",
    path: "/path-select",
    videoUrl: "/videos/intro_general.mp4",
    before: "introduction-page",
    after: ["path1-1-page", null],
  }),
  path1_1: new Journey({
    id: "path1-1-page",
    type: screenTypes.questionScreen,
    title: "",
    path: "/question",
    videoUrl: "/videos/intro_condon.mp4",
    before: "path1-1-page",
    after: [null, null, null],
  }),
};
export default journeyMap;
