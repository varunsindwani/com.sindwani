import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import WorkPanel from '../components/workpanel';

const WorkPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-3xl text-white font-bold ml-auto mr-auto mb-6">Coming Soon ... Check out my linkedin in the footer for now!</h1>
    <h1 className="text-2xl text-white font-bold">Main Things I am working on / have worked on: </h1>
    <ul className="text-2xl text-white font-bold ml-auto mr-auto">
      <li className="text-xl text-white font-bold list-disc">Cloud Engineer at Canada's leading Azure (Microsoft Cloud) Partner - Airgate Technologies</li>
      <li className="text-xl text-white font-bold list-disc">Director - Systems and Computer Engineering Society of Carleton</li>
      <li className="text-xl text-white font-bold list-disc">President of BlastForward a non profit dedicated to accelerating technology growth at Carleton University</li>
        <li className="text-xl text-white font-bold">
          <ul className="ml-6">
            <li className="text-xl text-white font-bold ml-auto mr-auto list-disc">HackCarleton - A group of dedicated developers helping to create technologies for others on campus</li>
            <li className="text-xl text-white font-bold ml-auto mr-auto list-disc">LyfeBoat - A group working with other non-profits to develop technologies for those in need</li>
            <li className="text-xl text-white font-bold ml-auto mr-auto list-disc">OpenData - Creating a CarletonUni API to allow for easy access to data</li>
            <li className="text-xl text-white font-bold ml-auto mr-auto list-disc">More projects to come!</li>
          </ul>
        </li>
      <li className="text-xl text-white font-bold ml-auto mr-auto list-disc">Working on a few startup ideas! </li>
    </ul>
  </Layout>
);

export default WorkPage;
