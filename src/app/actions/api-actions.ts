import { createAsyncThunk } from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import { TQuest, TDetailQuest, TUserAuthData, TUserFetchData, TBookingQuestInfo, TBookingUsersInfo } from '../../shared/types/app-types';
import { FetchRoutes } from '../../shared/routes/routes';
import { ApiActions } from 'src/shared/constans';
import { dropToken, setToken } from 'src/shared/token';


export const fetchQuestsList = createAsyncThunk<TQuest[], void, {extra: AxiosInstance}>(ApiActions.DataFetchQuestsList, async(_arg, {extra: api}) => {
  const {data} = await api.get<TQuest[]>(FetchRoutes.Catalog);
  return data;
});

export const fetchQuest = createAsyncThunk<TDetailQuest, string, {extra: AxiosInstance}>(ApiActions.DataFetchQuest, async(questId, {extra: api}) => {
  const {data} = await api.get<TDetailQuest>(`${FetchRoutes.Catalog}/${questId}`);
  return data;
});

export const checkUserAuthData = createAsyncThunk<TUserAuthData, void, {extra: AxiosInstance}>(ApiActions.CheckUserAuth, async(_arg, {extra: api}) => {
  const {data} = await api.get<TUserAuthData>(FetchRoutes.Login);
  return data;
});

export const setUserAuthorization = createAsyncThunk<TUserAuthData, TUserFetchData, {extra: AxiosInstance}>(ApiActions.SetUserAuth, async(userData, {extra: api}) => {
  const {data} = await api.post<TUserAuthData>(FetchRoutes.Login, userData);
  setToken(data.token);
  return data;
});

export const removeUserAuthorization = createAsyncThunk<void, undefined, {extra: AxiosInstance}>(ApiActions.RemoveUserAuth, async(_arg, {extra: api}) => {
  await api.delete(FetchRoutes.Logout);
  dropToken();
});

export const fetchBookingInfo = createAsyncThunk<TBookingQuestInfo[], string, {extra: AxiosInstance}>(ApiActions.InfoFetchBookingQuest, async(questId, {extra:api}) => {
  const {data} = await api.get<TBookingQuestInfo[]>(`${FetchRoutes.Catalog}/${questId}${FetchRoutes.Booking}`);
  return data;
});

export const setBookQuest = createAsyncThunk<TBookingUsersInfo, { questId: string; questData: TBookingUsersInfo }, {extra: AxiosInstance}>(ApiActions.UserBookQuest, async({ questId, questData }, {extra: api}) => {
  const {data} = await api.post<TBookingUsersInfo>(`${FetchRoutes.Catalog}/${questId}${FetchRoutes.Booking}`, questData);
  return data;
});
