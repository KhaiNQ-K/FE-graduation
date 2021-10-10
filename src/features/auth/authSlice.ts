import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'models';
import { Set } from 'typescript';
export interface LoginPayload {
  email: string;
  password: string;
}
export interface SignUpPayload {
  email: string;
  password: string;
  role: Set<string>;
}
export interface authState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser?: User;
}

const initialState: authState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.logging = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.logging = false;
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.isLoggedIn = false;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
    register(state, action: PayloadAction<SignUpPayload>) {},
  },
});
//Actions
export const authActions = authSlice.actions;
//Selectors
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectIsLogging = (state: any) => state.auth.logging;
//Reducers

const authReducer = authSlice.reducer;

export default authReducer;
