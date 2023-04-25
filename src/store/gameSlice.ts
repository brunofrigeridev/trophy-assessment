import { createSlice } from '@reduxjs/toolkit';
import { fetchJsonData } from './asyncThunk';
import { Game } from '../services/types';

interface GameState {
  data: Game[]
  isFetching?: boolean
  error?: string
}

const initialState: GameState = {
  data: [],
  isFetching: false,
  error: undefined
}

export const gameSlice = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchJsonData.pending, (state) => {
      state.isFetching = true;
      state.data = [];
      state.error = undefined;
    });
    builder.addCase(fetchJsonData.fulfilled, (state, action) => {
      state.isFetching = false;
      state.data = action.payload.map(game => {
        const splittedSteamUrl = game.steamUrl.split("/")
        const appId = splittedSteamUrl[splittedSteamUrl.length - 1]
        
        return {
          ...game,
          imageUrl: appId ? `https://steamcdn-a.akamaihd.net/steam/apps/${appId}/library_600x900_2x.jpg` : ''
        }
      });
      state.error = undefined;
    });
    builder.addCase(fetchJsonData.rejected, (state) => {
      state.isFetching = false;
      state.data = [];
      state.error = '';
    });
  }
});