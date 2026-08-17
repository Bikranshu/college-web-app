import { createContext, useCallback, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { JWT_TOKEN, USERNAME, EMAIL, USER_ID } from "../../constants";

import { setLocalStorage, clearLocalStorage } from "../../utils/storage";

import { useLoginMutation, useSignupMutation } from "../../pages/auth/authApi";
import { login as setAuth, logout } from "../../pages/auth/authSlice";
import { useAppSelector } from "../../store/hooks";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const [signup] = useSignupMutation();

  const user = useAppSelector((state) => state.auth.user);
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const signUp = async (payload) => {
    try {
      await signup(payload).unwrap();
      navigate("/dashboard", { replace: true });
    } catch (error) {
      throw new Error("Failed to create account");
    }
  };

  const signIn = async (username, password) => {
    try {
      const result = await login({
        username,
        password,
      }).unwrap();

      if (result) {
        const firstName = result?.firstName || "";
        const lastName = result?.lastName || "";
        const fullName = `${firstName} ${lastName}`.trim();
        const accessToken = result?.accessToken;

        setLocalStorage(JWT_TOKEN, accessToken);
        setLocalStorage(USERNAME, fullName);
        setLocalStorage(USER_ID, result?.id);
        setLocalStorage(EMAIL, result?.email);
        dispatch(
          setAuth({
            accessToken,
            user: {
              id: result?.id,
              username: fullName,
              email: result?.email,
            },
            refreshToken: result?.refreshToken || null,
          }),
        );
        navigate("/dashboard", { replace: true });
      }
    } catch (error) {
      throw new Error("Failed to sign in");
    }
  };

  const signOut = useCallback(async () => {
    try {
      clearLocalStorage(JWT_TOKEN);
      clearLocalStorage(USERNAME);
      clearLocalStorage(EMAIL);
      clearLocalStorage(USER_ID);
      dispatch(logout());
      navigate("/auth/login", { replace: true });
    } catch (error) {
      console.error("Failed to sign out:", error);
      navigate("/auth/login", { replace: true });
    }
  }, [navigate, dispatch]);

  const value = useMemo(
    () => ({
      user,
      accessToken,
      isAuthenticated,
      signIn,
      signUp,
      signOut,
    }),
    [user, accessToken, isAuthenticated, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};
