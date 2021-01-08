import React from 'react';
import { Link } from "gatsby";

import Varun from '../assets/images/varun.jpg'


var ReactRotatingText = require('react-rotating-text');

const Intro = () =>    {
    return(
    <section className="bg-primary pb-16 w-full md:pt-10 lg:pt-8 font-main min-h-screen">
        <div className="container mx-auto flex flex-wrap flex-col-reverse md:flex-col-reverse lg:flex-row">
            <div className="flex flex-col md:w-4/5 lg:w-3/5 items-start text-center md:text-left mx-auto">
                <h1 className="text-6xl text-white font-bold tracking-tight font-main mb-8">Hi, I'm Varun.</h1>
                <h2 className="text-2xl text-white tracking-wide mb-8">
                    I'm a Developer by ☀️ day and a Designer by 🌕 night. I'm currently looking for work 😀. Previously, I worked at a Microsoft Partner.     
                </h2>
                <h2 className="text-2xl text-white tracking-wide mb-8 ">
                    I serve as a 👨‍💻 Vice-President for the Systems and Computer Engineering Society of Carleton(SCESOC) and TEDxCU.
                </h2>
                <h2 className="text-2xl text-white tracking-wide mb-8">I am studying 💻 Software Engineering (B. Eng) at Carleton Universtiy and 🎨 UI/UX at OCADU.</h2>
                <h2 className="text-2xl text-white tracking-wide mb-8">
                    I make 🏫 educational posts about programming on my Instagram, you can also find my thoughts on Twitter and Youtube. In my free time, I like
                    to 📖 read, 🍲 cook, and play 🕹️ games.
                </h2>
                <div className="flex text-white">
                    <Link to="/#more"><button className="bg-one px-4 py-2 mr-8 font-bold">Learn More</button></Link>
                    <Link to="/contact"><button className="bg-two px-4 py-2 font-bold">Contact</button></Link>
                </div>
            </div>
      <div className="w-1/2 mr-auto md:w-1/3 lg:w-1/4 md:ml-auto md:mr-auto text-center items-center flex flex-col justify-center mx-auto">
          <img src={Varun} className="inline-block w-full rounded-full" />
          <h1 className="text-white mx-auto font-bold text-2xl mt-6"><ReactRotatingText items={
              [
              'Developer + Designer',
              'I put the hack in hacker',
              'I build cool things',
              'Game Developer',
              ]} />
          </h1>
      </div>
      </div>
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