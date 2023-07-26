import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const clientPositionYSlice = createSlice({
  name: "positionY",
  initialState,
  reducers: {
    updateClientY: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateClientY } = clientPositionYSlice.actions;

export default clientPositionYSlice.reducer;
