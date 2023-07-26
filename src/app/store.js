import { configureStore } from "@reduxjs/toolkit";
import clientPositionXReducer from '../features/clientPosition/clientPositionX';
import clientPositionYReducer from "../features/clientPosition/clientPositionY";

export const store = configureStore({
  reducer: {
    positionX: clientPositionXReducer,
    positionY: clientPositionYReducer,
  },
});