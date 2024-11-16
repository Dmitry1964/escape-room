import { createApi } from '../api/api';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import questsList from 'src/slices/quest-list-slice/quests-list-slice';
import detailedQuest from 'src/slices/quest-slice/quest-slice';
import userAuthStatus from 'src/slices/authorization-slice/authorization-slice';
import bookingQuestInfo from 'src/slices/booking-info-slice/booking-info-slice';
import reservationQuest from 'src/slices/reservation-quest-slice/reservation-quest-slice';
import reservationList from 'src/slices/reservation-list-slice/reservation-list-slice';

const api = createApi();

const rootReducer = combineReducers({
  questsList,
  detailedQuest,
  userAuthStatus,
  bookingQuestInfo,
  reservationQuest,
  reservationList,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddeware) =>
    getDefaultMiddeware({
      thunk: {
        extraArgument: api,
      }
    })
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
