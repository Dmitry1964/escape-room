import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ApiActions, FetchRoutes, TQuest } from "src/shared";

export const fetchQuestsList = createAsyncThunk<TQuest[], void, {extra: AxiosInstance}>(ApiActions.FetchDataQuestsList, async(_arg, {extra: api}) => {
  const {data} = await api.get<TQuest[]>(FetchRoutes.Quest);
  return data;
})
