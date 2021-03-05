import React from 'react';
import Layout from '../components/layout';
// import Image from './image';
// import Points from './points';
// import PropTypes from 'prop-types';
import SEO from '../components/seo';
import Fade from 'react-reveal/Fade';
import Header from '../components/header';

const ProjectsPage = () => (
  <Layout>
    <SEO title="Varun Sindwani | Projects" />
    <section className="bg-primary pb-16 w-full font-main min-h-screen h-full flex flex-col">
      <Fade delay={500}>
        <Header />
      </Fade>
      <Fade delay={1100}>
        stuff
      </Fade>
    </section>
  </Layout>
);

export default ProjectsPage;