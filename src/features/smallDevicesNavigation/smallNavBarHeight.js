import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const smallNavBarHeightSlice = createSlice({
  name: "smallNavBarHeight",
  initialState,
  reducers: {
    updateSmallNavBarHeight: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateSmallNavBarHeight } = smallNavBarHeightSlice.actions;

export default smallNavBarHeightSlice.reducer;
