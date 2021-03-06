import React from 'react';
import "../css/tailwind.css"
import Layout from '../components/layout';
import Intro from '../sections/intro';
import Companies from '../sections/companies';
import Tablist from '../sections/tablist';
import Terminal from '../sections/terminal';
import AboutMe from '../sections/aboutme';
import CTA from '../sections/cta';
import Tri from '../assets/rtriangle.png'
import SEO from '../components/seo';
import Video from '../assets/clip.gif'
import one from '../assets/0.png'
import two from '../assets/1.png'
import three from '../assets/2.png'
import four from '../assets/3.png'
const IndexPage = () => {
  var bg = {
    backgroundImage: `url(${Video})`,
  }

  return(
    <Layout>
      <SEO title="Varun Sindwani" />
      <Intro />

      <div className="bg-primary w-full pb-32 rounded-lg">
        <div className="mx-auto flex max-w-6xl w-full rounded-lg">
        <a href="https://www.youtube.com/watch?v=eVEL-j_NHFw&ab_channel=VarunSindwani" target="_blank" rel="noopener noreferrer" className="w-full max-w-6xl mb-8 font-main  rounded-lg">
            <div className=" hover:opacity-100 text-center overflow-hidden rounded-lg">
                <div
                className="py-64 inline-block transform hover:scale-105 transition 
                ease-out duration-700 w-full mx-auto bg-no-repeat bg-contain bg-center rounded-lg top-0.5 left-0.5"
                style={bg}>
                    {/* <div className="w-full text-6xl font-bold absolute shadow text-center mx-auto text-white">Varun Sindwani</div> */}
                    <div className="w-32 h-32 bg-one rounded-full mx-auto flex">
                      <img src={Tri} className="w-10 h-10 mx-auto my-auto" />
                    </div>
                </div>
            </div>
        </a>
        </div>
      </div>
      <Companies />
      <Tablist />
      {/* <Terminal /> */}
      <section className="py-16 pb-48 bg-primary text-white w-full">
       <h1 className="text-center text-5xl text-white font-bold max-w-4xl mx-auto tracking-wide">
        Crafting Solutions to Complex Problems. Developing with a Design First Mindset.
       </h1>
       <p className="mt-16 mb-20 max-w-2xl mx-auto text-center text-xl">
         Combining Design, Engineering, Product, and Brand Strategy to create the perfect solution.
       </p>
       <div className="flex max-w-4xl justify-between mx-auto text-lg">
         <div className="flex">
          <img src={one} className="w-20"/>
           <div className="ml-4 my-auto">
             <h1 className="font-bold">Research</h1>
           </div>
         </div>
         <div className="flex">
            <img src={two} className="w-20"/>
           <div className="ml-4 my-auto">
             <h1>Ideate</h1>
           </div>
         </div>
         <div className="flex">
            <img src={three} className="w-20"/>
           <div className="ml-4 my-auto">
             <h1>Test</h1>
           </div>
         </div>
         <div className="flex">
            <img src={four} className="w-20"/>
           <div className="ml-4 my-auto">
             <h1>Develop</h1>
           </div>
         </div>
       </div>
      </section>
      <section>
        
      </section>

      {/* <AboutMe /> */}
      <CTA />
    </Layout>
  );
};
  

export default IndexPage;
