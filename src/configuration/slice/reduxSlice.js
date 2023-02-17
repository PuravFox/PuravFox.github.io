import { createSlice } from "@reduxjs/toolkit";

export const genericSlice = createSlice({
  name: "generic",
  initialState: {
    other: {},
  },
  reducers: {
    add_other: (state, action) => {
      state.other = action?.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add_other } = genericSlice.actions;

export default genericSlice.reducer;
