import React from 'react';
import Footer from '../components/footer';

const Todoswipe = () => (
  <div className="">
      <section className="bg-red-500 pt-48 pb-16 text-white font-bold text-center">
        <h1 className="text-sm uppercase">Todoswipe</h1>
        <h1 className="text-5xl mt-6 uppercase">A TODO App</h1>
      </section>
      <section className="w-full">
        <div className="w-full max-w-4xl mx-auto my-20">
            <h1 className="text-red-500 uppercase text-md font-bold">Overview</h1>
            <h1 className="text-3xl font-bold text-black mt-4">About the project</h1>
            <div className="flex mt-6">
                <div className="w-1/2">
                   <div className="mb-6">
                       <h1 className="text-sm font-bold mb-2">Problem</h1>
                       <p>Being frustrated with all my todo apps I kept feeling disorganized and cluttered using apps werent helping my situation.</p>
                   </div>
                   <div>
                   <h1 className="text-sm font-bold mb-2">Solution</h1>
                   <p>Being frustrated with all my todo apps I kept feeling disorganized and cluttered using apps werent helping my situation.</p>
                   </div>
                </div>
                <div className="w-1/2 ml-16">
                    <h1 className="text-sm font-bold mb-2">Role</h1>
                    <p>Designer</p>
                </div>
            </div>
        </div>
      </section>
      <section className="bg-gray-200 py-16">
        <div className="max-w-4xl text-center mx-auto">
            <h1 className="text-red-500 uppercase text-md font-bold mb-4">The Challenge</h1>
            <p class="max-w-md">Lorem Ipsum doris el</p>
	    
            <div className="flex mx-auto max-w-xl mt-8">
                <div>
                    <h1>Why is this happening?</h1>
                    <div className="flex mt-4">
                        <div className="rounded-full bg-gray-300 text-white w-8 h-8 text-center font-bold my-auto py-auto "> 1 </div>
                        <h1 className="ml-4 my-auto"> Thing 1 </h1>
                    </div>
                </div>
                <div className="ml-auto">
                    <h1>What can we do to fix this?</h1>
                </div>
            </div>

	    </div>
      </section>
      <section>
        <div className="w-full max-w-4xl mx-auto mt-20">
            <h1 className="text-red-500 uppercase text-md font-bold">Timeline</h1>
            <h1 className="text-3xl font-bold text-black mt-4">My Journey</h1>
            <div className="flex justify-between text-center mt-6">
                <div>
                    <div className="w-24 h-24 bg-red-500"></div>
                    <h1 className="mt-4">Research</h1>
                </div>
                <div>
                    <div className="w-24 h-24 bg-red-500"></div>
                    <h1 className="mt-4">Insights</h1>
                </div>
                <div>
                    <div className="w-24 h-24 bg-red-500"></div>
                    <h1 className="mt-4">Ideation</h1>
                </div>
                <div>
                    <div className="w-24 h-24 bg-red-500"></div>
                    <h1 className="mt-4">Rationale</h1>
                </div>
                <div>
                    <div className="w-24 h-24 bg-red-500"></div>
                    <h1 className="mt-4">Wireframe</h1>
                </div>
                <div>
                    <div className="w-24 h-24 bg-red-500"></div>
                    <h1 className="mt-4">Solution</h1>
                </div>
                <div>
                    <div className="w-24 h-24 bg-red-500"></div>
                    <h1 className="mt-4">Reflections</h1>
                </div>
            </div>
        </div>
      </section>
      <section>
        <div className="w-full max-w-4xl mx-auto mt-20">
            <h1 className="text-red-500 uppercase text-md font-bold">Research</h1>
            
        </div>
      </section>
      <section>
        <div className="w-full max-w-4xl mx-auto mt-20">
            <h1 className="text-red-500 uppercase text-md font-bold">Research Insights</h1>
            
        </div>
      </section>
      <section>
        <div className="w-full max-w-4xl mx-auto mt-20">
            <h1 className="text-red-500 uppercase text-md font-bold">Ideation</h1>
            
        </div>
      </section>
      <section>
        <div className="w-full max-w-4xl mx-auto mt-20">
            <h1 className="text-red-500 uppercase text-md font-bold">Rationale</h1>
            
        </div>
      </section>
      <section>
        <div className="w-full max-w-4xl mx-auto mt-20">
            <h1 className="text-red-500 uppercase text-md font-bold">Wireframe</h1>
            
        </div>
      </section>
      <section>
        <div className="w-full max-w-4xl mx-auto mt-20">
            <h1 className="text-red-500 uppercase text-md font-bold">Solution</h1>
            
        </div>
      </section>
      <section>
        <div className="w-full max-w-4xl mx-auto mt-20">
            <h1 className="text-red-500 uppercase text-md font-bold">Reflection</h1>
            
        </div>
      </section>
      <section>
          Previous
          Next 
          Projects
      </section>
      <Footer />
  </div>
);

export default Todoswipe;
