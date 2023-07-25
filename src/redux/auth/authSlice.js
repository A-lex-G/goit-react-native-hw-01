import { createSlice } from '@reduxjs/toolkit';
import { register, LogIn, LogOut, refreshUser } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: handleFulfilled,
    [LogIn.fulfilled]: handleFulfilled,
    [LogOut.fulfilled](state) {
      state.user = { name: null, emai: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export const authReducer = authSlice.reducer;
