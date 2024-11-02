import { createSlice } from '@reduxjs/toolkit';
import { checkUserAuthData, setUserAuthorization } from 'src/app/actions/api-actions';
import { AuthStatus } from 'src/shared/types/app-types';


type TAutorizationState = {
  authStatus: AuthStatus;
  user: {
    email: string;
    token: string;
  };
};

const initialState: TAutorizationState = {
  authStatus: AuthStatus.Unknown,
  user: {
    email: '',
    token: '',
  }
};

const authorizationSlice = createSlice({
  name: 'authStatus',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkUserAuthData.pending, (state) => {
        state.authStatus = AuthStatus.Unknown;
      })

      .addCase(checkUserAuthData.fulfilled, (state, action) => {
        state.authStatus = AuthStatus.Auth;
        state.user = action.payload;
      })

      .addCase(checkUserAuthData.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth;
      })

      .addCase(setUserAuthorization.pending, (state) => {
        state.authStatus = AuthStatus.Unknown;
      })

      .addCase(setUserAuthorization.fulfilled, (state, action) => {
        state.authStatus = AuthStatus.Auth;
        state.user = action.payload;
      })

      .addCase(setUserAuthorization.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth;
        state.user.email = '';
        state.user.token = '';
      });
  },
});


export default authorizationSlice.reducer;
