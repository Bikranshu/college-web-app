import { Link } from "react-router-dom";
import {
  EnvelopeIcon,
  MapPinIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";

import krishnaTimilsinaLogo from "../assets/krishna-timilsina-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-slate-200 bg-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-flex items-center transition-opacity duration-200 hover:opacity-80"
            >
              <img
                src={krishnaTimilsinaLogo}
                alt="Krishna Timilsina"
                className="h-16 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-6 text-slate-500">
              Building meaningful digital experiences with modern technology,
              thoughtful design, and reliable solutions.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <EnvelopeIcon className="h-5 w-5 shrink-0 text-blue-600" />
                <a
                  href="mailto:hello@example.com"
                  className="transition-colors hover:text-blue-600"
                >
                  hello@example.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-500">
                <MapPinIcon className="h-5 w-5 shrink-0 text-blue-600" />
                <span>Kathmandu, Nepal</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-slate-500 transition-colors hover:text-blue-600"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about-us"
                  className="text-sm text-slate-500 transition-colors hover:text-blue-600"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/collection"
                  className="text-sm text-slate-500 transition-colors hover:text-blue-600"
                >
                  Collection
                </Link>
              </li>

              <li>
                <Link
                  to="/contact-us"
                  className="text-sm text-slate-500 transition-colors hover:text-blue-600"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Information
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-slate-500 transition-colors hover:text-blue-600"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="text-sm text-slate-500 transition-colors hover:text-blue-600"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  to="/faq"
                  className="text-sm text-slate-500 transition-colors hover:text-blue-600"
                >
                  FAQ
                </Link>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Twitter / X"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                <span className="text-sm font-bold">𝕏</span>
              </a>

              <a
                href="#"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                <span className="text-sm font-bold">in</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-xs text-slate-500 sm:text-left">
            © {currentYear}{" "}
            <span className="font-medium text-slate-700">
              Krishna Timilsina
            </span>
            . All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-5">
            <Link
              to="/privacy"
              className="text-xs text-slate-500 transition-colors hover:text-blue-600"
            >
              Privacy
            </Link>

            <Link
              to="/terms"
              className="text-xs text-slate-500 transition-colors hover:text-blue-600"
            >
              Terms
            </Link>

            {/* Back to top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="group flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              aria-label="Back to top"
            >
              <ArrowUpIcon className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
