import { createSlice} from '@reduxjs/toolkit/react';
import { fetchQuestsList } from 'src/app/actions/api-actions';
import { TQuest } from 'src/app/types/app-types';
import { FetchStatus } from 'src/shared/constans';


type TQuestsListState = {
  quests: TQuest[];
  status: FetchStatus;
}


const initialState : TQuestsListState = {
  quests: [],
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
        state.quests = action.payload;
      })

      .addCase(fetchQuestsList.rejected, (state) => {
        state.status = FetchStatus.Rejected;
              })
  },
})

export default questsListSlice.reducer;
