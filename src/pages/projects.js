import React from 'react';
import Layout from '../components/layout';
// import Image from './image';
// import Points from './points';
// import PropTypes from 'prop-types';
import SEO from '../components/seo';
import Fade from 'react-reveal/Fade';
import Header from '../components/header';
 
import JC from "../assets/jc.png"
import Valerian from "../assets/valerian.png"
import Banner from "../assets/banner.png"
import HTA from "../assets/hta.png"

import Origami from "../assets/origami.png"

import JCLogo from "../assets/jc-logo.png"
import Crown from "../assets/crown.png"
import Leaf from "../assets/leaf.png"
import Bookmark from "../assets/bookmark.png"

const Feature = props => {
  var bg = {
    backgroundImage: `url("${props.image}")`,
    
  }
  return(
    <div className="w-full max-w-6xl bg-yellow-300 text-black h-full pl-16 py-16 mx-auto rounded-lg my-16 flex flex-row bg-cover bg-center" style={bg} >
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
      <div className="ml-auto -mr-16  my-auto w-full max-w-xl">
        {/* <img src={JC} /> */}
      </div>
    </div>
  )
}


const ProjectsPage = () => {
  var todoswipe = {
    backgroundImage: `url("${"https://cdn.dribbble.com/users/4046465/screenshots/11132424/media/7b96002c6fdf8b6768e2c0fe65407043.jpg"}")`,
    
  }
  var origami = {
    backgroundImage: `url("${Origami}")`,
    
  }
  return(
  <Layout>
    <SEO title="Varun Sindwani | Projects" />
    <section className="bg-primary pb-16 w-full font-main min-h-screen h-full flex flex-col">
      <Fade delay={500}>
        <Header />
      </Fade>
      <Fade delay={1100}>
        <section className="h-full m-auto w-full">
          {/*  */}
          <div className="w-full max-w-6xl bg-jc text-white h-full pl-16 py-16 mx-auto rounded-lg my-16 flex flex-row bg-cover bg-center">
            <div className="w-1/2">
              <img src={JCLogo} className="w-12"/>
              <div className="flex max-w-sm w-full mt-10  text-sm">
                <div className="px-4 py-2 bg-gray-300 rounded-lg mr-4">Web App</div>
              </div>
              <h1 className="mt-10 text-5xl font-bold">Education platform to empower students</h1>
              <div className="flex flex-row mt-10 max-w-lg w-full pr-6">
                <div>
                  <div>‣ Product Strategy</div>
                  <div className="mt-4">‣ UI/UX</div>
                </div>
                <div className="ml-auto">
                  <div>‣ Developement</div>
                  <div className="mt-4">‣ Design System</div>
                </div>
              </div>
              <div className="mt-10 px-4 py-3 rounded-lg bg-yellow-500 w-40 text-center text-white font-bold border-8 border-whtie">Coming Soon</div>
            </div>
            <div className="ml-auto -mr-16  my-auto w-full max-w-xl">
              <img src={JC} />
            </div>
          </div>
          {/*  */}
          <div className="w-full max-w-6xl bg-jc text-white h-full pl-16 py-16 mx-auto rounded-lg my-16 flex flex-row" style={todoswipe}>
            <div className="w-1/2">
              {/* <img src={JCLogo} className="w-12"/> */}
              <div className="flex max-w-sm w-full mt-10  text-sm">
                <div className="px-4 py-2 bg-gray-300 rounded-lg mr-4">Mobile App</div>
              </div>
              <h1 className="mt-10 text-5xl font-bold">A revamped daily task manager</h1>
              <div className="flex flex-row mt-10 max-w-lg w-full pr-6">
                <div>
                  <div>‣ Product Strategy</div>
                  <div className="mt-4">‣ UI/UX</div>
                </div>
                <div className="ml-auto">
                  <div>‣ Developement</div>
                  <div className="mt-4">‣ Design System</div>
                </div>
              </div>
              <div className="mt-10 px-4 py-3 rounded-lg bg-gray-800 w-40 text-center text-white font-bold border-8 border-white">Coming Soon</div>
            </div>
            <div className="ml-auto -mr-16  my-auto w-full max-w-xl">
              {/* <img src={JC} /> */}
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="w-full max-w-6xl bg-jc text-white h-full pl-16 py-16 mx-auto rounded-lg my-16 flex flex-row" style={origami}>
            <div className="w-1/2">
              {/* <img src={JCLogo} className="w-12"/> */}
              <div className="flex max-w-sm w-full mt-10  text-sm">
                <div className="px-4 py-2 bg-gray-300 rounded-lg mr-4">Framework</div>
              </div>
              <h1 className="mt-10 text-5xl font-bold">A Game Engine for online play</h1>
              <div className="flex flex-row mt-10 max-w-lg w-full pr-6">
                <div>
                  <div>‣ Product Strategy</div>
                  <div className="mt-4">‣ UI/UX</div>
                </div>
                <div className="ml-auto">
                  <div>‣ Developement</div>
                  <div className="mt-4">‣ Design System</div>
                </div>
              </div>
              <div className="mt-10 px-4 py-3 rounded-lg bg-gray-800 w-40 text-center text-white font-bold border-8 border-white">Coming Soon</div>
            </div>
            <div className="ml-auto -mr-16  my-auto w-full max-w-xl">
              {/* <img src={HTA} /> */}
            </div>
          </div>
          {/*  */}
          {/* <Feature name="Raolang" image="https://miro.medium.com/max/10000/0*QE8-UPHjBRIe3G6M"/> */}
           {/*  */}
           <div className="w-full max-w-6xl bg-jc text-white h-full pl-16 py-16 mx-auto rounded-lg my-16 flex flex-row bg-cover bg-center">
            <div className="w-1/2">
              <img src={Crown} className="w-12"/>
              <div className="flex max-w-sm w-full mt-10  text-sm">
                <div className="px-4 py-2 bg-gray-300 rounded-lg mr-4">Web App</div>
              </div>
              <h1 className="mt-10 text-5xl font-bold">Canada's Largest Game Dev Hackathon</h1>
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
              <div className="mt-10 px-4 py-3 rounded-lg bg-yellow-500 w-40 text-center text-white font-bold border-white border-8">Coming Soon</div>
            </div>
            <div className="ml-auto -mr-16  my-auto w-full max-w-xl">
              <img src={HTA} />
            </div>
          </div>
          {/*  */}
          {/* <Feature name="Agni" image="https://cdn.vox-cdn.com/thumbor/79AufWwkOKkzA6dbCV9x__QQxQc=/100x0:1180x720/2050x1367/cdn.vox-cdn.com/uploads/chorus_image/image/35138008/STF_van.0.png"/> */}
           {/*  */}
           <div className="w-full max-w-6xl bg-valerian text-white h-full pl-16 py-16 mx-auto rounded-lg my-16 flex flex-row bg-cover bg-center">
            <div className="w-1/2">
              <img src={Leaf} className="w-12"/>
              <div className="flex max-w-sm w-full mt-10  text-sm">
                <div className="px-4 py-2 bg-gray-300 rounded-lg mr-4">Web App</div>
              </div>
              <h1 className="mt-10 text-5xl font-bold">Early stage coding bootcamp</h1>
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
              <div className="mt-10 px-4 py-3 rounded-lg bg-valerian w-40 text-center text-white font-bold border-8 border-white">Coming Soon</div>
            </div>
            <div className="ml-auto -mr-16  my-auto w-full max-w-xl">
              <img src={Valerian} />
            </div>
          </div>
          {/*  */}
           {/*  */}
           <div className="w-full max-w-6xl bg-banner text-white h-full pl-16 py-16 mx-auto rounded-lg my-16 flex flex-row bg-cover bg-center">
            <div className="w-1/2">
              <img src={Bookmark} className="w-12"/>
              <div className="flex max-w-sm w-full mt-10  text-sm">
                <div className="px-4 py-2 bg-gray-300 rounded-lg mr-4">Web App</div>
              </div>
              <h1 className="mt-10 text-5xl font-bold">A new way for authors to connect to publishers</h1>
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
              <div className="mt-10 px-4 py-3 rounded-lg bg-banner w-40 text-center text-white font-bold border-8 border-white">Coming Soon</div>
            </div>
            <div className="ml-auto -mr-16  my-auto w-full max-w-xl">
              <img src={Banner} />
            </div>
          </div>
          {/*  */}
        </section>
      </Fade>
    </section>
  </Layout>
  )
}
export default ProjectsPage;