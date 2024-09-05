import { createApi } from '../api/api';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import questsList from 'src/slices/quest-list-slice/quests-list-slice';

const api = createApi()


const rootReducer = combineReducers({
  questsList,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddeware) =>
    getDefaultMiddeware({
      thunk: {
        extraArgument: api,
      }
    })
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
