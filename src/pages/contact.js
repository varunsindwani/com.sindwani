import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import SEO from '../components/seo';
import Image from '../components/image';

const ContactPage = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex flex-col flex-1 w-full items-center bg-purple-700">
      <SEO title="Varun Sindwani" />
      <section className="mt-24 font-main text-white text-center">
        <h1 className="text-4xl font-bold">Contact</h1>
        <h2 className="text-xl mt-4">🤟 If you want to say hi! Best way to contact me is on social media 🤟</h2>
      </section>
      <section className="w-full text-center mt-8 flex flex-row justify-center items-center ">
        <div className="inline-block items-center w-10 md:w-8 m-2 md:m-8 transform hover:scale-110 transition ease-out duration-700">
            <a href="https://www.instagram.com/varun.sindwani/">
              <Image filename="instagram-logo.png" />
            </a>
          </div>
          <div className="inline-block items-center w-10 md:w-8 m-2 md:m-8 transform hover:scale-110 transition ease-out duration-700">
            <a href="https://www.youtube.com/channel/UCqoGMeWTAUQBDCpnY_zff-w/">
            <Image filename="youtube-logo.png" />
            </a>
          </div>
          <div className="inline-block items-center w-10 md:w-8 m-2 md:m-8 transform hover:scale-110 transition ease-out duration-700">
            <a href="https://www.github.com/varunsindwani/">
            <Image filename="github-logo.png" />
            </a>
          </div>
          <div className="inline-block items-center w-10 md:w-8 m-2 md:m-8 transform hover:scale-110 transition ease-out duration-700">
            <a href="https://twitter.com/VarunSindwani">
            <Image filename="twitter-logo.png" />
            </a>
          </div>
          <div className="inline-block items-center w-10 md:w-8 m-2 md:m-8 transform hover:scale-110 transition ease-out duration-700">
            <a href="https://www.linkedin.com/in/varunsindwani/">
              <Image filename="linkedin-logo.png" />
            </a>
          </div>
      </section>
      <section className="mt-8 font-main text-white text-center">
        <h1 className="text-xl mt-4">For all business inquiries, please email me 👋</h1>
        <h2 className="text-lg mt-4">varun@sindwani.com</h2>
      </section>
    </main>
  </div>
);

export default ContactPage;
