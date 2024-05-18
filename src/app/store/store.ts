import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createApi } from 'src/shared/api/api';


const api = createApi();

const rootReducer = combineReducers({

});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddelware) =>
    getDefaultMiddelware({
      thunk: {
        extraArgument: api,
      }
    })
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
