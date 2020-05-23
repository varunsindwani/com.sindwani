import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import WorkPanel from '../components/workpanel';

import Raven from '../assets/icons/ravens.png';
import OCADU from '../assets/icons/ocadu.png';
import Airgate from '../assets/icons/airgate.jpg'; 
import Banner from '../assets/icons/banner.png'; 
import Ramen from '../assets/icons/ramen.png'; 
import Tulsi from '../assets/icons/tulsi.png'; 
import Tedx from '../assets/icons/tedx.png'; 
import SCESOC from '../assets/icons/scesoc.png'; 
import Rocket from '../assets/icons/rocket.png'; 
import Hack from '../assets/icons/hack.png'; 
import API from '../assets/icons/api.png'; 


import Python from '../assets/icons/python.png';
import CPP from '../assets/icons/cpp.png'; 
import C from '../assets/icons/c.png'; 
import Golang from '../assets/icons/golang.png'; 
import HTML from '../assets/icons/html5.png'; 
import CSS from '../assets/icons/css.png'; 
import RaspberryPi from '../assets/icons/raspberrypi.png'; 
import ReactJS from '../assets/icons/reactjs.png';
import Redux from '../assets/icons/redux.png';
import TypeScript from '../assets/icons/typescript.png';
import Kubernetes from '../assets/icons/kubernetes.png';
import Git from '../assets/icons/git.png';
import CSharp from '../assets/icons/csharp.png';
import Inkscape from '../assets/icons/inkscape.png';
import GraphQL from '../assets/icons/graphql.png';
import Azure from '../assets/icons/azure.png';
import AdobeXD from '../assets/icons/adobexd.png';
import JavaScript from '../assets/icons/javascript.png';
import Java from '../assets/icons/java.png';
import Docker from '../assets/icons/docker.png';
import Latex from '../assets/icons/latex.png';
import Heroku from '../assets/icons/heroku.png';
import Django from '../assets/icons/django.png';
import NodeJS from '../assets/icons/nodejs.png';
import OpenGL from '../assets/icons/opengl.png';
import SDL from '../assets/icons/sdl.png';


import Tag from '../components/tag';

const WorkPage = () => {
  return (
  <Layout>
    <div className="mb-16"></div>
    <WorkPanel
      header={
        <div>
          Education
          <div className="h-1 bg-black"></div>
        </div>
      }
      image={Raven}
      company="Carleton University"
      date="Sep. 2019 - May 2023"
      title="Software Engineering (BEng)"
      location="Ottawa, ON"
      desc={
        <div>
          <h1>Relavent Coursework:</h1>
          <ul className="pl-8">
            <li className="list-disc">ECOR 1051 - Intro to Programming</li>
          </ul>
        </div>
      }
      tags={
        <div className="flex flex-row">
          <Tag
            tag="Python"
            image={Python}
          />
          <Tag
            tag="Raspberry Pi"
            image={RaspberryPi}
          />
          <Tag
            tag="LaTeX"
            image={Latex}
          />
        </div>
      }
    />

<WorkPanel
      header={<br className="mb-1" />}
      image={OCADU}
      company="Ontario College of Art and Design Univeristy"
      date="May 2020 - May 2023"
      title="UX Design and Development Skills"
      location="Toronto, ON"
      desc={
        <div>
          <h1>Relavent Coursework:</h1>
          <ul className="pl-8">
            <li className="list-disc">Introduction to UI and UX</li>
          </ul>
        </div>
      }
      tags={
        <div className="flex flex-row">
          <Tag
            tag="Adobe XD"
            image={AdobeXD}
          />
          <Tag
            tag="Inkscape"
            image={Inkscape}
          />
        </div>
      }
    />
    <div className="mb-16"></div>
    <WorkPanel
      header={
        <div>
          Work Experience
          <div className="h-1 bg-black"></div>
        </div>
      }
      image={Banner}
      company="Banner Publish"
      date="Sep. 2019 - Present"
      title="Software Engineer"
      location="Toronto, ON"
      desc={
        <div>
          Developing a full stack web application to connect Authors with Publishers, Agents, and other industry professionals. Frontend is built using ReactJS0, Redux, and TypeScript. Backend is built using Django (Python) and PostgreSQL.
        </div>
      }
      tags={
        <div className="flex flex-row">
          <Tag
            tag="ReactJS"
            image={ReactJS}
          />
          <Tag
            tag="Redux"
            image={Redux}
          />
          <Tag
            tag="TypeScript"
            image={TypeScript}
          />
          <Tag
            tag="Django"
            image={Django}
          />
          <Tag
            tag="Python"
            image={Python}
          />
          <Tag
            tag="Heroku"
            image={Heroku}
          />
        </div>
      }
    />

    <WorkPanel
      header={<br className="mb-1" />}
      image={Ramen}
      company="NightTime Ramen"
      date="Dec. 2019 - Present"
      title="Software Engineer"
      location="Toronto, ON"
      desc={
        <div>
         Developing Origrami a game engine for building immersive 2d games. Working with low level technologies such as C/C++, SDL, and OpenGL. Other projects include developing games ontop of the engine utilizing the same technologies.
        </div>
      }
      tags={
        <div className="flex flex-row">
          <Tag
            tag="C"
            image={C}
          />
          <Tag
            tag="C++"
            image={CPP}
          />
          <Tag
            tag="SDL"
            image={SDL}
          />
          <Tag
            tag="OpenGL"
            image={OpenGL}
          />
        </div>
      }
    />

    <WorkPanel
      header={<br className="mb-1" />}
      image={Airgate}
      company="Airgate Technologies"
      date="July. 2019 - Aug. 2019" 
      title="Cloud Engineer Intern"
      location="Toronto, ON"
      desc={
        <div>
         Worked at a Microsoft Partner the summer of my Grade 12 Year. Most of my work involved using Microsoft's Cloud Platform, Azure. I built multiple PWA using ReactJS, GraphQL, and TailwindCSS later deploying them on Azure. I helped to create healthcare bots using C# and Python (Preview). I also helped write create pipelines with Azure Functions, OCR, and Email Automation.

        </div>
      }
      tags={
        <div className="flex flex-row">
          <Tag
            tag="ReactJS"
            image={ReactJS}
          />
          <Tag
            tag="Python"
            image={Python}
          />
          <Tag
            tag="C#"
            image={CSharp}
          />
          <Tag
            tag="Azure"
            image={Azure}
          />
          <Tag
            tag="GraphQL"
            image={GraphQL}
          />
          <Tag
            tag="Kubernetes"
            image={Kubernetes}
          />
          <Tag
            tag="Docker"
            image={Docker}
          />
        </div>
      }
    />

    <WorkPanel
      header={<br className="mb-1" />}
      image={SCESOC}
      company="Sys. and Comp. Engineering Society"
      date="Sep. 2019 - Present"
      title="Vice President"
      location="Ottawa, ON"
      desc={
        <div>
         Worked with other senior students in the department of Systems and Computer Engineering at Carleton University. Developed a variety of Workshops and Tutorials related to Computer Science and Software Engineering. Also leading the main website development and other engineering efforts.
        </div>
      }
      tags={
        <div className="flex flex-row">
          <Tag
            tag="ReactJS"
            image={ReactJS}
          />
          <Tag
            tag="Python"
            image={Python}
          />
          <Tag
            tag="HTML"
            image={HTML}
          />
          <Tag
            tag="CSS"
            image={CSS}
          />
        </div>
      }
    />

    <WorkPanel
      header={<br className="mb-1" />}
      image={Tedx}
      company="TedXCarleton"
      date="May 2020 - Present"
      title="Engineering Lead"
      location="Ottawa, ON"
      desc={
        <div>
          In progress more to come!
        </div>
      }
      tags={
        <div className="flex flex-row">
          <Tag
            tag="ReactJS"
            image={ReactJS}
          />
          <Tag
            tag="HTML"
            image={HTML}
          />
          <Tag
            tag="CSS"
            image={CSS}
          />
        </div>
      }
    />
    <div className="mb-16"></div>
    <WorkPanel
      header={
        <div>
          Initiatives
          <div className="h-1 bg-black"></div>
        </div>
      }
      image={Rocket}
      company="Blast Forward"
      date="Sep. 2019 - Present"
      title="Software Engineer"
      location="Ottawa, ON"
      desc={
        <div>
          A website for Carleton University Students to get a list of all upcoming events around campus related to Technology, Business, and much more.
        </div>
      }
      tags={
        <div className="flex flex-row">
          <Tag
            tag="ReactJS"
            image={ReactJS}
          />
          <Tag
            tag="HTML"
            image={HTML}
          />
          <Tag
            tag="CSS"
            image={CSS}
          />
        </div>
      }
    />

    <WorkPanel
      header={<br className="mb-1" />}
      image={Hack}
      company="Hack Carleton"
      date="Oct. 2019 - Present"
      title="Software Engineer"
      location="Ottawa, ON"
      desc={
        <div>
          A club at Carleton Univeristy dedicated to making free and open source technologies for other socities and clubs around campus.
        </div>
      }
      tags={
        <div className="flex flex-row">
          <Tag
            tag="ReactJS"
            image={ReactJS}
          />
          <Tag
            tag="NodeJS"
            image={NodeJS}
          />
          <Tag
            tag="Python"
            image={Python}
          />
          <Tag
            tag="Java"
            image={Java}
          />
        </div>
      }
    />

    <WorkPanel
      header={<br className="mb-1" />}
      image={API}
      company="Open API"
      date="Dec. 2019 - Present"
      title="Software Engineer"
      location="Ottawa, ON"
      desc={
        <div>
          Developing a API for Carleton University which allows you to access a variety of data such as locations, school courses, and much more.
        </div>
      }
      tags={
        <div className="flex flex-row">
          <Tag
            tag="Golang"
            image={Golang}
          />
          <Tag
            tag="ReactJS"
            image={ReactJS}
          />
          <Tag
            tag="HTML"
            image={HTML}
          />
          <Tag
            tag="CSS"
            image={CSS}
          />
        </div>
      }
    />
    <div className="mb-16"></div>
    


  </Layout>
);
}

export default WorkPage;
