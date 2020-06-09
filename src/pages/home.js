import React from 'react';

import Layout from '../components/layout';
import RoundImage from '../components/roundImage';
import SCIFI from '../assets/images/scifi.gif'
import ramen from '../assets/images/ramen.gif'
import Pixel from '../assets/images/pixel.gif';
import Teaching from '../assets/images/teaching.gif';
import Hack from '../assets/images/hack.gif'

const HomePage = () => (
  <Layout title="Home">
    <section className="bg-purple-700 pb-32 w-full md:pt-10 lg:pt-20 font-main">
      <div className="container mx-auto flex flex-wrap flex-col-reverse md:flex-col-reverse lg:flex-row">
      <div className="flex flex-col md:w-4/5 lg:w-3/5 items-start text-center md:text-left mx-auto">
        <h1 className="text-6xl text-white font-bold tracking-tight font-main mb-4">Hi, I'm Varun.</h1>
        <h2 className="text-2xl text-white tracking-wide mb-4">I currently work at <a href="https://bannerpublish.com" className="inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400">
                                                              Banner</a> as a Full Stack Developer. Previously I worked at a Microsoft Partner.</h2>
        <h2 className="text-2xl text-white tracking-wide mb-4 ">I serve as a Vice President for the Systems and Computer Engineering Society <a href="https://scesoc.com" className="inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400">(SCESOC)</a>. I also run <a href="https://blastforward.org" className="inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400">
                                                              Blast</a>, <a href="https://hackcarleton.com" className="inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400">Hack</a>, and <a href="" className="inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400">OpenAPI</a>.</h2>
        <h2 className="text-2xl text-white tracking-wide mb-4">I am pursuing a Software Engineering (BEng) degree at <a href="https://carleton.ca" className="inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400">Carleton University</a> and studying UI/UX at <a href="https://ocadu.ca" className="inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400">OCAD</a>.</h2>
        <h2 className="text-2xl text-white tracking-wide mb-4">I ocasionally <a href="https://learnswe.com" className="inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400">blog</a> about tech, you can also find my thoughts on <a href="https://twitter.com/VarunSindwani" className="inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400">
                                                              twitter</a>, <a href="https://www.youtube.com/channel/UCqoGMeWTAUQBDCpnY_zff-w/" className="inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400">youtube</a>, and <a href="https://instagram.com/varun.sindwani" className="inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400">
                                                              instagram</a>. In my free time I like reading, cooking, and watching tv.</h2>
      </div>
      <div className="w-1/2 mr-auto md:w-1/3 lg:w-1/4 md:ml-auto md:mr-auto text-center items-center flex flex-col justify-center mx-auto">
        <RoundImage filename="varun.JPG" />
        <h1 className="my-2 text-2xl font-bold font-main text-white">Developer + Designer</h1>
        <div className="flex flex-col">
          <button class="bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ml-auto mr-auto md:m-0">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span>Resume</span>
          </button>
        </div>
      </div>
    </div>
    </section>
    <section className="pb-20">
      <div className=" w-3/4 lg:w-4/5 bg-gray-900 mx-auto rounded-lg overflow-x-scroll overflow-y-auto md:overflow-visible -mt-24">
        <div className="w-screen max-w-6xl">
          <div>
            <button className="bg-purple-600 rounded-full h-3 w-3 mt-2 ml-3"></button>
            <button className="bg-blue-600 rounded-full h-3 w-3 mt-2 ml-2"></button>
            <button className="bg-yellow-600 rounded-full h-3 w-3 mt-2 ml-2"></button>
          </div>
          <div className="mt-4 text-white ml-4 pb-4 font-hack">
            Welcome to fish, the friendly interactive shell
            <h1> <a className="text-blue-500 font-bold">com.sindwani</a> on <a className="text-purple-500 font-bold">master</a> via <a className="text-green-500 font-bold">⬢ v13.2.0</a></h1>
            <h1 className="font-black ml-2 mb-1">> new person Varun = new person()</h1>
            <h1 className="font-black ml-2 mb-1">> Varun.origin()</h1>
            <h1 className="font-black ml-10 mb-1">Born in 🇮🇳 India raised in 🇨🇦 Canada</h1>
            <h1 className="font-black ml-2 mb-1">> Varun.motto()</h1>
            <h1 className="font-black ml-10 mb-1">🍵 Sharing tea with a fascinating stranger is one of life’s true delights - Iroh</h1>
            <h1 className="font-black ml-2 mb-1">> Varun.favouriteBooks</h1>
            <h1 className="font-black ml-10 mb-1">["💻 Clean Code", "🌪️ Name of the wind", "🐲 Game of Thrones"]</h1>
            <h1 className="font-black ml-2 mb-1">> Varun.favouriteFoods()</h1>
            <h1 className="font-black ml-10 mb-1">["🍜 Maggi Noodles", "🍦 Icecream Float", "🥕 Carrots"]</h1>
            <h1 className="font-black ml-2 mb-1">> Varun.favouriteTV() </h1>
            <h1 className="font-black ml-10 mb-4">["🔥 Avatar: The Last Airbender", "🧪 Full Metal Alchemist", "🚀 Star Wars"]</h1>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="font-main text-center">
        <h1 className="text-3xl font-bold ">Things I care about</h1>
        <p className="max-w-sm text-gray-700 ">I'm passionate about lots of different topics but below are some of the few I care deeply about</p>
      </div>
    </section>

    <section className=" w-full flex pt-20 lg:pb-20 pb-0">
      <div className="mx-auto flex flex-col max-w-6xl lg:flex-row">
        <div className="font-main max-w-sm mx-auto mb-8">
          <h1 className="text-3xl font-bold">Because Games Matter?</h1>
          <p> I vivdly remember when I was younger pluging in the RCA connectors and playing my first game. The vast sea I explored in
              Pirates of Carribean, exapnsive story of Power Rangers, and the fustration of playing Pacman. Gaming lead me to my interest in technology and
              it has showed me the impact it can have
              <br/>
          <a href="https://www.youtube.com/watch?v=C6xz58O4xq8" className="inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400">Learn More</a></p>
        </div>
        <div className="w-full h-auto max-w-md mx-auto lg:ml-40">
          <img className="w-full" src={Pixel} />
        </div>
      </div>
    </section>
    
    <section className=" w-full flex pt-20 lg:pb-20 pb-0">
      <div className="mx-auto flex flex-col-reverse max-w-6xl lg:flex-row">
        <div className="font-main max-w-md w-full h-auto mx-auto mb-8 lg:mr-40 mr-0">
          <img className="w-full" src={Teaching} />
        </div>
        <div className="font-main max-w-sm mb-8 mx-auto">
          <h1 className="text-3xl font-bold">Teaching and the Future</h1>
          <p>Believing in the open source ideology, I have always been trying to give back to the community for all the help I received in learning programming (Youtube, free books, etc). I believe it is everyones duty to pass on their knowledge <br/>
          <a href="https://www.youtube.com/watch?v=pW-SOdj4Kkk" className="inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400">Learn More</a></p>
        </div>
      </div>
    </section>

    <section className=" w-full flex pt-20 lg:pb-20 pb-0">
      <div className="mx-auto flex flex-col max-w-6xl lg:flex-row">
        <div className="font-main max-w-sm mx-auto mb-8">
          <h1 className="text-3xl font-bold">Media</h1>
          <p> Without the books and tv shows I watched growing up I don't think I would ever pursed a career in technology. Michio Kaku said "[Science Fiction]  It has a real role to play: to seize the imagination."
              <br/>
          <a href="https://www.amazon.com/Physics-Impossible-Scientific-Exploration-Teleportation/dp/0307278824" className="inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400">Learn More</a></p>
        </div>
        <div className="w-full h-auto max-w-md mx-auto lg:ml-40">
          <img className="w-full" src={SCIFI} />
        </div>
      </div>
    </section>
    
    <section className=" w-full flex pt-20 lg:pb-20 pb-0">
      <div className="mx-auto flex flex-col-reverse max-w-6xl lg:flex-row">
        <div className="font-main max-w-md w-full h-auto mx-auto mb-8 lg:mr-40 mr-0">
          <img className="w-full" src={ramen} />
        </div>
        <div className="font-main max-w-sm mb-8 mx-auto">
          <h1 className="text-3xl font-bold">Food and Cooking </h1>
          <p> "What's life without a little spice", One of my favourite hobbies is to cook. I love exploring different regional cuisines and deconstrucing them down to their core elements. I think food is one way for us to understand different cultures/people.
            <br/>
          <a href="https://www.youtube.com/watch?v=bJUiWdM__Qw" className="inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400">Learn More</a></p>
        </div>
      </div>
    </section>

    <section className=" w-full flex lg:pb-20 pb-0">
      <div className="mx-auto flex flex-col max-w-6xl lg:flex-row">
        <div className="font-main max-w-sm mx-auto mb-8">
          <h1 className="text-3xl font-bold">Internet Privacy</h1>
          <p> "If you have nothing to say should you not care about free speech?" I find even more prevalent today the need to protect yourself online. I am an advocater for internet education and how to keep your data safe. 
            <br/>
          <a href="https://www.youtube.com/watch?v=yG4JL0ZRmi4" className="inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400">Learn More</a></p>
        </div>
        <div className="w-full h-auto max-w-md mx-auto lg:ml-40">
          <img className="w-full" src={Hack} />
        </div>
      </div>
    </section>

    {/* <section className="">
      <h1 className="">TV/Movie quotes I live by</h1>
      <Quote
       image ="https://pbs.twimg.com/profile_images/1105594522522800132/WscGifG1_400x400.jpg"
       author ="Zuko"
       media ="ATLA"
       quote ="Zuko, You must look within yourself to save yourself from your other self, only then will your true self reveal itself"
       />
        <Quote
       image ="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpixelatedweb.com%2Fown%2Ffiction%2Fwp-content%2Fuploads%2F2015%2F10%2FEdward-Model-1.png&f=1&nofb=1"
       author ="Edward Elric"
       media ="FMA"
       quote ="Stand up and walk. Keep moving forward. You've got two good legs. So get up and use them. You're strong enough to make your own path."
       />
       
    </section>  */}
    {/* <section>
      Music
      <iframe src="https://open.spotify.com/embed/track/50o13VmOJiUj3WfU7XmEAn" className="w-full h-20" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </section>    */}
    {/* <section>
      <h1>My Friends </h1>
       <Friends />
    </section>         */}
  </Layout>
);

export default HomePage;
