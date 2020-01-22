import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import WorkPanel from '../components/workpanel';

const WorkPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-2xl text-white font-bold">Experience</h1>
    <WorkPanel 
      image="cloud.png"
      company="Airgate Tech • Microsoft"
      date="July 2019 - Aug. 2019"
      title="Cloud Engineer Intern"
      location="Vaughan, ON"
      desc={["Recognized for work on Microsoft Teams healthcare demo by receiving a global shout out at Microsoft Inspire","Developed multiple PWA with ReactJS, GraphQL, and TailwindCSS deploying them on Azure","Created and integrated NLP in healthcare bots with Python and C# to help answer hospital patient questions"]}
    />

    <WorkPanel 
      image="man.png"
      company="Sys. & Comp. Eng. Society"
      date="Sep. 2019 - Pres."
      title="Vice President"
      location="Ottawa, ON"
      desc={["Lectured and managed talks on a variety of topics (Git, C/C++, Web Dev, Python, etc.) to over 100 students","Organized multiple tech related events (Resume Roast, Coffee and Code, etc.) to over 50 students","Attended weekly meetings and gave reports based on progress and laid out plans for upcoming weeks"]}
    />

    <WorkPanel 
      image="blood-bag.png"
      company="Blood Hacks • Carleton Uni"
      date="Oct. 2019 - Pres."
      title="Software Engineer"
      location="Ottawa, ON"
      desc={["Created a Hackathon dedicated to donating blood to charity and involving the healthcare and tech community","Developed a landing page with ReactJS, GraphQL, and TailwindCSS deploying it on Netlify (AWS) ", "Created a login page with ReactJS and Firebase to help manage participants, volunteers, and leaders"]}
    />

    <h1 className="text-2xl text-white font-bold">Intiatives</h1>
    <WorkPanel 
      image="rocket.png"
      company="BlastForward • Carleton Uni"
      date="Sep. 2019 - Pres."
      title="Director"
      location="Ottawa, ON"
      desc={["Created a non-profit organization to promote technological innovation at Carleton University", "Collaborated with societies, clubs, and school department all over campus to help bring unity to tech groups", "Developed a landing page with ReactJS, GraphQL, and TailwindCSS and led students in managing website"]}
    />

    <WorkPanel 
      image="help.png"
      company="Lyfe Boat • Carleton Uni"
      date="Sep. 2019 - Pres."
      title="Director"
      location="Ottawa, ON"
      desc={["Created a group dedicated to working with non-profits and using technology to promote public welfare","Developed a landing page with ReactJS, GraphQL, and TailwindCSS" ,"Working with Canadian Blood Society to help increase the number of people that donate blood"]}
    />

    <WorkPanel 
      image="terminal.png"
      company="Hack Carleton • Carleton Uni"
      date="Oct. 2019 - Pres."
      title="Director"
      location="Ottawa, ON"
      desc={["Created a group dedicated to taking student developers and training them to build technologies for Carleton","Developed a landing page with ReactJS, GraphQL, and TailwindCSS","Working on creating websites for other clubs and societies (Sys. and Comp. Engineering Society Website)"]}
    />

    <WorkPanel 
      image="api.png"
      company="Open Data • Carleton Uni"
      date="Nov. 2019 - Pres."
      title="Director"
      location="Ottawa, ON"
      desc={["Creating a Carleton University API for local app developers to easily access university data","Creating a REST API with Go and managing data using PostgreSQL","Collecting data by going out to different locations on campus and using software/tools to track progress"]}
    />
  </Layout>
);

export default WorkPage;
