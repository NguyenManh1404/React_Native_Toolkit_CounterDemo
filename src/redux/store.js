import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./AppRedux/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})