import { Link } from "gatsby";
import React, { useState } from "react";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import SWNI from '../assets/icons/swni.png';

import Twitter from '../assets/icons/twitter-logo.png'
import Instagram from '../assets/icons/instagram-logo.png'
import Linkedin from '../assets/icons/linkedin-logo.png'

const Header = () =>  {
  // const divEl = document.querySelector('#my_div');
  // const text = "SINDWANI"
  // divEl.addEventListener('mouseenter', () => text = "AGGESG");
  const [text, setText] = useState("SINDWANI");
  const [isExpanded, toggleExpansion] = useState(false);
  return  (
    //  <div className="bg-primary uppercase font-main">
    //    <div className=" px-16 pt-8 pb-4 flex">
    //   <Link to="/" className="flex w-48" 
    //    onMouseEnter={() => setText("सिंदवानी")}
    //    onMouseLeave={() => setText("SINDWANI")}
    //   >
    //       <img src={SWNI} className="w-12 h-12 bg-white"/>
    //       <h1 className="ml-4 text-white font-bold my-auto text-xl w-16">{text}</h1>
    //     </Link>
    //     <div className="text-white font-bold ml-auto my-auto w-full max-w-lg">
    //       <ul className="flex justify-between">
    //         <a href="https://res.sindwani.com" target="_blank" rel="noopener noreferrer">Work</a>
    //         <Link to="/projects">Projects</Link>
    //         <Link to="/contact">Contact</Link>
    //         <a href="https://instagam.com/varun.sindwani" target="_blank" rel="noopener noreferrer" className="w-4 h-4 my-auto"><img src={Instagram} /></a>
    //         <a href="https://twitter.com/varunsindwani" target="_blank" rel="noopener noreferrer" className="w-4 h-4 my-auto"><img src={Twitter} /></a>
    //         <a href="https://linkedin.com/in/varunsindwani" target="_blank" rel="noopener noreferrer" className="w-4 h-4 my-auto"><img src={Linkedin} /></a>
    //       </ul>
    //     </div>
    //    </div>
    //  </div>
    <header className="bg-primary">
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

export default Header;
