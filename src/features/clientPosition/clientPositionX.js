import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const clientPositionXSlice = createSlice({
  name: "positionX",
  initialState,
  reducers: {
    updateClientX: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateClientX } = clientPositionXSlice.actions;

export default clientPositionXSlice.reducer;
