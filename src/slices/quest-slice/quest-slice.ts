import { createSlice } from '@reduxjs/toolkit';
import { fetchQuest } from 'src/app/actions/api-actions';
import { FetchStatus } from 'src/shared/constans';
import {QuestLevelNames, QuestTypeNames, TDetailQuest } from 'src/shared/types/app-types';


type TQuestState = {
  quest: TDetailQuest;
  status: FetchStatus;
}

const initialState: TQuestState = {
  quest: {
    coverImg: '',
    coverImgWebp: '',
    description: '',
    id: '',
    level: QuestLevelNames.Any,
    peopleMinMax: [1,2],
    previewImg: '',
    previewImgWebp: '',
    title: '',
    type: QuestTypeNames.All
  },
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
