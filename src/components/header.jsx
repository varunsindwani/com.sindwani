import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header className="max-w-full">
    <nav className="flex text-right">
      <h5 className="items-right">Home</h5>
      <h5 className="items-right">Work</h5>
      <h5 className="items-right">Projects</h5>
      <h5 className="items-right">Contact</h5>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
