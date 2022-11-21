import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from './type'

const initialState: InitialState = {
  count: 0,
  text: "我是文字",
};

export const stateUserInfo = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    add: (state) => {
      state.count += 1;
    },
    minus: (state) => {
      state.count -= 1;
    },
    change: (state) => {
      state.text = "我是改变了的文字";
    },
    back: (state) => {
      state.text = "我是文字";
    },
  }
});

export const { add, minus, change, back } = stateUserInfo.actions;
export default stateUserInfo.reducer;