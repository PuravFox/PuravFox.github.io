import { createSlice } from "@reduxjs/toolkit";

export const userDetailSlice = createSlice({
  name: "userDetail",
  initialState: {
    _id: null,
    firstName: null,
    lastName: null,
    other: {},
  },
  reducers: {
    add_other: (state, action) => {
      state.other = action?.payload;
    },
    add_id: (state, action) => {
      state._id = action?.payload;
    },
    update_userDetail: (state, action) => {
      return { ...state, ...action?.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { add_id, add_other, update_userDetail } = userDetailSlice.actions;

export default userDetailSlice.reducer;
