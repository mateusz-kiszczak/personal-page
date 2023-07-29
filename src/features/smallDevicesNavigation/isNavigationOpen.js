import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const isNavigationOpenSlice = createSlice({
  name: "isNavigationOpen",
  initialState,
  reducers: {
    openCloseNavigation: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { openCloseNavigation } = isNavigationOpenSlice.actions;

export default isNavigationOpenSlice.reducer;
