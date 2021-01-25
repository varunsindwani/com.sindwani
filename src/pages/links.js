import React from 'react';
import {Link} from 'gatsby';

import Varun from '../assets/images/varun.jpg'
import Instagram from '../assets/icons/instagram-logo.png';
import Youtube from '../assets/icons/youtube-logo.png';
import Github from '../assets/icons/github-logo.png';
import Twitter from '../assets/icons/twitter-logo.png';
import Linkedin from '../assets/icons/linkedin-logo.png';

const Links = () => {
    var bg = {
        backgroundImage: `url(https://media.istockphoto.com/vectors/programming-code-application-window-vector-id1124838925?k=6&m=1124838925&s=612x612&w=0&h=TbuwIMLPlZxN9jbuTcJanRwX33tkgNF7_PiIPvpPVm4=)`,
    }

    return(
    <div className="bg-primary min-h-screen text-white font-main flex flex-col">
        <div className="">
            <div className="w-full max-w-xs mx-auto pt-16">
                <div className="mb-8 bg-one rounded-3xl py-8">
                    <div>
                        <img src={Varun} className="w-24 h-24 rounded-full mx-auto"/>
                        <h1 className="text-xl font-bold text-center mt-2">Varun Sindwani </h1> 
                        <h1 className="text-xs font-bold text-center mt-2">@varun.sindwani </h1>  
                    </div>
                    <div className="mt-4">
                        <div className="rounded-lg border-4 border-white bg-two px-4 py-2 text-center mx-4">
                            ✌️ Looking for work
                        </div>
                    </div>
                    <div className="flex justify-between mx-6 mt-8">
                        <a href="https://www.instagram.com/varun.sindwani/">
                            <img src={Instagram} className="w-6 h-6"/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCqoGMeWTAUQBDCpnY_zff-w/">
                            <img src={Youtube} className="w-6 h-6"/>
                        </a>
                        <a href="https://www.github.com/varunsindwani/">
                            <img src={Github} className="w-6 h-6"/>
                        </a>
                        <a href="https://twitter.com/VarunSindwani">
                            <img src={Twitter} className="w-6 h-6"/>
                        </a>
                        <a href="https://www.linkedin.com/in/varunsindwani/">
                            <img src={Linkedin} className="w-6 h-6"/>
                        </a>

                    </div>
                </div>
                <div>
               
                </div>
                <Link to="/" className="w-full max-w-xs mb-8 font-main">
                    <div className=" hover:opacity-100 rounded text-center overflow-hidden">
                        <div
                        className="py-24 rounded-3xl inline-block transform hover:scale-105 transition 
                        ease-out duration-700 w-full mx-auto bg-no-repeat bg-cover bg-center"
                        style={bg}>
                            <div className="w-full text-6xl font-bold absolute shadow -m-8 text-center mx-auto text-white">Portfolio</div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        {/* <div className="mt-auto">
            footer
        </div> */}
    </div>
    )
};

export default Links;
