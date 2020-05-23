import React from 'react';

import Layout from '../components/layout';
import Feature from '../components/feature';

const ProjectPage = () => (
  <Layout title="Projects">
    <div className="w-3/4 md:w-1/2 lg:w-1/2 pt-16">
      <div className="flex flex-col justify-center items-center w-full">
      <Feature image="https://cdn.vox-cdn.com/thumbor/79AufWwkOKkzA6dbCV9x__QQxQc=/100x0:1180x720/2050x1367/cdn.vox-cdn.com/uploads/chorus_image/image/35138008/STF_van.0.png" link="https://github.com/varunsindwani/agni" title="Agni" />
      <Feature image="https://miro.medium.com/max/10000/0*QE8-UPHjBRIe3G6M" link="https://github.com/rao-lang/rao" title="Rao Lang" />
      <Feature image="https://cdn.dribbble.com/users/4046465/screenshots/11132424/media/7b96002c6fdf8b6768e2c0fe65407043.jpg" link="https://github.com/varunsindwani/todoswipe" title="TODOSWIPE" />
      </div>
    </div>
  </Layout>
);

export default ProjectPage;
