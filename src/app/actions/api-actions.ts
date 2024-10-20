import { createAsyncThunk } from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import { TQuest, TDetailQuest } from '../../shared/types/app-types';
import { FetchRoutes } from '../../shared/routes/routes';
import { ApiActions } from 'src/shared/constans';


export const fetchQuestsList = createAsyncThunk<TQuest[], void, {extra: AxiosInstance}>(ApiActions.DataFetchQuestsList, async(_arg, {extra: api}) => {
  const {data} = await api.get<TQuest[]>(FetchRoutes.Catalog);
  return data;
});

export const fetchQuest = createAsyncThunk<TDetailQuest, string, {extra: AxiosInstance}>(ApiActions.DataFetchQuest, async(questId, {extra: api}) => {
  const {data} = await api.get<TDetailQuest>(`${FetchRoutes.Catalog}/${questId}`);
  return data;
});
