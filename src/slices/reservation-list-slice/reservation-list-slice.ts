import { createSlice } from '@reduxjs/toolkit';
import { fetchReservationList } from 'src/app/actions/api-actions';
import { FetchStatus } from 'src/shared/constans';
import { TBookingUsersInfo } from 'src/shared/types/app-types';

type TReservationListState = {
  reservationList: TBookingUsersInfo[];
  status: FetchStatus;
};

const initialState: TReservationListState = {
  reservationList: [],
  status: FetchStatus.Idle,
};

const reservationListSlice = createSlice({
  name: 'reservation-list',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReservationList.pending, (state) => {
        state.status = FetchStatus.Pending;
      })

      .addCase(fetchReservationList.fulfilled, (state, action) => {
        state.status = FetchStatus.Fulfilled;
        state.reservationList = action.payload;
      })

      .addCase(fetchReservationList.rejected, (state) => {
        state.status = FetchStatus.Rejected;
      });
  },
});

export default reservationListSlice.reducer;
