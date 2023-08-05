import { configureStore } from "@reduxjs/toolkit";
import clientPositionXReducer from '../features/clientPosition/clientPositionX';
import clientPositionYReducer from "../features/clientPosition/clientPositionY";
import screenWidthReducer from "../features/screenDimentions/screenWidth";
import screenHeightReducer from "../features/screenDimentions/screenHeight";
import isNavigationOpenReducer from "../features/smallDevicesNavigation/isNavigationOpen";
import smallNavBarHeightReducer from "../features/smallDevicesNavigation/smallNavBarHeight";
import appScrollTopPositionReducer from "../features/appScrollTopPosition/appScrollTopPosition";
import sortProjectsReducer from "../features/sortProjects/sortProjects";

export const store = configureStore({
  reducer: {
    positionX: clientPositionXReducer,
    positionY: clientPositionYReducer,
    screenWidth: screenWidthReducer,
    screenHeight: screenHeightReducer,
    isNavigationOpen: isNavigationOpenReducer,
    smallNavBarHeight: smallNavBarHeightReducer,
    appScrollTopPosition: appScrollTopPositionReducer,
    sortProjects: sortProjectsReducer
  },
});
