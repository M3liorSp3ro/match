import { fetchMatches } from "@entities/Matches/services/fetchMatches";
import { createSlice } from "@reduxjs/toolkit";
import { IMatchesSchema } from "../types/matches";

const initialState: IMatchesSchema = {
  isLoading: false,
  matchesData: [],
};

export const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMatches.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMatches.fulfilled, (state, action) => {
        state.isLoading = false;
        state.matchesData = action.payload;
      })
      .addCase(fetchMatches.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { actions: matchesAction } = matchesSlice;
export const { reducer: matchesReducer } = matchesSlice;
