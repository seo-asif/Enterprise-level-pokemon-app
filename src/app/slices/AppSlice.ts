import { createSlice } from "@reduxjs/toolkit";
import { AppTypeInitialState } from "../../utils/Type";

const initialState: AppTypeInitialState = {
  count: 0,
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
});

export const {} = AppSlice.actions;

export default AppSlice.reducer;
