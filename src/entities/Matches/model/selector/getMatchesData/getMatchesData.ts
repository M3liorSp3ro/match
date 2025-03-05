import { RootState } from "@app/providers/StoreProvider/store";

export const getMatchesData = (state: RootState) => state.matches.matchesData;
