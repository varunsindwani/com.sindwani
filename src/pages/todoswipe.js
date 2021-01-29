import React, { useState } from 'react';
import {Link} from 'gatsby';
import Phone from '../assets/iphone.png';
import Varun from '../assets/images/varun.jpg'
import Figma from '../assets/icons/adobexd.png';
import Inkscape from '../assets/icons/inkscape.png';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import SWNI from '../assets/icons/swni.png';

import Twitter from '../assets/icons/twitter-logo.png'
import Instagram from '../assets/icons/instagram-logo.png'
import Linkedin from '../assets/icons/linkedin-logo.png'

import "../css/tailwind.css"

const Todoswipe = () => (
    <>
  <div className="font-main">
      <Header className="bg-red-400"/>
      <section className="bg-red-300 pt-32 pb-16 text-white font-bold text-center rounded-b-3xl">
        <div className="flex w-full max-w-5xl mx-auto">
            <div className="mb-32 w-1/2">
                <div className="flex">
                    <div className="rounded-lg bg-black w-20 h-20"></div>
                    <h1 className="text-3xl font-bold my-auto ml-4">Todoswipe</h1>
                </div>
                <div className="mt-48 text-left">
                    <h1 className="text-4xl font-bold">Daily Task Manager</h1>
                    <p className="mt-4">Lorem Ipsum</p>
                </div>
            </div>
            <div className="ml-auto w-1/2">
                <img src={Phone} className="ml-auto -mb-96 "/>
            </div>
        </div>
      </section>
      <section>
          Show being frustrated by all having multiple todo apps and managers
      </section>
      <section className="w-full">
        <div className="w-full max-w-4xl mx-auto my-20">
            <h1 className="text-red-500 uppercase text-md font-bold">Overview</h1>
            <h1 className="text-3xl font-bold text-black mt-4">About the project</h1>
            <div className="flex mt-6">
                <div className="w-1/2">
                   <div className="mb-6">
                       <h1 className="text-sm font-bold mb-2">Problem</h1>
                       <p>Being frustrated with all my todo apps I kept feeling disorganized and cluttered using apps werent helping my situation.</p>
                   </div>
                   <div>
                   <h1 className="text-sm font-bold mb-2">Solution</h1>
                   <p>Being frustrated with all my todo apps I kept feeling disorganized and cluttered using apps werent helping my situation.</p>
                   </div>
                </div>
                <div className="w-1/2 ml-16">
                    <h1 className="text-sm font-bold mb-2">Role</h1>
                    <div className="flex">
                        <img src={Varun} className="w-16 h-16 rounded-full" />
                        <div className="ml-4 my-auto">
                            <h1>Varun Sindwani</h1>
                            <h1>Designer</h1>
                        </div>
                    </div>
                    <div className="mt-4 flex">
                        <div className="flex border-red-500 px-2 py-1 border-2 w-24 rounded-lg mr-2 font-bold">
                            <img src={Figma} className="w-6 ml-auto mr-1" />
                            <h1 className="mr-auto">Figma</h1>
                        </div>
                        <div className="flex border-red-500 px-2 py-1 border-2 w-30 rounded-lg mr-2 font-bold">
                            <img src={Inkscape} className="w-6 ml-auto mr-1" />
                            <h1 className="mr-auto">Inkscape</h1>
                        </div>
                    </div>


                </div>
            </div>
        </div>
      </section>
      <section className="bg-red-100 mx-16 rounded-3xl py-16">
        <div className="max-w-4xl text-center mx-auto">
            <h1 className="text-red-500 uppercase text-md font-bold mb-4">The Challenge</h1>
            <p>Problem Statement</p>
            <div className="flex mx-auto max-w-xl mt-8">
                3 images - 3 objectives               
                Increase productivity
                decrease phone useage
                something else
            </div>

	    </div>
      </section>
      <section>
        <div className="w-full max-w-4xl mx-auto mt-20">
            <h1 className="text-red-500 uppercase text-md font-bold">Timeline</h1>
            <h1 className="text-3xl font-bold text-black mt-4">My Journey</h1>
            <div className="flex justify-between text-center mt-6">
                <div>
                    <div className="w-24 h-24 bg-red-500"></div>
                    <h1 className="mt-4">Research</h1>
                    <p>
                        
                    </p>
                </div>
                <div>
                    <div className="w-24 h-24 bg-red-500"></div>
                    <h1 className="mt-4">Insights</h1>
                </div>
                <div>
                    <div className="w-24 h-24 bg-red-500"></div>
                    <h1 className="mt-4">Ideation</h1>
                </div>
                <div>
                    <div className="w-24 h-24 bg-red-500"></div>
                    <h1 className="mt-4">Testing</h1>
                </div>
                <div>
                    <div className="w-24 h-24 bg-red-500"></div>
                    <h1 className="mt-4">Wireframe</h1>
                </div>
                <div>
                    <div className="w-24 h-24 bg-red-500"></div>
                    <h1 className="mt-4">Testing</h1>
                </div>
                <div>
                    <div className="w-24 h-24 bg-red-500"></div>
                    <h1 className="mt-4">Solution</h1>
                </div>
                <div>
                    <div className="w-24 h-24 bg-red-500"></div>
                    <h1 className="mt-4">Testing</h1>
                </div>
                <div>
                    <div className="w-24 h-24 bg-red-500"></div>
                    <h1 className="mt-4">Reflections</h1>
                </div>
            </div>
        </div>
      </section>
      <section>
        <div className="w-full max-w-4xl mx-auto mt-20">
            <h1 className="text-red-500 uppercase text-md font-bold">Research</h1>
            <h1 className="text-3xl font-bold text-black mt-4">My Journey</h1>
            <p> 
            Reaserch objectives
                        “What are you going to do with this information?” 
    “What decisions is it going to inform?” 
    “How are you going to leverage these insights?”

    “Who are the users you are designing this for?”
    “What problems and needs do they have?” 
    “What are the pain points using the product?”
    “Why are they not using it?” 
    Interviews, survey, observations, journey map, user flow, 
            </p>
        </div>
      </section>
      <section>
        <div className="w-full max-w-4xl mx-auto mt-20">
            <h1 className="text-red-500 uppercase text-md font-bold">Research Insights
            user persona, 
            </h1>
            
        </div>
      </section>
      <section>
        <div className="w-full max-w-4xl mx-auto mt-20">
            <h1 className="text-red-500 uppercase text-md font-bold">Ideation</h1>
            
        </div>
      </section>
      <section>
        <div className="w-full max-w-4xl mx-auto mt-20">
            <h1 className="text-red-500 uppercase text-md font-bold">Rationale</h1>
            
        </div>
      </section>
      <section>
        <div className="w-full max-w-4xl mx-auto mt-20">
            <h1 className="text-red-500 uppercase text-md font-bold">Wireframe
             + branding and colors and typography
            </h1>
            
        </div>
      </section>
      <section>
        <div className="w-full max-w-4xl mx-auto mt-20">
            <h1 className="text-red-500 uppercase text-md font-bold">Solution</h1>
            
        </div>
      </section>
      <section>
        <div className="w-full max-w-4xl mx-auto mt-20">
            <h1 className="text-red-500 uppercase text-md font-bold">Reflection</h1>
            
        </div>
      </section>
      <section>
          Previous
          Next 
          Projects
      </section>
      
  </div>
  <Footer />
  </>
);

export default Todoswipe;


const Header = () =>  {
  // const divEl = document.querySelector('#my_div');
  // const text = "SINDWANI"
  // divEl.addEventListener('mouseenter', () => text = "AGGESG");
  const [text, setText] = useState("SINDWANI");
  const [isExpanded, toggleExpansion] = useState(false);
  return  (
    <header className="bg-red-500">
    <div className="flex flex-wrap items-center justify-between px-4 lg:px-16 py-8  mx-auto font-main uppercase ">
      <Fade>
      <Link to="/">
        <h1 className="flex items-center text-white no-underline">
        <Link to="/" className="flex w-48" 
       onMouseEnter={() => setText("सिंदवानी")}
       onMouseLeave={() => setText("SINDWANI")}
      >
          <img src={SWNI} className="w-12 h-12 bg-white"/>
          <h1 className="ml-4 text-white font-bold my-auto text-xl w-16">{text}</h1>
        </Link>
        </h1>
      </Link>
      </Fade>
      <button
        className="items-center block px-3 py-2 text-white border border-white rounded md:hidden"
        onClick={() => toggleExpansion(!isExpanded)}
      >
        <svg
          className="w-3 h-3 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>

      <nav
        className={`${
          isExpanded ? `block` : `hidden`
        } md:block md:flex md:justify-between font-bold text-white md:items-center w-full max-w-lg `}
      >
          <Slide down delay={300}><a href="https://res.sindwani.com" target="_blank" rel="noopener noreferrer">Work</a></Slide>
          <Slide down delay={400}><Link to="/projects">Projects</Link></Slide>
          <Slide down delay={500}><Link to="/contact">Contact</Link></Slide>
          <Slide down delay={600}><a href="https://instagam.com/varun.sindwani" target="_blank" rel="noopener noreferrer" className="w-4 h-4 my-auto"><img src={Instagram} /></a></Slide>
          <Slide down delay={700}><a href="https://twitter.com/varunsindwani" target="_blank" rel="noopener noreferrer" className="w-4 h-4 my-auto"><img src={Twitter} /></a></Slide>
          <Slide down delay={800}><a href="https://linkedin.com/in/varunsindwani" target="_blank" rel="noopener noreferrer" className="w-4 h-4 my-auto"><img src={Linkedin} /></a></Slide>
      </nav>
    </div>
  </header>
  );
}


const Footer = () =>    {
    return(
      <footer id="courses" className="bg-red-500 pt-12 text-white px-8">
        <div className=" max-w-5xl mx-auto flex flex-col md:flex-row ">
          <div className="mx-auto md:mx-0 mb-16 md:mb-0">
            <img src={SWNI} className="w-20"/>
          </div>
          <div className="sm:mr-0 mr-auto ml-auto flex flex-col md:flex-row text-center md:text-left">
          <div className="mr-0 md:mr-16">
            <h1 className="font-bold text-md">About Me</h1>
            <h1 className="mt-2"> <Link to="/#">Intro</Link></h1>
            <h1><Link to="/#more">Services</Link></h1>
          </div>
          <div className="mr-0 md:mr-16">
            <h1 className="font-bold text-md">Follow Me</h1>
            <h1 className="mt-2"><a href="https://instagam.com/varun.sindwani" target="_blank" rel="noopener noreferrer" >Instagram</a></h1>
            <h1><a href="https://linkedin.com/in/varunsindwani" target="_blank" rel="noopener noreferrer" >Linkedin</a></h1>
            <h1 className="mb-8"><a href="https://github.com/varunsindwani" target="_blank" rel="noopener noreferrer" >Github</a></h1>
          </div>
          <div>
            <h1 className="font-bold text-md">Contact</h1>
            <h1 className="mt-2"><span className="mr-2">E. </span>varun@sindwani.com</h1>
          </div>
        </div>
      </div>
    </footer>
    );
}