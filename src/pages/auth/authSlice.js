import { createSlice } from "@reduxjs/toolkit";

import {
  JWT_TOKEN,
  USERNAME,
  EMAIL,
  USER_ID,
} from "../../constants";

import { getLocalStorage } from "../../utils/storage";

/**
 * Restore authentication data from local storage.
 *
 * The Redux store is recreated when the browser is refreshed,
 * so the JWT and basic user information are loaded from local storage
 * to preserve the authenticated state.
 */
const accessToken = getLocalStorage(JWT_TOKEN);
const username = getLocalStorage(USERNAME);
const email = getLocalStorage(EMAIL);
const userId = getLocalStorage(USER_ID);

/**
 * Initial authentication state.
 *
 * @typedef {Object} AuthState
 * @property {Object|null} user - The authenticated user.
 * @property {string|null} user.id - The authenticated user's ID.
 * @property {string|null} user.username - The authenticated user's name.
 * @property {string|null} user.email - The authenticated user's email.
 * @property {string|null} accessToken - The JWT access token.
 * @property {string|null} refreshToken - The JWT refresh token.
 * @property {boolean} isAuthenticated - Whether the user is authenticated.
 */

const initialState = {
  user: accessToken
    ? {
        id: userId || null,
        username: username || null,
        email: email || null,
      }
    : null,
  accessToken: accessToken || null,
  refreshToken: null,
  isAuthenticated: Boolean(accessToken),
};

/**
 * Authentication slice.
 *
 * Manages the authenticated user's information,
 * access token, refresh token, and authentication status.
 */
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    /**
     * Authenticate a user.
     *
     * Updates the authenticated user, access token,
     * refresh token, and authentication status.
     *
     * @param {AuthState} state - Current authentication state.
     * @param {Object} action - Redux action.
     * @param {Object} action.payload - Authentication payload.
     * @param {Object|null} action.payload.user - Authenticated user.
     * @param {string|null} action.payload.accessToken - JWT access token.
     * @param {string|null} [action.payload.refreshToken=null] - JWT refresh token.
     *
     * @example
     * dispatch(
     *   login({
     *     user: {
     *       id: "123",
     *       username: "John Doe",
     *       email: "john@example.com",
     *     },
     *     accessToken: "access-token",
     *     refreshToken: "refresh-token",
     *   })
     * );
     */
    login: (state, action) => {
      const {
        user = null,
        accessToken = null,
        refreshToken = null,
      } = action.payload;

      state.user = user;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.isAuthenticated = Boolean(accessToken);
    },

    /**
     * Log out the current user.
     *
     * Clears the authenticated user, access token,
     * refresh token, and authentication status.
     *
     * @param {AuthState} state - Current authentication state.
     */
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
    },
  },
});


export const {
  login,
  logout,
} = authSlice.actions;


export default authSlice.reducer;