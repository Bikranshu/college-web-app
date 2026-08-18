import { Routes, Route } from "react-router";
import { Navigate } from "react-router-dom";

import PublicRoute from "../routes/PublicRoute";
import PrivateRoute from "../routes/PrivateRoute";

import AppLayout from "../layouts/AppLayout";
import AuthLayout from "../layouts/AuthLayout";

import Home from "../pages/home";
import About from "../pages/about";
import Collection from "../pages/collection";
import CollectionDetail from "../pages/collection/Detail";
import Contact from "../pages/contact";
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
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route
            path="/collection/detail/:productId"
            element={<CollectionDetail />}
          />
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
