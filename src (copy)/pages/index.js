import React from 'react';
import "../css/tailwind.css"
import Layout from '../components/layout';
import Intro from '../sections/intro';
import Companies from '../sections/companies';
import Tablist from '../sections/tablist';
import Terminal from '../sections/terminal';
import AboutMe from '../sections/aboutme';
import CTA from '../sections/cta';

const IndexPage = () => (
  <Layout>
    <Intro />
    <Companies />
    <Tablist />
    <Terminal />
    <AboutMe />
    <CTA />
  </Layout>
);

export default IndexPage;