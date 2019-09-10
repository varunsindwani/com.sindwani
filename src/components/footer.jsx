import React from 'react';
import Image from './image';

const Footer = () =>    {
    return(
        <footer className="bg-gray-800 w-full p-1">
        <section className="text-center">
          <div className="inline-flex items-center w-3 m-3">
            <Image filename="instagram-logo.png" />
          </div>
          <div className="inline-flex items-center w-3 m-3">
            <Image filename="youtube-logo.png" />
          </div>
          <div className="inline-flex items-center w-3 m-3">
            <Image filename="github-logo.png" />
          </div>
          <div className="inline-flex items-center w-3 m-3">
            <Image filename="email-logo.png" />
          </div>
          <div className="inline-flex items-center w-3 m-3">
            <Image filename="linkedin-logo.png" />
          </div>
        </section>
      </footer>
    );
}

export default Footer;