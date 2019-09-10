import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import WorkPanel from '../components/workpanel';

const WorkPage = () => (
  <Layout>
    <SEO title="Home" />
        <WorkPanel />
  </Layout>
);

export default WorkPage;
