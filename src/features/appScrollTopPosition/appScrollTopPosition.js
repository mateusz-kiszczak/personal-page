import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const appScrollTopSlice = createSlice({
  name: "topPossition",
  initialState,
  reducers: {
    updateTopPosition: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateTopPosition } = appScrollTopSlice.actions;

export default appScrollTopSlice.reducer;
