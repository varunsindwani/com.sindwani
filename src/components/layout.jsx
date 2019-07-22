import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Image from './image';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px4 py-8 md:p-8 w-full">
        {children}
      </main>
      <footer className="bg-gray-800 w-full p-3">
        <span className="flex flex-row flex-col">
          <ul className="text-gray-600 px-4 py-4 block ml-auto w-5">
            <Image filename="instagram-logo.png" />
          </ul>
          <ul type="button" className="text-gray-600 px-4 py-4 block w-5">
            <Image filename="instagram-logo.png" />
          </ul>
          <ul type="button" className="text-gray-600 px-4 py-4 block w-5">
            <Image filename="instagram-logo.png" />
          </ul>
          <ul type="button" className="text-gray-600 px-4 py-4 block mr-auto w-5">
            <Image filename="instagram-logo.png" alt="hello" />
          </ul>
        </span>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
