import React from 'react';
import PropTypes from 'prop-types';

import SEO from '../components/seo';
import Header from './header';
import Footer from './footer';

const Layout = ({children}) => {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }
  return (
    <div className="flex flex-col min-h-screen font-main">
      <Header />
      <main className="flex flex-col flex-1 w-full items-center ">
        <SEO title="Varun Sindwani" />
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
