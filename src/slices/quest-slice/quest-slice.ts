import { createSlice } from '@reduxjs/toolkit';
import { fetchQuest } from 'src/app/actions/api-actions';
import { FetchStatus } from 'src/shared/constans';
import {TDetailQuest } from 'src/shared/types/app-types';


type TQuestState = {
  quest: TDetailQuest;
  status: FetchStatus;
}

const initialState: TQuestState = {
  quest: {} as TDetailQuest,
  status: FetchStatus.Idle,
};

const questSlice = createSlice({
  name: 'quest',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuest.pending, (state) => {
        state.status = FetchStatus.Pending;
      })

      .addCase(fetchQuest.fulfilled, (state, action) => {
        state.status = FetchStatus.Fulfilled;
        state.quest = action.payload;
      })

      .addCase(fetchQuest.rejected, (state) => {
        state.status = FetchStatus.Rejected;
      });
  },
});

export default questSlice.reducer;
