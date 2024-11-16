import { createSlice } from '@reduxjs/toolkit';
import { setBookQuest } from 'src/app/actions/api-actions';
import { FetchStatus } from 'src/shared/constans';
import { QuestLevelNames, QuestTypeNames, TBookingUsersInfo } from 'src/shared/types/app-types';


type TReservationQuestState = {
  reservationQuest: TBookingUsersInfo;
  status: FetchStatus;
};

const initialState: TReservationQuestState = {
  reservationQuest: {
    contastPerson: '',
    date: 'today',
    bookingId: '',
    location: {
      address: '',
      coords: [0, 0]
    },
    peopleCount: 1,
    phone: '',
    time: '',
    withChildren: false,
    quest: {
      id: '',
      level: QuestLevelNames.Any,
      peopleMinMax: [1, 2],
      previewImg: '',
      previewImgWebp: '',
      title: '',
      type: QuestTypeNames.All
    }
  },
  status: FetchStatus.Idle,
};

const reservationlistSlice = createSlice({
  name: 'reservatuonList',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(setBookQuest.pending, (state) => {
        state.status = FetchStatus.Pending;
      })

      .addCase(setBookQuest.fulfilled, (state, action) => {
        state.status = FetchStatus.Fulfilled;
        state.reservationQuest = action.payload;
      })

      .addCase(setBookQuest.rejected, (state) => {
        state.status = FetchStatus.Rejected;
      });
  },
});

export default reservationlistSlice.reducer;
