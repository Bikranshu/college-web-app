import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAuth } from "../contexts/auth";

const PrivateRoute = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  return !isAuthenticated ? (
    <Navigate to={"/auth/login"} state={{ from: location?.pathname }} replace />
  ) : (
    <Outlet />
  );
};

export default PrivateRoute;
