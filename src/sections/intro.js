import React from 'react';
import { Link } from "gatsby";

import Varun from '../assets/images/varun.jpg'
import Header from "../components/header"
import Fade from 'react-reveal/Fade';

var ReactRotatingText = require('react-rotating-text');

const Intro = () =>    {
    return(
    <section className="bg-primary pb-16 w-full font-main min-h-screen h-full flex flex-col">
      <Fade delay={500}>
        <Header />
      </Fade>
      <Fade delay={1100}>
        <div className="container mx-auto flex flex-wrap flex-col-reverse md:flex-col-reverse lg:flex-row my-auto">
            <div className="flex flex-col md:w-4/5 lg:w-3/5 items-start text-center md:text-left mx-auto">
            <Fade >
                <h1 className="text-6xl text-white font-bold tracking-tight font-main mb-8">Hi, I'm Varun.</h1>
            </Fade>
            <Fade delay={1600}>
                <h2 className="text-2xl text-white tracking-wide mb-8">
                ✌️ I am the founder of SINDWANI a 🇨🇦 Toronto based 💻 Web Development Agency. Previously, I worked at a Microsoft Partner.     
                </h2>
            </Fade>
           
            <Fade delay={2100}>
                <h2 className="text-2xl text-white tracking-wide mb-8 ">
                 I lead ⚡ early stage startups through 🤕 complex problems by 🔧 crafting solutions with the power of 🎨 design.
                   
                </h2>
                </Fade>
                <Fade delay={2600}>
                <h2 className="text-2xl text-white tracking-wide mb-8">
                I serve as a 👨‍💻 Vice-President for the Systems and Computer Engineering Society of Carleton(SCESOC) and TEDxCU.</h2>
                </Fade>
                <Fade delay={3100}>
                <h2 className="text-2xl text-white tracking-wide mb-8">
                    I make 🏫 educational posts about programming on my Instagram. In my free time, I like
                    to 📖 read, 🍲 cook, and play 🕹️ games.
                </h2>
                </Fade>
                <Fade delay={3600}>
                <div className="flex text-white">
                    <Link to="/#more"><button className="bg-one px-4 py-2 mr-8 font-bold">Learn More</button></Link>
                    <Link to="/contact"><button className="bg-two px-4 py-2 font-bold">Get a Free Proposal</button></Link>
                </div>
                </Fade>
             
            </div>
            <Fade delay={3600}>
      <div className="w-1/2 mr-auto md:w-1/3 lg:w-1/4 md:ml-auto md:mr-auto text-center items-center flex flex-col justify-center mx-auto">
          <img src={Varun} className="inline-block w-full rounded-full" />
          <h1 className="text-white mx-auto font-bold text-2xl mt-6"><ReactRotatingText items={
              [
              'I put the hack in hacker',
              'Developer + Designer',
              'I teach coding',
              'Game Developer',
              ]} />
          </h1>
      </div>
      </Fade>
      </div>
      </Fade>
  </section>
);
}

export default Intro;

{/* <section className="bg-primary w-full min-h-screen py-12">
      <div className="px-32 xl:px-32 2xl:px-64 w-full mx-auto text-white flex">
        <div className="max-w-5xl">
        <h1 className="text-6xl text-white font-bold tracking-tight font-main mb-4">Hi, I'm Varun.</h1>
        <h2 className="text-2xl text-white tracking-wide mb-4">I currently work at <a href="https://www.bannerpublish.com" className="inline bg-gradient-to-t from-yellow to-white transition duration-700 hover:bg-blue-400">
                                                              Banner</a> as a Full Stack Developer. Previously I worked at a Microsoft Partner.</h2>
        <h2 className="text-2xl text-white tracking-wide mb-4 ">I serve as a Vice President for the Systems and Computer Engineering Society<a href="https://scesoc.com" className="inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400">(SCESOC)</a> and <a href="https://tedxcarleton.com" className="inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400"> TEDx</a>. I also run <a href="https://blastforward.org" className="inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400">
                                                              Blast</a>, <a href="https://hackcarleton.com" className="inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400">Hack</a>, and <a href="" className="inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400">OpenAPI</a>.</h2>
        <h2 className="text-2xl text-white tracking-wide mb-4">I am pursuing a Software Engineering (BEng) degree at <a href="https://carleton.ca" className="inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400">Carleton University</a> and studying UI/UX at <a href="https://ocadu.ca" className="inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400">OCAD</a>.</h2>
        <h2 className="text-2xl text-white tracking-wide mb-4">I ocasionally <a href="https://learnswe.com" className="inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400">blog</a> about tech, you can also find my thoughts on <a href="https://twitter.com/VarunSindwani" className="inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400">
                                                              twitter</a>, <a href="https://www.youtube.com/channel/UCqoGMeWTAUQBDCpnY_zff-w/" className="inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400">youtube</a>, and <a href="https://instagram.com/varun.sindwani" className="inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400">
                                                              instagram</a>. In my free time I like reading, cooking, and watching tv.</h2>
          <div className="flex mt-8">
          <Link to="/#more"><button className="bg-one px-4 py-2 mr-8 font-bold">Learn More</button></Link>
          <Link to="/contact"><button className="bg-two px-4 py-2 font-bold">Contact</button></Link>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <img src={Varun} className=" w-full max-w-sm rounded-full mx-auto mt-16"/>
          <h1 className="text-white mx-auto font-bold text-2xl mt-6"><ReactRotatingText items={
            [
              'Developer + Designer',
              'I put the hack in hacker',
              'I build things and sometimes they work'
            ]} />
          </h1>
        </div>
      </div>
    </section> */}