import authOperations from './auth-operations';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const user = createReducer(
  { name: null, email: null },
  {
    [authOperations.register.fulfilled]: (state, { payload }) => ({
      name: payload.user.name,
      email: payload.user.email,
    }),
    [authOperations.logIn.fulfilled]: (state, { payload }) => ({
      name: payload.user.name,
      email: payload.user.email,
    }),
    [authOperations.logOut.fulfilled]: (state, { payload }) => ({
      name: null,
      email: null,
    }),
    [authOperations.checkCurrentUser.fulfilled]: (state, { payload }) => ({
      name: payload.name,
      email: payload.email,
    }),
  },
);

const token = createReducer(null, {
  [authOperations.register.fulfilled]: (state, { payload }) => payload.token,
  [authOperations.logIn.fulfilled]: (state, { payload }) => payload.token,
  [authOperations.logOut.fulfilled]: () => null,
});

const isLoggedIn = createReducer(false, {
  [authOperations.register.fulfilled]: () => true,
  [authOperations.logIn.fulfilled]: () => true,
  [authOperations.logOut.fulfilled]: () => false,
  [authOperations.checkCurrentUser.fulfilled]: () => true,
});

const isLogging = createReducer(false, {
  [authOperations.checkCurrentUser.pending]: () => true,
  [authOperations.checkCurrentUser.fulfilled]: () => false,
  [authOperations.checkCurrentUser.rejected]: () => false,
});

export default combineReducers({ user, token, isLoggedIn, isLogging });
