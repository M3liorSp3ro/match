import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@shared/config/api";
import { EEndpoints } from "@shared/types/endpoints";

export const fetchMatches = createAsyncThunk(
  "matches/fetchMatches",
  async () => {
    const res = await api.get(EEndpoints.MATCHES);

    return res.data.data;
  }
);
