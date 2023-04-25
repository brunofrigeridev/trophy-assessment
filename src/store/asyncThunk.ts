import { createAsyncThunk } from '@reduxjs/toolkit';
import { Game } from '../services/types';

export const fetchJsonData = createAsyncThunk(
  'data/fetchJson',
  async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();

    const content = JSON.parse(data.files["games.json"].content) as Game[]

    return content
  }
);