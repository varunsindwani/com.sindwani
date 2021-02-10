import React from 'react';
import { Link } from "gatsby";

import SWNI from '../assets/icons/swni.png'

const Footer = () =>    {
    return(
      <footer id="courses" className="bg-primary pt-12 text-white px-8">
        <div className="m-4 max-w-5xl mx-auto flex flex-col md:flex-row mb-8 ">
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
            <h1 className="mt-2"><a href="https://instagram.com/varun.sindwani" target="_blank" rel="noopener noreferrer" >Instagram</a></h1>
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

export default Footer;