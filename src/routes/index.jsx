import { Routes, Route } from "react-router";
import { Navigate } from "react-router-dom";

import PublicRoute from "../routes/PublicRoute";
import PrivateRoute from "../routes/PrivateRoute";

import AppLayout from "../layouts/AppLayout";
import AuthLayout from "../layouts/AuthLayout";

import Home from "../pages/home";
import Collection from "../pages/collection";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Dashboard from "../pages/dashboard";

const RouterRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route element={<AppLayout />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
        </Route>
      </Route>
      <Route element={<PrivateRoute />}>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RouterRoutes;
