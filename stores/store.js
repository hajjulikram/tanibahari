//store.jsx

"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  //add all your reducers here
});

export const store = configureStore({
  reducer: rootReducer,
});
