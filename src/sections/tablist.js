import { Link } from "gatsby";
import React, { useState } from "react";
import Fade from 'react-reveal/Fade';

import Hexagon from '../assets/hexagon.png'
import Triangle from '../assets/triangle.png'
import Curious from '../assets/images/curious.png'
import Adaptable from '../assets/images/adaptable.png'
import TeamPlayer from '../assets/images/teamplayer.png'

import One from '../assets/ig-posts/1.png'
import Two from '../assets/ig-posts/2.png'
import Three from '../assets/ig-posts/3.png'
import Four from '../assets/ig-posts/4.png'
import Five from '../assets/ig-posts/5.png'
import Six from '../assets/ig-posts/6.png'
import Seven from '../assets/ig-posts/7.png'
import Eight from '../assets/ig-posts/8.png'
import Nine from '../assets/ig-posts/9.png'

const Tablist = () =>  {
    const [tabOne, setTabOne] = useState(true);
    const [tabTwo, setTabTwo] = useState(false);
    const [tabThree, setTabThree] = useState(false);
    const [tabFour, setTabFour] = useState(false);
    const buttonOne = () => {
        setTabOne(true);
        setTabTwo(false);
        setTabThree(false);
        setTabFour(false);
        Panel()
        Arrow1()
        Text1()
    }
    const buttonTwo = () => {
        setTabOne(false);
        setTabTwo(true);
        setTabThree(false);
        setTabFour(false);
        Panel()
        Arrow2()
        Text2()
    }
    const buttonThree = () => {
        setTabOne(false);
        setTabTwo(false);
        setTabThree(true);
        setTabFour(false);
        Panel()
        Arrow3()
        Text3()
    }
    const buttonFour = () => {
        setTabOne(false);
        setTabTwo(false);
        setTabThree(false);
        setTabFour(true);
        Panel()
        Arrow4()
        Text4()
    }
    const Panel = () => {
        if(tabOne == true)  {
            return (
                <div className="h-64 w-full max-w-4xl mx-auto">
                    <div className="mt-8 flex">
                       <div className="w-2/3 text-left pr-12 my-auto">
                            <h1 className="mb-8">I am a Full Stack Developer, I have experience with Frontend (ReactJS, Javascript, TailwindCSS, etc), Backend (Django, NodeJS, C, Rust, etc),
                            Databases (PostgreSQL, MongoDB, etc).
                            </h1>
                            
                            <h1 className="mb-8">Check out my projects tab and my Github for some of the stuff I have been working on!
                            <a href="https://github.com/varunsindwani" className="font-bold underline inline ml-4" target="_blank" rel="noopener noreferrer">Link</a></h1>
                            <a href="https://github.com/varunsindwani" className="font-bold underline" target="_blank" rel="noopener noreferrer">Learn More</a>
                       </div>
                       <div className="ml-auto w-1/3">
                       <a href="https://instagam.com/varun.sindwani" target="_blank" rel="noopener noreferrer" className="">
                            <img src="https://assets.entrepreneur.com/content/3x2/2000/20150708172005-coding-working-workspace-apple-macintosh.jpeg" 
                            className="w-full"/>
                        </a>
                       </div>
                    </div>
                </div>
            )
        }

        if(tabTwo == true)  {
            return (
                <div className="h-64 w-full max-w-4xl mx-auto">
                    <div className="mt-8 flex">
                       <div className="w-2/3 text-left pr-12 my-auto">
                            <h1 className="mb-8">After Programming for a while and building a variety of Apps I started taking some Design courses at one of the
                            best Art Universities in Canada. I wanted to learn more about the User and how they interact with technology. 
                            </h1>
                            
                            <h1 className="mb-8">When I start designing a App I first learn about the problem I am solving, talk to potential users and build user personas,
                            then I create low fidelity designs and test + get feedback, I continue from their till I reach my final product.
                            </h1>

                       </div>
                       <div className="ml-auto w-1/3">
                       <a href="https://instagam.com/varun.sindwani" target="_blank" rel="noopener noreferrer" className="">
                            <img src="https://s3.amazonaws.com/www-inside-design/uploads/2017/12/ux-sketching-1.jpg" className=""/>
                        </a>
                       </div>
                    </div>
                </div>
            )
        }

        if(tabThree == true)  {
            return (
                <div className="h-64 w-full max-w-4xl mx-auto">
                    <div className="mt-8 flex">
                       <div className="w-2/3 text-left pr-12 my-auto">
                            <h1 className="mb-8">I help people and businesses create their personal brand. I help craft a mission statement, develop a
                            consistent style, and grow my clients following. 
                            </h1>
                            
                            <h1 className="mb-8">For my instagram, my goal was to help educate new programmers. On the right, you can see an example of my posts which all follow a
                                style guide.
                            </h1>
                            <h1 className="mb-8">Here are some free assets I have released, more to come! <a href="https://drive.google.com/drive/folders/14GEuC8VelYN4kilrSXZPFvgRU2TjXpjg?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-bold underline inline ml-4">Link</a></h1>
                            <a href="https://instagram.com/varun.sindwani"  target="_blank" rel="noopener noreferrer" className="font-bold underline">Learn More</a>
                       </div>
                       <div className="ml-auto">
                       <a href="https://instagam.com/varun.sindwani" target="_blank" rel="noopener noreferrer" className="grid grid-cols-3 gap-2 ml-auto">
                            <img src={One} className="rounded w-24 h-24"/>
                            <img src={Two}  className="rounded w-24 h-24"/>
                            <img src={Three}  className="rounded w-24 h-24"/>
                            <img src={Four} className=" rounded w-24 h-24" />
                            <img src={Five} className=" rounded w-24 h-24" />
                            <img src={Six}  className=" rounded w-24 h-24"/>
                            <img src={Seven}  className=" rounded w-24 h-24"/>
                            <img src={Eight} className=" rounded w-24 h-24" />
                            <img src={Nine}  className=" rounded w-24 h-24"/>
                        </a>
                       </div>
                    </div>
                </div>
            )
        }

        if(tabFour == true)  {
            return (
                <div className="h-64 w-full max-w-4xl mx-auto  flex max-h-full">
                    <div className="m-auto h-full w-full">
                       More Coming Soon!
                    </div>
                </div>
            )
        }
    }
    const Arrow1 = () =>    {
        if(tabOne == true)  {
            return (
                <div className="mx-auto">
                    <img src={Triangle} />
                </div>
            )
        }
        else    {
            return (
                <div className="w-1">

                </div>
            )
        }
    }
    const Arrow2 = () =>    {
        if(tabTwo == true)  {
            return (
                <div className="mx-auto">
                    <img src={Triangle} />
                </div>
            )
        }
        else    {
            return (
                <div className="w-1">
                    
                </div>
            )
        }
    }
    const Arrow3 = () =>    {
        if(tabThree == true)  {
            return (
                <div className="mx-auto">
                    <img src={Triangle} />
                </div>
            )
        }
        else    {
            return (
                <div className="w-1">
                    
                </div>
            )
        }
    }
    const Arrow4 = () =>    {
        if(tabFour == true)  {
            return (
                <div className="mx-auto">
                    <img src={Triangle} />
                </div>
            )
        }
        else    {
            return (
                <div className="w-1">
                    
                </div>
            )
        }
    }

    const Text1 = () =>    {
        if(tabOne == true)  {
            return (
                <h1 className="mt-4 text-lg captialize text-center mb-2 text-highlight">Engineering</h1>
            )
        }
        else    {
            return (
                <h1 className="mt-4 text-lg captialize text-center mb-2">Engineering</h1>
            )
        }
    }

    const Text2 = () =>    {
        if(tabTwo == true)  {
            return (
                <h1 className="mt-4 text-lg captialize text-center mb-2 text-highlight">UI/UX</h1>
            )
        }
        else    {
            return (
                <h1 className="mt-4 text-lg captialize text-center mb-2">UI/UX</h1>
            )
        }
    }

    const Text3 = () =>    {
        if(tabThree == true)  {
            return (
                <h1 className="mt-4 text-lg captialize text-center mb-2 text-highlight">Marketing</h1>
            )
        }
        else    {
            return (
                <h1 className="mt-4 text-lg captialize text-center mb-2">Marketing</h1>
            )
        }
    }

    const Text4 = () =>    {
        if(tabFour == true)  {
            return (
                <h1 className="mt-4 text-lg captialize text-center mb-2 text-highlight">Product</h1>
            )
        }
        else    {
            return (
                <h1 className="mt-4 text-lg captialize text-center mb-2">Product</h1>
            )
        }
    }
    return  (
    <section className="bg-white w-full mt-16 mb-24">
        <h1 className="text-center font-bold text-3xl w-full">My Services</h1>
        <h1 className="text-center text-xl w-full mt-8">I help businesses surpass their goals.</h1>
        <ul className="mt-16 flex max-w-4xl mx-auto justify-between">
            <div className="h-48 flex flex-col">
                <div className="cursor-pointer" onClick={() => buttonOne()}>
                    <li className="">
                        <img src={Hexagon} className="w-24 mx-auto" />
                        {Text1()}   
                                                    
                    </li>
                </div>
                {Arrow1()}
            </div>
            <div className="h-48 flex flex-col">
                <div className="cursor-pointer" onClick={() => buttonTwo()}>
                    <li className="">
                        <img src={Hexagon} className="w-24 mx-auto" />
                        {Text2()}  
                                                        
                    </li>
                </div>
                {Arrow2()}
            </div>
            <div className="h-48 flex flex-col">
                <div className="cursor-pointer" onClick={() => buttonThree()}>
                    <li className="">
                        <img src={Hexagon} className="w-24 mx-auto" />
                        {Text3()}
                                                        
                    </li>
                </div>
                {Arrow3()}
            </div>
            <div className="h-48 flex flex-col">
                <div className="cursor-pointer" onClick={() => buttonFour()}>
                    <li className="">
                        <img src={Hexagon} className="w-24 mx-auto" />
                        {Text4()}
                                                
                    </li>
                </div>
                {Arrow4()}
            </div>
        </ul>
        <div className="text-center">
            {Panel()}
        </div>
        <ul className="flex flex-col lg:flex-row mt-32 max-w-4xl mx-auto">
            <li className="w-full px-16 lg:px-0 lg:w-64 mt-8">
                {/* <div className="w-24 bg-primary h-24 mx-auto"></div> */}
                <img src={Curious} className="mx-auto w-24 h-24"/>
                <h1 className="mt-6 text-md captialize text-center font-bold">Curious</h1> 
                <p className="text-center mt-4">I always want to learn news skills and apply them. I always try to learn something new.</p>
            </li>
            <li className="w-full px-16 lg:px-0 lg:w-64 mx-auto mt-8">
                <img src={TeamPlayer} className="mx-auto w-24 h-24"/>
                <h1 className="mt-6 text-md captialize text-center font-bold">Team Player</h1> 
                <p className="text-center mt-4">Getting to work with unique and interesting people is a privilege. Regardless of who and where people are I can integrate myself quickly and easily.</p>
            </li>
            <li className="w-full px-16 lg:px-0 lg:w-64 mt-8">
                <img src={Adaptable} className="mx-auto w-24 h-24"/>
                <h1 className="mt-6 text-md captialize text-center font-bold">Adaptable</h1> 
                <p className="text-center mt-4">No matter the environment or constraints I am a quick learner and I can fit in quickly and easily.</p>
            </li>
        </ul>
     </section>
  );
}

export default Tablist;
