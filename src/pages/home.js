import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container mx-auto flex flex-wrap flex-col-reverse md:flex-row ">
      <div className="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left">
        <h1 className="text-6xl text-white font-bold tracking-tight">Hi, I'm Varun</h1>
        <h2 className="text-2xl text-white tracking-wide mb-3">I build things and sometimes they work</h2>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ml-auto mr-auto md:m-0">
          <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
          <span>Resume</span>
        </button>
      </div>
      <div className="w-1/2 ml-auto mr-auto md:w-1/3 md:ml-auto md:mr-0">
        <Image filename="profile-pic.png" />
      </div>
    </div>
    {/* <div className="flex">
      <div className="ml-64">
        <h1 className="text-5xl text-white font-bold">Hi, I'm Varun</h1>
        <h2 className="text-2xl text-white whitespace-no-wrap overflow-auto">I build things and sometimes they work</h2>
      </div>
      <div className="w-full">
        <Image filename="profile-pic.png" />
      </div>
    </div>
    <Link to="/page-2/" className="text-center font-bold underline">Click to 404</Link> */}
  </Layout>
);

export default HomePage;
