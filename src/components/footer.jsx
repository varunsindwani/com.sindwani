import React from 'react';
import Image from './image';

const Footer = () =>    {
    return(
        <footer className="bg-gray-800 w-full p-1 mt-16">
        <section className="text-center">
          <div className="inline-block items-center w-3 m-3">
            <a href="https://www.instagram.com/varun.sindwani/">
              <Image filename="instagram-logo.png" />
            </a>
          </div>
          <div className="inline-block items-center w-3 m-3">
            <a href="https://www.youtube.com/channel/UCqoGMeWTAUQBDCpnY_zff-w/">
              <Image filename="youtube-logo.png" />
            </a>
          </div>
          <div className="inline-block items-center w-3 m-3">
            <a href="https://www.github.com/varunsindwani">
              <Image filename="github-logo.png" />
            </a>
          </div>
          <div className="inline-block items-center w-3 m-3">
            <a href="https://twitter.com/VarunSindwani">
              <Image filename="twitter-logo.png" />
            </a>
          </div>
          <div className="inline-block items-center w-3 m-3">
            <a href="https://www.linkedin.com/in/varunsindwani">
              <Image filename="linkedin-logo.png" />
            </a>
          </div>
        </section>
      </footer>
    );
}

export default Footer;