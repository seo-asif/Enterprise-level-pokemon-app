import { createSlice } from "@reduxjs/toolkit";
import { AppTypeInitialState } from "../../utils/Type";

const initialState: AppTypeInitialState = {
  toasts: [],
  userInfo: undefined,
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setToast: (state, action) => {
      const toasts = [...state.toasts];
      toasts.push(action.payload);
      state.toasts = toasts;
    },
    clearToasts: (state) => {
      state.toasts = [];
    },
    setUserStatus: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setToast, clearToasts,setUserStatus } = AppSlice.actions;

export default AppSlice.reducer;
