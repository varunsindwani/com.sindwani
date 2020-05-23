import { Link } from "gatsby";
import React, { useState } from "react";

import SWNI from '../assets/icons/swni.png';

const Header = () =>  {

  const [isExpanded, toggleExpansion] = useState(false);
  return  (
      <nav className="bg-purple-700">
        <div className="flex flex-wrap items-center justify-between p-4 md:p-4 w-full">
          <div className="pl-1 lg:pl-5">
            <Link to="/">
              <img 
                src={SWNI}
                className="h-12 w-12 inline-block "
              />
            </Link>
          </div>
          <button
            className="block md:invisible flex flex-col items-center py-2 text-white ml-auto"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              className="fill-current h-8 w-8"
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
              } md:block md:flex md:items-center w-full md:w-auto text-center`}
            >
            <div className="md:text-md lg:text-xl font-main">
              <Link
                to="/"
                className="block md:inline-block mt-4 md:mt-0 mr-0 md:mr-6 no-underline"
              >
                <button className="font-bold py-2 px-4 rounded hover:text-white hover:bg-purple-700 bg-purple-700 text-white">
                  Home
                </button>
              </Link>

              <Link
                to="/work"
                className="block md:inline-block mt-4 md:mt-0 mr-0 md:mr-6 no-underline text-purple-700 font-bold"
              >
                <button className="font-bold py-2 px-4 rounded hover:text-white hover:bg-purple-700 bg-purple-700 text-white">
                  Work
                </button>
              </Link>

              <Link
                to="/projects"
                className="block md:inline-block mt-4 md:mt-0 mr-0 md:mr-6 no-underline text-purple-700 font-bold"
              >
                <button className="font-bold py-2 px-4 rounded hover:text-white hover:bg-purple-700 bg-purple-700 text-white">
                  Projects
                </button>
              </Link>

              <Link
                to="/contact"
                className="block md:inline-block mt-4 md:mt-0 mr-0 md:mr-6 no-underline text-purple-700 font-bold"
              >
                <button className="font-bold py-2 px-4 rounded hover:text-white hover:bg-purple-700 bg-purple-700 text-white">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

  );
}

export default Header;
