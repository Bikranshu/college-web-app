import { apiSlice } from "../../api/apiSlice";
import { login } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            login({
              user: data.user,
              token: data.token,
              refreshToken: data.refreshToken ?? null,
              isAuthenticated: data.isAuthenticated ?? true,
            }),
          );
        } catch (error) {
          console.error("Login failed:", error);
        }
      },
    }),
    signup: builder.mutation({
      query: (credentials) => ({
        url: "/users/add",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            login({
              user: data.user,
              token: data.token,
              refreshToken: data.refreshToken ?? null,
              isAuthenticated: data.isAuthenticated ?? true,
            }),
          );
        } catch (error) {
          console.error("Signup failed:", error);
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation, useSignupMutation } = authApi;
