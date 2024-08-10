import { createAsyncThunk } from "@reduxjs/toolkit"
import {AxiosInstance} from 'axios';
import { TQuest } from "../types/app-types"
import { FetchRoutes } from "../routes/routes";
import { ApiActions } from "src/shared/constans";


export const fetchQuestsList = createAsyncThunk<TQuest[], void, {extra: AxiosInstance}>(ApiActions.DataFetchQuestsList, async(_arg, {extra: api}) => {
  const {data} = await api.get<TQuest[]>(FetchRoutes.Catalog);
  return data;
})
