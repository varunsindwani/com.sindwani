import React from 'react';

import Layout from '../components/layout';
import Instagram from '../assets/icons/instagram-logo.png';
import Youtube from '../assets/icons/youtube-logo.png';
import Github from '../assets/icons/github-logo.png';
import Twitter from '../assets/icons/twitter-logo.png';
import Linkedin from '../assets/icons/linkedin-logo.png';

const ContactPage = () => (
  <Layout>
    <div className="w-full bg-primary h-full min-h-screen">
    <section className="mt-24 font-main text-white text-center ">
        <h1 className="text-4xl font-bold">Contact</h1>
        <h2 className="text-xl mt-4">🤟 If you want to say hi! Best way to contact me is on social media 🤟</h2>
      </section>
      <section className="w-full text-center mt-8 flex flex-row justify-center items-center ">
        <div className="inline-block items-center w-10 md:w-8 m-2 md:m-8 transform hover:scale-110 transition ease-out duration-700">
            <a href="https://www.instagram.com/varun.sindwani/">
              <img src={Instagram} />
            </a>
          </div>
          <div className="inline-block items-center w-10 md:w-8 m-2 md:m-8 transform hover:scale-110 transition ease-out duration-700">
            <a href="https://www.youtube.com/channel/UCqoGMeWTAUQBDCpnY_zff-w/">
            <img src={Youtube} />
            </a>
          </div>
          <div className="inline-block items-center w-10 md:w-8 m-2 md:m-8 transform hover:scale-110 transition ease-out duration-700">
            <a href="https://www.github.com/varunsindwani/">
            <img src={Github} />
            </a>
          </div>
          <div className="inline-block items-center w-10 md:w-8 m-2 md:m-8 transform hover:scale-110 transition ease-out duration-700">
            <a href="https://twitter.com/VarunSindwani">
            <img src={Twitter} />
            </a>
          </div>
          <div className="inline-block items-center w-10 md:w-8 m-2 md:m-8 transform hover:scale-110 transition ease-out duration-700">
            <a href="https://www.linkedin.com/in/varunsindwani/">
            <img src={Linkedin} />
            </a>
          </div>
      </section>
      <section className="mt-8 font-main text-white text-center">
        <h1 className="text-xl mt-4">For all business inquiries, please email me 👋</h1>
        <h2 className="text-lg mt-4">varun@sindwani.com</h2>
      </section>
      </div>
  </Layout>
);

export default ContactPage;
