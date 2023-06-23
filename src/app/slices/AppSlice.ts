import { createSlice } from "@reduxjs/toolkit";
import { AppTypeInitialState } from "../../utils/Type";

const initialState: AppTypeInitialState = {
  toasts: [],
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
  },
});

export const { setToast, clearToasts } = AppSlice.actions;

export default AppSlice.reducer;
