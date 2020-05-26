import screenTypes from "../constants/screen-types";
import Journey from "../models/Journey";

const journeyMap = {
  startPage: new Journey({
    id: "start-page",
    type: screenTypes.ceroScreen,
    title: "LIFE",
    path: "/",
    videoUrl: "/reference/demo-video.mp4",
    before: "/",
    after: "/path-select",
  }),
  introductionPage: new Journey({
    id: "introduction-page",
    type: screenTypes.introScreen,
    title: "",
    path: "/intro-select",
    videoUrl: "/reference/demo-video.mp4",
    before: "/",
    after: "/path-select",
  }),
  pathSelectPage: new Journey({
    id: "path-select-page",
    type: screenTypes.pathSelectScreen,
    title: "",
    path: "/path-select",
    videoUrl: "/reference/demo-video.mp4",
    before: "/",
    after: ["/path1", "/path2"],
  }),
  path1_1: new Journey({
    id: "path1-1-page",
    type: screenTypes.questionScreen,
    title: "",
    path: "/path1-1",
    videoUrl: "/reference/demo-video.mp4",
    before: "/path-select",
    after: ["/path1-1", "/path1-2", "/path1-3"],
  }),
};
export default journeyMap;
