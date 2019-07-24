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
    <div className="flex flex-col min-h-screen bg-purple-700">
      <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px4 py-8 md:p-8 w-full">
        {children}
      </main>
      <footer className="bg-gray-800 w-full p-4">
        <section className="text-center">
          <div className="inline-flex items-center w-8 m-3">
            <Image filename="instagram-logo.png" />
          </div>
          <div className="inline-flex items-center w-8 m-3">
            <Image filename="instagram-logo.png" />
          </div>
          <div className="inline-flex items-center w-8 m-3">
            <Image filename="instagram-logo.png" />
          </div>
          <div className="inline-flex items-center w-8 m-3">
            <Image filename="instagram-logo.png" />
          </div>
          <div className="inline-flex items-center w-8 m-3">
            <Image filename="instagram-logo.png" />
          </div>
        </section>

      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
