import React from 'react';

import SEO from '../components/seo';

import Fade from 'react-reveal/Fade';
import Header from '../components/header';
import Footer from '../components/footer';

const ContactPage = () => (
  <div className="flex flex-col font-main bg-primary">
    <div className="max-h-screen h-screen flex flex-col">
    <Fade delay={500}>
      <Header />
    </Fade>
    <Fade delay={1100}>
    <div className="mb-auto flex flex-col my-auto h-full">
      <SEO title="Varun Sindwani | Contact" />
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" className=" bg-primary  flex flex-col w-4/5 my-auto text-white mx-auto h-full">
        <input type="hidden" name="form-name" value="contact" />
        <Fade delay={1600}><h1 className="text-6xl mb-8 font-bold">Lets get in touch</h1></Fade>
        <div className="flex flex-row h-3/4">
       
          <div className="w-3/5 pr-16 h-full flex flex-col">
          <Fade delay={2100}>
            <div>
              <h2 className="text-lg">I'd like to get to know your name, and it also helps to get in touch with you.</h2>
              <div className="flex flex-row mt-6">
                <div className="max-w-sm w-full">
                  <h3 className="text-2xl font-bold">What is your full name?</h3>
                  <input type="text" name="name" className="text-black w-full border-4 border-primary focus:border-two px-4 py-2 mt-4 rounded-lg" placeholder="Arya Stark"/>
                </div>
                <div className="mx-auto max-w-sm w-full">
                  <h3 className="text-2xl font-bold">What is your email?</h3>
                  <input type="email" name="email" className="text-black w-full border-4 border-primary focus:border-two px-4 py-2 mt-4 rounded-lg" placeholder="arya@stark.com"/>
                </div>
              </div>
            </div>
            </Fade>
            <Fade delay={2600}>
            <div className="my-auto">
              <h2 className="text-lg">What kind of creative work are you looking for? You can read about our services here?</h2>
              <div className="flex flex-row mt-6">
              <div class="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4 w-full">
                <label  className="flex flex-row px-4 py-3 bg-one rounded-lg checked:bg-red-300 text-left">
                  <input type="checkbox" name="branding" className="rounded-full my-auto mr-4 ring-4 ring-highlight text-highlight focus:ring-4 focus:ring-highlight" />
                  <span className="my-auto">Branding</span>
                </label>
                <label  className="flex flex-row px-4 py-3 bg-one rounded-lg checked:bg-red-300 text-left">
                  <input type="checkbox" name="strategy"  className="rounded-full my-auto mr-4 ring-4 ring-highlight text-highlight focus:ring-4 focus:ring-highlight" />
                  <span className="my-auto">Strategy</span>
                </label>
                <label  className="flex flex-row px-4 py-3 bg-one rounded-lg checked:bg-red-300 text-left">
                  <input type="checkbox" name="ui/ux"  className="rounded-full my-auto mr-4 ring-4 ring-highlight text-highlight focus:ring-4 focus:ring-highlight" />
                  <span className="my-auto">UI/UX</span>
                </label>
                <label  className="flex flex-row px-4 py-3 bg-one rounded-lg checked:bg-red-300 text-left">
                  <input type="checkbox" name="development"  className="rounded-full my-auto mr-4 ring-4 ring-highlight text-highlight focus:ring-4 focus:ring-highlight" />
                  <span className="my-auto">Development</span>
                </label>
                <label  className="flex flex-row px-4 py-3 bg-one rounded-lg checked:bg-red-300 text-left">
                  <input type="checkbox" name="product design"  className="rounded-full my-auto mr-4 ring-4 ring-highlight text-highlight focus:ring-4 focus:ring-highlight" />
                  <span className="my-auto">Product Design</span>
                </label>
                <label  className="flex flex-row px-4 py-3 bg-one rounded-lg checked:bg-red-300 text-left">
                  <input type="checkbox" name="marketing"  className="rounded-full my-auto mr-4 ring-4 ring-highlight text-highlight focus:ring-4 focus:ring-highlight" />
                  <span className="my-auto">Marketing</span>
                </label>
                <label  className="flex flex-row px-4 py-3 bg-one rounded-lg checked:bg-red-300 text-left">
                  <input type="checkbox" name="logo design"  className="rounded-full my-auto mr-4 ring-4 ring-highlight text-highlight focus:ring-4 focus:ring-highlight" />
                  <span className="my-auto">Logo Design</span>
                </label>
                <label  className="flex flex-row px-4 py-3 bg-one rounded-lg checked:bg-red-300 text-left">
                  <input type="checkbox" name="copy writing"  className="rounded-full my-auto mr-4 ring-4 ring-highlight text-highlight focus:ring-4 focus:ring-highlight" />
                  <span className="my-auto">Copy Writing</span>
                </label>
                <label  className="flex flex-row px-4 py-3 bg-one rounded-lg checked:bg-red-300 text-left">
                  <input type="checkbox" name="other"  className="rounded-full my-auto mr-4 ring-4 ring-highlight text-highlight focus:ring-4 focus:ring-highlight" />
                  <span className="my-auto">Other</span>
                </label>
              </div>
              </div>
            </div>
            </Fade>
          </div>
          <Fade delay={3100}>
          <div className="w-2/5 pr-4 h-full">
            <div className="h-full">
              <h2 className="text-lg">Tell me what you need help with, the purpose of this project and the problems we're solving.</h2>
              <div className="w-full mt-6 h-3/4">
                  <h3 className="text-2xl font-bold">What is your project about?</h3>
                  <textarea name="message" className="w-full border-4 border-primary focus:border-two px-4 py-2 mt-4 rounded-lg h-3/4 block text-black" placeholder="Hey Varun, I'd love to talk to you about this new innovative app we are working on ..."></textarea>
                </div>
            </div>
          </div>
          </Fade>
        </div>
        <Fade delay={3600}>
        <div className="pb-auto">
          <div className="h-1 w-full bg-one"></div>
          <div className="flex mt-4">
            <div className="my-auto">Want to book a call quickly, click <a href="https://www.calendly.com/varunsindwani" className="underline font-bold" target="_blank" rel="noopener noreferrer">here</a>.</div>
            <input type="submit" value="Submit" className="ml-auto px-8 py-2 bg-two rounded-lg cursor-pointer font-bold"/>
          </div>
        </div>
        </Fade>
        </form>
        
      </div>
      </Fade>
    </div>
    
    <Footer />
  </div>
);

export default ContactPage;
