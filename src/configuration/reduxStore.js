import { configureStore } from "@reduxjs/toolkit";

import GenericSlice from "./slice/reduxSlice";
import UserDetailSlice from "./slice/userDetailSlice";

export default configureStore({
  reducer: {
    userDetail: UserDetailSlice,
    generic: GenericSlice,
  },
});
