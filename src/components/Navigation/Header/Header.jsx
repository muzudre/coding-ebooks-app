import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";

const header = () => (
  <>
    <p className="bg-sky-500 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
      All ebooks in this web page is under open license.
    </p>

    <header className="shadow-sm">
      <div className="max-w-screen-xl p-4 mx-auto">
        <div className="flex items-center justify-between space-x-4 lg:space-x-10">
          <div className="flex lg:w-0 lg:flex-1">
            <Link
              className="flex title-font font-medium items-center text-gray-900 md:mb-0"
              to={"/"}
            >
              <img className="h-10 w-auto" src={Logo} alt="Workflow" />
              <span className="text-2xl font-extrabold text-gray-900"></span>
            </Link>
          </div>

          <nav className="hidden space-x-8 text-sm font-medium md:flex">
            <Link to="/" className="text-gray-500" href="">
              Home
            </Link>
            {/* <Link to="/" className="text-gray-500" href="">
              About
            </Link> */}
            <Link to="/terms" className="text-gray-500" href="">
              Terms
            </Link>
          </nav>

          <div className="items-center justify-end flex-1 space-x-4 sm:flex">
            <Link
              to="/app"
              className="px-5 py-2 text-sm font-medium text-white bg-sky-500 rounded-lg hover:text-white hover:bg-sky-400"
              href=""
            >
              Get App
            </Link>
          </div>

          {/* <div className="lg:hidden">
            <button
              className="p-2 text-gray-600 bg-gray-100 rounded-lg"
              type="button"
            >
              <span className="sr-only">Open menu</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </header>
  </>
);

export default header;
