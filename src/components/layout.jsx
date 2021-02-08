import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Header from './header';
import Footer from './footer';

const Layout = ({children}) => {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }
  return (
    <div className="flex flex-col min-h-screen font-main bg-primary">
      <Fade delay={500}>
      <Header />
      </Fade>
      <Fade delay={1100}>
      <main className="flex flex-col flex-1 w-full items-center bg-white">
        {children}
      </main>
      </Fade>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
