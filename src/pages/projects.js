import React from 'react';
import Layout from '../components/layout';
// import Image from './image';
// import Points from './points';
// import PropTypes from 'prop-types';

const Feature = props =>  {
    //add blur filter to image
    var bg = {
        backgroundImage: `url(${props.image})`,
        // filter:`blur(1px)`,
    }

    return  (
        <a href={props.link} className="w-full max-w-3xl mb-8 font-main">
            <div className=" hover:opacity-100 rounded text-center overflow-hidden">
                <div
                className="py-40 inline-block transform hover:scale-105 transition 
                ease-out duration-700 w-full mx-auto bg-no-repeat bg-cover bg-center"
                style={bg}>
                    <div className="w-full text-black text-6xl font-bold absolute shadow -m-8 text-center mx-auto text-white">{props.title}</div>
                </div>
            </div>
        </a>
    );
}

const ProjectsPage = () => (
  <Layout>
      <div className="w-3/4 md:w-1/2 lg:w-1/2 pt-16">
      <div className="flex flex-col justify-center items-center w-full">
        <Feature  image="https://cdn.vox-cdn.com/thumbor/79AufWwkOKkzA6dbCV9x__QQxQc=/100x0:1180x720/2050x1367/cdn.vox-cdn.com/uploads/chorus_image/image/35138008/STF_van.0.png" 
                  link="https://github.com/varunsindwani/agni" 
                  title="AGNI" 
        />
        <Feature  image="https://miro.medium.com/max/10000/0*QE8-UPHjBRIe3G6M" 
                  link="https://github.com/raolang/rao" 
                  title="RAOLANG" 
        />
        <Feature  image="https://dr56wvhu2c8zo.cloudfront.net/indiegame/images/theme/36d41d68-a3a2-4b97-872c-9d1bd5d8bdca/IGTMStill_30.jpg" 
                  link="https://github.com/origamiengine/origami" 
                  title="ORIGAMI" 
        />
        <Feature  image="https://cdn.dribbble.com/users/4046465/screenshots/11132424/media/7b96002c6fdf8b6768e2c0fe65407043.jpg" 
                  link="https://github.com/varunsindwani/todoswipe" 
                  title="TODOSWIPE" 
        />
      </div>
    </div>
  </Layout>
);

export default ProjectsPage;