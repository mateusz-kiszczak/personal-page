import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const screenHeightSlice = createSlice({
  name: "height",
  initialState,
  reducers: {
    updateHeight: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateHeight } = screenHeightSlice.actions;

export default screenHeightSlice.reducer;
