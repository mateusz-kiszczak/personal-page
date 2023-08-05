import { createSlice } from "@reduxjs/toolkit";
import allProjects from "./../../data/allProjects";

const initialState = {
  value: allProjects,
};

export const sortProjectsSlice = createSlice({
  name: "sortProjects",
  initialState,
  reducers: {
    sort: (state, action) => {
      state.value = action.payload;
    }
  },
});


// SORT FUNCTIONS

// By date, oldest first.
export const sortbyDateAsc = (arr) => {
  const newArr = [...arr];
  const sortedbyDateAsc = newArr.sort((x, y) => {
    let a = new Date(x.date);
    let b = new Date(y.date);

    return a - b;
  });

  return sortedbyDateAsc; 
};

// By date, newest first.
export const sortbyDateDsc = (arr) => {
  const newArr = [...arr];
  const sortedbyDateDsc = newArr.sort((x, y) => {
    let a = new Date(x.date);
    let b = new Date(y.date);

    return b - a;
  });

  return sortedbyDateDsc; 
};

// By Name ascendant.
export const sortbyNameAsc = (arr) => {
  const newArr = [...arr];
  const sortedbyNameAsc = newArr.sort((x, y) => {
    let a = x.title.toUpperCase();
    let b = y.title.toUpperCase();

    return a === b ? 0 : a > b ? 1 : -1;
  });

  return sortedbyNameAsc; 
};

// By Name descendant.
export const sortbyNameDsc = (arr) => {
  const newArr = [...arr];
  const sortedbyNameDsc = newArr.sort((x, y) => {
    let a = x.title.toUpperCase();
    let b = y.title.toUpperCase();

    return a === b ? 0 : a > b ? -1 : 1;
  });

  return sortedbyNameDsc; 
};


export const {sort} = sortProjectsSlice.actions;

export default sortProjectsSlice.reducer;
