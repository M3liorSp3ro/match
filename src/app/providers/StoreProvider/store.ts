import { matchesReducer } from "@entities/Matches";
import { configureStore } from "@reduxjs/toolkit";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    matches: matchesReducer,
  },
});

export default store;
