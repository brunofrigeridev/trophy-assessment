import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { gameSlice } from "./gameSlice";
import { useDispatch } from "react-redux";

const store = configureStore({ 
  reducer: combineReducers({
    games: gameSlice.reducer
  }) 
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store