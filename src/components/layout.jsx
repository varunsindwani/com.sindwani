import React from 'react';
import PropTypes from 'prop-types';

import SEO from '../components/seo';
import Header from './header';
import Footer from './footer';

const Layout = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
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
