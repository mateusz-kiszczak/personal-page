import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const screenWidthSlice = createSlice({
  name: "width",
  initialState,
  reducers: {
    updateWidth: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateWidth } = screenWidthSlice.actions;

export default screenWidthSlice.reducer;
