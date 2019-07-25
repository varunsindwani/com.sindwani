import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="flex">
      <div className="">
        <h1 className="text-5xl text-white font-bold">Hi, I'm Varun</h1>
        <h2 className="text-2xl text-white">I build things and sometimes they work</h2>
      </div>
      <div className="w-1/4 ml-64">
        <Image filename="profile-pic.png" />
      </div>
    </div>
    {/* <Link to="/page-2/" className="text-center font-bold underline">Click to 404</Link> */}
  </Layout>
);

export default HomePage;
