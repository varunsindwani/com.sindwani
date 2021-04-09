import { Link } from "gatsby";
import React, { useState } from "react";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import SWNI from '../assets/icons/swni.png';
import Search from "../assets/search.png"

const Header = () =>  {
  const [text, setText] = useState("SINDWANI");
  const [isExpanded, toggleExpansion] = useState(false);
  return  (
    <header className="bg-primary w-full">
    <div className="flex flex-wrap items-center justify-between px-4 lg:px-16 py-8  mx-auto font-main uppercase w-full">
      <div className="w-1/5">
      <Fade>
        <Link to="/"z>
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
      </div>
      <div className="w-3/5">
      <nav className=" md:justify-between font-bold text-white md:items-center w-full flex flex-row max-w-xl mx-auto">
          <Slide down delay={300}><Link to="/capabilities">Capabilities</Link></Slide>
          <Slide down delay={400}><Link to="/projects">Work</Link></Slide>
          <Slide down delay={500}><Link to="/projects">Careers</Link></Slide>
          <Slide down delay={600}><Link to="/projects">Learn</Link></Slide>
          <Slide down delay={700}><Link to="/contact">Contact</Link></Slide>
          {/* <Slide down delay={600}><a href="https://instagram.com/varun.sindwani" target="_blank" rel="noopener noreferrer" className="w-6 h-6 my-auto"><img src={Instagram} /></a></Slide>
          <Slide down delay={700}><a href="https://twitter.com/varunsindwani" target="_blank" rel="noopener noreferrer" className="w-6 h-6 my-auto"><img src={Twitter} /></a></Slide>
          <Slide down delay={800}><a href="https://linkedin.com/in/varunsindwani" target="_blank" rel="noopener noreferrer" className="w-6 h-6 my-auto"><img src={Linkedin} /></a></Slide> */}
      </nav>
      </div>
      <div className="ml-auto text-white font-bold w-1/5 flex flex-row">
          <img src={Search} className="ml-auto w-6"/>
      </div>
    </div>
  </header>
  );
}

export default Header;
