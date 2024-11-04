import { createSlice } from '@reduxjs/toolkit';
import { fetchBookingInfo } from 'src/app/actions/api-actions';
import { FetchStatus } from 'src/shared/constans';
import { TBookingQuestInfo } from 'src/shared/types/app-types';


type TBookingInfoState = {
  bookingInfo: TBookingQuestInfo[];
  status: FetchStatus;
};

const initialState : TBookingInfoState = {
  bookingInfo: [],
  status: FetchStatus.Idle,
};


const bookingInfoSlice = createSlice({
  name: 'booking-info',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBookingInfo.pending, (state) => {
        state.status = FetchStatus.Pending;
      })

      .addCase(fetchBookingInfo.fulfilled, (state, action) => {
        state.status = FetchStatus.Fulfilled;
        state.bookingInfo = action.payload;
      })

      .addCase(fetchBookingInfo.rejected, (state) => {
        state.status = FetchStatus.Rejected;
      });
  },
});

export default bookingInfoSlice.reducer;
