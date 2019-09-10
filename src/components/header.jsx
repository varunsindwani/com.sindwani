import { Link } from "gatsby";
import React, { useState } from "react";

const Header = () =>  {

  const [isExpanded, toggleExpansion] = useState(false);
  return  (
      <nav className="">
        <div className="flex flex-wrap items-center max-w-4xl justify-between ml-auto p-4 md:p-8">
          <button
            className="block md:invisible border border-white flex items-center px-3 py-2 rounded text-white"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
          <div
              className={`${
                isExpanded ? `block` : `hidden`
              } md:block md:flex md:items-center w-full md:w-auto`}
            >
            <div className="text-sm">
              <Link
                to="/"
                className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white font-bold"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white font-bold"
              >
                About
              </Link>

              <Link
                to="/work"
                className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white font-bold"
              >
                Work
              </Link>

              <Link
                to="/projects"
                className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white font-bold"
              >
                Projects
              </Link>

              <Link
                to="/contact"
                className="block md:inline-block mt-4 md:mt-0 no-underline text-white font-bold"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

  );
}

export default Header;
