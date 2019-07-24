import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    
    <Link to="/page-2/" className="text-center font-bold underline">Click to 404</Link>
  </Layout>
);

export default HomePage;
