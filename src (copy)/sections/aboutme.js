import React from 'react';
import Gaming from '../assets/images/pixel.gif'
import Teaching from '../assets/images/teaching.gif'
import Food from '../assets/images/ramen.gif'
import Privacy from '../assets/images/hack.gif'

const AboutMe = () =>    {
    return(
    //     <section className="w-full mb-16">
    //   <div className="w-full max-w-4xl mx-auto my-32  px-8 md:px-0 lg:px-0">
    //     <div className="text-center max-w-md mx-auto">
    //       <h1 className="font-bold text-3xl">Things I care about</h1>
    //       <p className="text-lg mt-4">I'm passionate about lots of different topics, but below are some of the few I care deeply about</p>
    //     </div>
    //     <div className="mt-16">
    //       <img src={Gaming} className="mb-8"/>
    //       <h1 className="text-xl font-bold capitalize">GAMES</h1>
    //       <p></p>
    //     </div>
    //     <div className="mt-16">
    //       <img src={Teaching} className="mb-8"/>
    //       <h1 className="text-xl font-bold capitalize">TEACHING</h1>
    //       <p></p>
    //     </div>
    //     <div className="mt-16">
    //       <img src={Food} className="mb-8 w-full"/>
    //       <h1 className="text-xl font-bold capitalize">FOOD</h1>
    //       <p></p>
    //     </div>
    //     <div className="mt-16">
    //       <img src={Privacy} className="mb-8"/>
    //       <h1 className="text-xl font-bold capitalize">INTERNET PRIVACY</h1>
    //       <p></p>
    //     </div>
    //   </div>
    // </section>
    <>
    <section>
    <div className="font-main text-center mt-16">
      <h1 className="text-3xl font-bold ">Things I care about</h1>
      <p className="max-w-sm text-gray-700 ">I'm passionate about lots of different topics but below are some of the few I care deeply about</p>
    </div>
  </section>

  <section className=" w-full flex pt-20 lg:pb-20 pb-0">
    <div className="mx-auto flex flex-col max-w-6xl lg:flex-row">
      <div className="font-main max-w-sm mx-auto mb-8">
        <h1 className="text-3xl font-bold">Because Games Matter?</h1>
        <p className="mt-4"> I vivdly remember when I was younger pluging in the RCA connectors and playing my first game. The vast sea I explored in
            Pirates of Carribean, exapnsive story of Power Rangers, and the 'edge of the seat' excitement of playing Pacman. Gaming has led to my interest in technology and
            the impact it can have on the world.
            <br/>
        <a href="https://www.youtube.com/watch?v=C6xz58O4xq8" className="font-bold underline inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400">Learn More</a></p>
      </div>
      <div className="w-full h-auto max-w-md mx-auto lg:ml-40">
        <img className="w-full" src={Gaming} />
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
        <p className="mt-4">Believing in the open source ideology, I have always been trying to give back to the community for all the help I received in learning programming (Youtube, free books, etc). I believe it is everyone's duty to pass on their knowledge <br/>
        <a href="https://www.youtube.com/watch?v=pW-SOdj4Kkk" className="font-bold underline inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400">Learn More</a></p>
      </div>
    </div>
  </section>

  <section className=" w-full flex pt-20 lg:pb-20 pb-0">
    <div className="mx-auto flex flex-col max-w-6xl lg:flex-row">
      <div className="font-main max-w-sm mx-auto mb-8">
        <h1 className="text-3xl font-bold">Food and Cooking </h1>
        <p className="mt-4"> "What's life without a little spice", One of my favourite hobbies is to cook. I love exploring different regional cuisines and deconstrucing them down to their core elements. I think food is one way for us to understand different cultures/people.
            <br/>
        <a href="https://www.youtube.com/watch?v=bJUiWdM__Qw" className="font-bold underline inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400">Learn More</a></p>
      </div>
      <div className="w-full h-auto max-w-md mx-auto lg:ml-40">
        <img className="w-full" src={Food} />
      </div>
    </div>
  </section>

  <section className=" w-full flex pt-20 lg:pb-20 pb-0 mb-16">
    <div className="mx-auto flex flex-col-reverse max-w-6xl lg:flex-row">
      <div className="font-main max-w-md w-full h-auto mx-auto mb-8 lg:mr-40 mr-0">
        <img className="w-full" src={Privacy} />
      </div>
      <div className="font-main max-w-sm mb-8 mx-auto">
        <h1 className="text-3xl font-bold">Internet Privacy</h1>
        <p className="mt-4"> "If you have nothing to say should you not care about free speech?" I find even more prevalent today the need to protect yourself online. I consider myself as an advocate for internet privacy and how to keep your data safe. 
        <br />
        <a href="https://www.youtube.com/watch?v=yG4JL0ZRmi4" className="font-bold underline inline bg-gradient-t-highlight transition duration-700 hover:bg-blue-400">Learn More</a></p>
      </div>
    </div>
  </section>

  </>
);
}

export default AboutMe;
