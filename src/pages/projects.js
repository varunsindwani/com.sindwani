import React from 'react';
import Layout from '../components/layout';
// import Image from './image';
// import Points from './points';
// import PropTypes from 'prop-types';
import SEO from '../components/seo';
import Fade from 'react-reveal/Fade';
import Header from '../components/header';


const Feature = props => {
  return(
    <div className="w-full max-w-6xl bg-white h-full px-16 py-16 mx-auto rounded-lg my-16 flex flex-row">
      <div className="w-1/2">
        <div>Logo</div>
        <div className="flex max-w-sm w-full mt-10 font-bold text-sm">
          <div className="px-4 py-2 bg-gray-200 rounded-lg mr-4">Web App</div>
          <div className="px-4 py-2 bg-gray-200 rounded-lg mr-4">Web App</div>
          <div className="px-4 py-2 bg-gray-200 rounded-lg mr-4">Web App</div>
        </div>
        <h1 className="mt-10 text-5xl font-bold">{props.name}</h1>
        <div className="flex flex-row mt-10 max-w-lg w-full pr-6">
          <div>
            <div>‣ Product Strategy</div>
            <div className="mt-4">‣ UI/UX</div>
          </div>
          <div className="ml-auto">
            <div>‣ Developement</div>
            <div className="mt-4">‣ Point 1</div>
          </div>
        </div>
        <div className="mt-10 px-4 py-3 rounded-lg bg-one w-40 text-center text-white font-bold">Coming Soon</div>
      </div>
      <div className="m-auto w-1/2">
        img
      </div>
    </div>
  )
}


const ProjectsPage = () => (
  <Layout>
    <SEO title="Varun Sindwani | Projects" />
    <section className="bg-primary pb-16 w-full font-main min-h-screen h-full flex flex-col">
      <Fade delay={500}>
        <Header />
      </Fade>
      <Fade delay={1100}>
        <section className="h-full m-auto w-full">
          <Feature name="Jos College"/>
          <Feature name="Todoswipe"/>
          <Feature name="Origami"/>
          <Feature name="Raolang"/>
          <Feature name="HackTheArena"/>
          <Feature name="Agni"/>
        </section>
      </Fade>
    </section>
  </Layout>
);

export default ProjectsPage;