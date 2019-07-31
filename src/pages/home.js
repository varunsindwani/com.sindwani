import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="flex">
      <div className="ml-64">
        <h1 className="text-5xl text-white font-bold">Hi, I'm Varun</h1>
        <h2 className="text-2xl text-white whitespace-no-wrap overflow-auto">I build things and sometimes they work</h2>
      </div>
      <div className="w-full">
        <Image filename="profile-pic.png" />
      </div>
    </div>
    {/* <Link to="/page-2/" className="text-center font-bold underline">Click to 404</Link> */}
  </Layout>
);

export default HomePage;
