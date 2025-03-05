import { fetchMatches, getMatchesData } from "@entities/Matches";
import { PayloadAction } from "@reduxjs/toolkit";
import { CustomThunkDispatch } from "@shared/types/generalTypes";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const MatchesList = () => {
  const dispatchThunk: CustomThunkDispatch<PayloadAction> = useDispatch();

  const matches = useSelector(getMatchesData);

  console.log("matches", matches);

  useEffect(() => {
    dispatchThunk(fetchMatches());
  }, [dispatchThunk]);

  return <div></div>;
};
