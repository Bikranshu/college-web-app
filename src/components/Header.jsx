import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowRightOnRectangleIcon,
  ArrowLeftOnRectangleIcon,
  Squares2X2Icon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

import krishnaTimilsinaLogo from "../assets/krishna-timilsina-logo.png";

import { useAuth } from "../contexts/auth";

const navigation = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About Us",
    to: "/about-us",
  },
  {
    name: "Collection",
    to: "/collection",
  },
  {
    name: "Contact Us",
    to: "/contact-us",
  },
];

const Header = () => {
  const { isAuthenticated, user, signOut } = useAuth();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl">
      <nav>
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="group flex shrink-0 items-center"
          >
            <img
              src={krishnaTimilsinaLogo}
              alt="Krishna Timilsina"
              className="h-11 w-auto max-w-[190px] object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:h-12 sm:max-w-[220px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center md:flex">
            <div className="flex items-center bg-slate-50/70 p-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      "group relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                      isActive
                        ? "bg-white text-blue-600 shadow-sm"
                        : "text-slate-600 hover:bg-white/70 hover:text-blue-600",
                    ].join(" ")
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{item.name}</span>

                      {isActive && (
                        <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 md:flex">
            {isAuthenticated ? (
              <>
                {/* User */}
                <Link
                  to="/dashboard"
                  className="group flex items-center gap-2 rounded-full px-3 py-2 transition-colors hover:bg-slate-100"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-xs font-bold text-white shadow-sm">
                    {user?.username?.charAt(0)?.toUpperCase() || "U"}
                  </div>

                  <div className="hidden lg:block">
                    <p className="max-w-28 truncate text-xs font-semibold text-slate-800">
                      {user?.username || "User"}
                    </p>
                  </div>
                </Link>

                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
                >
                  <Squares2X2Icon className="h-4 w-4" />
                  <span className="hidden lg:inline">Dashboard</span>
                </Link>

                <button
                  type="button"
                  onClick={signOut}
                  className="group flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                >
                  <ArrowLeftOnRectangleIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  <span className="hidden lg:inline">Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/auth/login"
                  className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-blue-600"
                >
                  <ArrowRightOnRectangleIcon className="h-4 w-4" />
                  Sign In
                </Link>

                <Link
                  to="/auth/signup"
                  className="group flex items-center gap-1 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-500/25 active:translate-y-0"
                >
                  Sign Up
                  <ChevronRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((previous) => !previous)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={[
            "overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 md:hidden",
            mobileMenuOpen
              ? "max-h-[600px] opacity-100"
              : "max-h-0 border-t-transparent opacity-0",
          ].join(" ")}
        >
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            {/* Navigation */}
            <div className="space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    [
                      "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all",
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-600 hover:bg-slate-50 hover:text-blue-600",
                    ].join(" ")
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.name}</span>

                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-blue-600" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <div className="my-4 h-px bg-slate-100" />

            {/* Mobile Actions */}
            {isAuthenticated ? (
              <div className="space-y-2">
                {/* User */}
                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 font-bold text-white">
                    {user?.username?.charAt(0)?.toUpperCase() || "U"}
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-800">
                      {user?.username || "User"}
                    </p>

                    <p className="truncate text-xs text-slate-500">
                      {user?.email || ""}
                    </p>
                  </div>
                </div>

                <Link
                  to="/dashboard"
                  onClick={closeMobileMenu}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-600"
                >
                  <Squares2X2Icon className="h-5 w-5" />
                  Dashboard
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    closeMobileMenu();
                    signOut();
                  }}
                  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-red-50 hover:text-red-600"
                >
                  <ArrowLeftOnRectangleIcon className="h-5 w-5" />
                  Logout
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/auth/login"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                >
                  <ArrowRightOnRectangleIcon className="h-4 w-4" />
                  Sign In
                </Link>

                <Link
                  to="/auth/signup"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-md"
                >
                  Sign Up
                  <ChevronRightIcon className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
