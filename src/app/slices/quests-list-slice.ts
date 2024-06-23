import { createSlice } from "@reduxjs/toolkit";
import { FetchStatus, TQuest } from "src/shared";
import { fetchQuestsList } from "../actions/api-actions";

type QuestsListState = {
  questsList: TQuest[];
  status: FetchStatus;
}


const initialState : QuestsListState = {
  questsList: [],
  status: FetchStatus.Idle,
}

const questsListSlice = createSlice({
  name: 'questsList',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsList.pending, (state) => {
        state.status = FetchStatus.Pending;
      })

      .addCase(fetchQuestsList.fulfilled, (state, action) => {
        state.status = FetchStatus.Fulfilled;
        state.questsList = action.payload;
      })
  },
})

export default questsListSlice.reducer;
